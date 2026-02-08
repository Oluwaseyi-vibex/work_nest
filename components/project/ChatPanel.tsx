import { useEffect, useMemo, useRef } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchChatHistory, sendMessage } from "@/services/message.service";
import { useChatSocket } from "@/hooks/useChatSocket";
import { useForm } from "react-hook-form";
import { Send, Loader2, SendHorizontal, Paperclip } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { formatTime, groupMessagesByDate } from "@/utils/formatData";
import { Message } from "@/types";
import { toast } from "react-toastify";
import {
  deleteFile,
  fetchFileHistory,
  uploadChatFile,
} from "@/services/file.service";

export default function ChatPanel({ projectId }: { projectId: string }) {
  const { register, handleSubmit, reset } = useForm();
  const messagesRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollbottom = () => {
    messagesRef.current?.scrollIntoView({ behavior: "instant" });
  };

  // 1. Fetch Message History
  const { data: messages, isLoading } = useQuery({
    queryKey: ["chat-history", projectId],
    queryFn: () => fetchChatHistory(projectId),
  });
  // 1. Fetch File History
  const { data: projectFiles, isLoading: filesIsLoading } = useQuery({
    queryKey: ["file-history", projectId],
    queryFn: () => fetchFileHistory(projectId),
  });

  // Inside your ChatPanel component
  const unifiedFeed = useMemo(() => {
    const msgList = messages?.data || [];
    const fileList = projectFiles?.data || [];

    const combined = [
      ...msgList.map((m: any) => ({ ...m, feedType: "TEXT" })),
      ...fileList.map((f: any) => ({ ...f, feedType: "FILE" })),
    ];

    // Sort by the 'createdAt' timestamp from your DB
    const sorted = combined.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );

    // Group the sorted list by date using your existing utility
    return groupMessagesByDate(sorted);
  }, [messages?.data, projectFiles?.data]);

  // 2. Real-time Listener
  useChatSocket(projectId);

  // 3. Send Message Mutation
  const mutation = useMutation({
    mutationFn: sendMessage,
  });

  const fileMutation = useMutation({
    mutationFn: ({ file }: { file: File }) =>
      uploadChatFile({ projectId, file }),
    onSuccess: () => {
      toast.success("File shared!");
    },
  });
  const deleteFileMutation = useMutation({
    mutationFn: (fileId: string) => deleteFile(fileId),
    onSuccess: () => {
      toast.success("File deleted!");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      fileMutation.mutate({ file });
    }
  };

  const onSend = (data: any) => {
    if (!data.content.trim()) return;
    mutation.mutate(
      { projectId, content: data.content },
      {
        onSuccess: () => {
          reset({ content: "" });
        },
      },
    );
  };

  const handlePaperclipClick = () => {
    fileInputRef.current?.click();
  };

  console.log(unifiedFeed);

  useEffect(() => {
    scrollbottom();
  }, [messages]);

  if (isLoading)
    return <div className="p-4 text-center">Loading messages...</div>;

  return (
    <>
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* <!-- Date Divider --> */}
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-[#dde4e4] dark:border-gray-800"></div>
          <span className="flex-shrink mx-4 text-[10px] font-bold uppercase tracking-widest text-[#678383]">
            Today, October 24
          </span>
          <div className="flex-grow border-t border-[#dde4e4] dark:border-gray-800"></div>
        </div>
        {/* <!-- Single Message Component (Sarah) --> */}
        <div className="flex gap-4 group">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-10 flex-shrink-0 shadow-sm"
            data-alt="Sarah Chen Avatar"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAoTc44Y_1bc8pi3HWobJaorBIfZTxqVdTqDiaJ2vJQ9Jf5xcdLMkVdE6mDBmrV4iYLHAmBqTj9zQfHq8Z09PZdIFx0ne3w0A-Uc-y4bqDfHHG_VAbli9y5FBE4Xc9UH9Po34P-lFdRx79U5wm_WdZb1Evvmp0dqc46FX4t0vIpR8YWq9FvYpozuBrcU6GPOlBrp6yuDNu5weqTWAIJAr51oInmNK4N6JZB3TKL1oOTvt0H4B7PCCWQyGws2Yy5e1Upx0yVEOWDsiRj)",
            }}
          ></div>
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="flex items-baseline gap-2">
              <p className="text-sm font-bold text-[#121717] dark:text-white">
                Sarah Chen
              </p>
              <p className="text-[11px] text-[#678383] font-medium">10:24 AM</p>
            </div>
            <div className="text-[15px] leading-relaxed text-[#121717] dark:text-gray-300">
              Hey <span className="text-primary2 font-bold">@Team</span>, check
              out the latest wireframes for the landing page. I've focused on
              mobile responsiveness first. What do you think about the hero
              section layout?
            </div>
            {/* <!-- Attachment Thumbnail --> */}
            <div className="mt-2 relative group/img cursor-pointer">
              <div
                className="bg-center bg-no-repeat aspect-video bg-cover rounded-xl border border-[#dde4e4] dark:border-gray-800 w-full max-w-[440px] shadow-sm hover:shadow-md transition-shadow"
                data-alt="Wireframe mobile design mockup"
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCeTQXNjvMnA5LZrev32wvusFbtwCdQmjj_KYOnEURLSN1TIqq21XGpwbFfa74ODcwFDq20OYz0nCd2XHstexU6piAY9m3_oJKomfeFLWYL0Oj5ddaOL2Cx7maWm3Z-t5cj13Z-vi7spxZz7QBRukRjZRaiENz4UlLb9nOg8pz5wtgYq6ys9ynW6gIfmSkIMibJFLbPVUzRnnRc-mRXB-IiFbJChGXfPesm6RIUEGBf_H7VC0k4fNL9sPzazinzLpqxvcxb2FJjV3tu)",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 rounded-xl transition-colors"></div>
              <div className="mt-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary2 text-sm">
                  image
                </span>
                <span className="text-[11px] font-bold text-[#678383] hover:underline">
                  mobile-hero-v2.png
                </span>
                <span className="text-[11px] text-[#678383]">2.4 MB</span>
              </div>
            </div>
          </div>
          {/* <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 self-start pt-1 transition-opacity">
            <button className="size-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
              <span className="material-symbols-outlined text-lg">mood</span>
            </button>
            <button className="size-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
              <span className="material-symbols-outlined text-lg">reply</span>
            </button>
          </div> */}
        </div>
        {/* <!-- Single Message Component (Mark) --> */}
        <div className="flex gap-4 group">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-10 flex-shrink-0 shadow-sm"
            data-alt="Mark Wilson Avatar"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAwMxCrMV5HlDzvJtdK54QZhGnsu-X0fzdTyvSiDmORfMTCqXsq2K05A_MABOgcj9DWE98s-ZRbs4Gb1AijIhtiEoW-zz9veUOTGK9pYpbppewT7H-5anq1eFHB6KqF9D0ZuzM7scpHA4JRNmGqYqYhlfe3KSw9faoQ8pm1QQom3MqdyB8f0Sd_ZEuifrbaYxkkvl4ThQQd5ptPHid6fOOyeqdr3HSGQh9u888bhA4M-pHWY0VIuUMQwjrF4jCrTsSjE-TBYDXUCCmB)",
            }}
          ></div>
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="flex items-baseline gap-2">
              <p className="text-sm font-bold text-[#121717] dark:text-white">
                Mark Wilson
              </p>
              <p className="text-[11px] text-[#678383] font-medium">10:42 AM</p>
            </div>
            <div className="text-[15px] leading-relaxed text-[#121717] dark:text-gray-300">
              Looks sharp, Sarah. I like the simplified navigation on mobile.
              The CTA stands out much better than the previous version. <br />
              <br />
              Let's make sure the background patterns don't interfere with the
              text legibility on smaller screens.
            </div>
            <div className="flex gap-2 mt-1">
              <div className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-[#dde4e4] dark:border-gray-700 flex items-center gap-1.5 cursor-pointer hover:bg-primary2/5 hover:border-primary2/30 transition-colors">
                <span className="text-xs">🔥</span>
                <span className="text-[10px] font-bold text-primary2">2</span>
              </div>
              <div className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-[#dde4e4] dark:border-gray-700 flex items-center gap-1.5 cursor-pointer hover:bg-primary2/5 hover:border-primary2/30 transition-colors">
                <span className="text-xs">🙌</span>
                <span className="text-[10px] font-bold text-primary2">1</span>
              </div>
            </div>
          </div>
        </div>
        {messages &&
          projectFiles &&
          Object.entries(unifiedFeed).map(([date, items]: any) => (
            <div key={date}>
              <div className="relative flex items-center py-4">
                <div className="grow border-t border-[#dde4e4] dark:border-gray-800"></div>
                <span className="shrink mx-4 text-[10px] font-bold uppercase tracking-widest text-[#678383]">
                  {date}
                </span>
                <div className="grow border-t border-[#dde4e4] dark:border-gray-800"></div>
              </div>
              {items?.map((msg: any) => (
                <div key={msg.id}>
                  <ChatMessage
                    name={
                      msg?.feedType == "TEXT"
                        ? msg?.sender?.name
                        : msg?.uploader?.name
                    }
                    content={msg.content}
                    time={formatTime(msg.createdAt)}
                    id={msg?.feedType == "TEXT" ? msg.senderId : msg.uploaderId}
                    feedType={msg.feedType}
                    url={msg.url}
                    onDelete={() => deleteFileMutation.mutate(msg.id)}
                  />
                  <div ref={messagesRef}></div>
                </div>
              ))}
            </div>
          ))}

        {/* <!-- System Notification --> */}
        {/* <div className="flex items-center gap-3 px-4 py-2 bg-background-light dark:bg-gray-800/50 rounded-lg max-w-fit mx-auto border border-[#dde4e4] dark:border-gray-700">
          <span className="material-symbols-outlined text-primary2 text-sm">
            person_add
          </span>
          <p className="text-[11px] font-bold text-[#678383]">
            James Doe joined the channel via invitation from Sarah Chen.
          </p>
        </div> */}
        {/* <!-- Another Message --> */}
        {/* <div className="flex gap-4 group">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-10 flex-shrink-0 shadow-sm"
            data-alt="James Doe Avatar"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBpYh56FJXhJyt_9LgbDqrRWCRyaRorxDWbHceFme7sz2yR9XE8h5FccIN3OSPG8s-uBPxCQAKEfpBkK_Kt2XkwwVuMU3Fx7AGea2nVKmUENx5k0STfdmUwQL5fY1V3KksL0MBwUloovQn2rZ7K7QdMoRNk3PSGpSLkKq8qG_foeA0TKldngPQGqD3ihEQqfD1Yn2BAGetLZGOk1k9htw39TtkQobcxEmQpfdY9ra_uUTINuWyEPL7Gn-FI3v9CrNDIhvedVUuJ5GQK)",
            }}
          ></div>
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="flex items-baseline gap-2">
              <p className="text-sm font-bold text-[#121717] dark:text-white">
                James Doe
              </p>
              <p className="text-[11px] text-[#678383] font-medium">11:05 AM</p>
            </div>
            <div className="text-[15px] leading-relaxed text-[#121717] dark:text-gray-300">
              Thanks for the add! Catching up on the threads now. Sarah, the
              wireframes look great.
            </div>
          </div>
        </div> */}
        {/* daisyui */}
        {/* <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-10 flex-shrink-0 shadow-sm">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header text-sm font-bold text-[#121717] dark:text-white">
            Anakin
            <time className="text-[11px] text-[#678383] font-medium">
              12:46
            </time>
          </div>
          <div className=" text-[15px] leading-relaxed text-[#121717] dark:text-gray-300">
            I hate you!
          </div>
        </div> */}
      </div>
      {/* <!-- Message Input Bar (Fixed Bottom) --> */}
      <div className="px-6 pb-6 pt-2 bg-white dark:bg-background-dark border-t border-transparent">
        <div className="relative bg-white dark:bg-gray-800 border border-[#dde4e4] dark:border-gray-700 rounded-xl shadow-lg focus-within:border-primary2/50 focus-within:ring-4 focus-within:ring-primary2/5 transition-all">
          <div className="flex flex-col p-2">
            <textarea
              className="w-full border-none focus:ring-0 bg-transparent text-[15px] outline-none resize-none min-h-[44px] max-h-40 placeholder:text-gray-400 font-medium"
              placeholder="Type a message..."
              {...register("content", { required: true })}
            ></textarea>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-1">
                {/* <button className="p-1.5 text-gray-500 hover:text-primary2 hover:bg-[#f1f4f4] dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    format_bold
                  </span>
                </button>
                <button className="p-1.5 text-gray-500 hover:text-primary2 hover:bg-[#f1f4f4] dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    format_italic
                  </span>
                </button>
                <button className="p-1.5 text-gray-500 hover:text-primary2 hover:bg-[#f1f4f4] dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    link
                  </span>
                </button> */}
                <div className="w-px h-6 bg-[#dde4e4] dark:bg-gray-700 mx-1"></div>
                <button
                  onClick={handlePaperclipClick}
                  className="p-1.5 text-gray-500 hover:text-primary2 hover:bg-[#f1f4f4] dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">
                    <Paperclip />
                  </span>
                </button>
                <input
                  type="file"
                  className="hidden"
                  onChange={onFileSelect}
                  ref={fileInputRef}
                />
                {/* <button className="p-1.5 text-gray-500 hover:text-primary2 hover:bg-[#f1f4f4] dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    mood
                  </span>
                </button> */}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSubmit(onSend)}
                  className="flex items-center gap-2 bg-primary2 hover:bg-[#155351] text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-all"
                >
                  <span>Send</span>
                  <span className="material-symbols-outlined text-sm">
                    <SendHorizontal />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
