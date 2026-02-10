import Image from "next/image";
import { useAuthStore } from "@/store/useAuthStore";
import { Paperclip, Trash2 } from "lucide-react";

const ChatMessage = ({
  name,
  time,
  content,
  id,
  feedType,
  url,
  onDelete,
}: {
  id: string;
  name: string;
  time: string;
  content: string;
  feedType: string;
  url: string;
  onDelete: () => void;
}) => {
  const userId = useAuthStore((state) => state.user.id);

  return (
    <>
      <div className={`chat ${userId === id ? "chat-end" : "chat-start"} my-4`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          <p className="text-sm font-bold text-[#121717] dark:text-white">
            {name}
          </p>
          <time className="text-[11px] text-[#678383] font-medium">{time}</time>
        </div>
        {feedType === "TEXT" ? (
          <div className="chat-bubble text-[15px] leading-relaxed text-[#121717] dark:text-gray-300">
            {content}
          </div>
        ) : (
          <div className="mt-2">
            {userId === id && (
              <button
                onClick={onDelete}
                className="hover:opacity-100 text-red-500 transition-opacity opacity-0"
              >
                <Trash2 size={14} />
              </button>
            )}
            {url.match(/\.(jpeg|jpg|gif|png)$/i) ? (
              <Image
                src={url}
                alt={name || "image"}
                width={500}
                height={500}
                className="rounded-xl border border-[#dde4e4] dark:border-gray-800 max-w-[440px] cursor-pointer hover:shadow-md transition-all"
                onClick={() => window.open(url, "_blank")}
              />
            ) : (
              <a
                href={url}
                target="_blank"
                className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit"
              >
                <Paperclip size={16} className="text-primary2" />
                <span className="text-sm font-medium underline">{name}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ChatMessage;
