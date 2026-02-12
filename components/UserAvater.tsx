import { useUser } from "@/hooks/useUser";

interface Props {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function UserAvatar({ size = "md", className = "" }: Props) {
  const { user } = useUser();
  const name = user.name;
  const firstLetter = name?.charAt(0).toUpperCase();

  // 2. Define sizes
  const sizeClasses = {
    sm: "size-8 text-xs",
    md: "size-10 text-sm",
    lg: "size-12 text-base",
    xl: "w-[250px] h-[200px] text-[150px]",
  };

  // 3. Optional: Generate a consistent background color based on the name
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-600",
    "bg-purple-500",
    "bg-pink-500",
    "bg-teal-500",
  ];
  // Simple "hash" to pick the same color for the same name every time
  const colorIndex = name ? name.length % colors.length : 0;
  const bgColor = colors[colorIndex];

  return (
    <div
      className={`flex items-center justify-center rounded-xl font-bold text-white shadow-sm shrink-0 
      ${sizeClasses[size]} ${bgColor} ${className}`}
    >
      {firstLetter}
    </div>
  );
}
