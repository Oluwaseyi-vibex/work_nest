export const formatDate = (dateString: string | Date) => {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatTime = (dateString: string | Date) => {
  if (!dateString) return "";

  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const getMessageDateLabel = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();

  // Reset times to compare only dates
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const checkDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  if (checkDate.getTime() === today.getTime()) return "Today";
  if (checkDate.getTime() === yesterday.getTime()) return "Yesterday";

  // Otherwise return "October 24"
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: now.getFullYear() !== date.getFullYear() ? "numeric" : undefined,
  });
};

// Function to group messages
export const groupMessagesByDate = (messages: any[]) => {
  if (!messages) return {};

  return messages.reduce((groups: any, message) => {
    const dateLabel = getMessageDateLabel(message.createdAt);
    if (!groups[dateLabel]) groups[dateLabel] = [];
    groups[dateLabel].push(message);
    return groups;
  }, {});
};
