import { useAuthStore } from "@/store/useAuthStore";

const ChatMessage = ({
  name,
  time,
  content,
  id,
}: {
  id: string;
  name: string;
  time: string;
  content: string;
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
        <div className="chat-bubble text-[15px] leading-relaxed text-[#121717] dark:text-gray-300">
          {content}
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
