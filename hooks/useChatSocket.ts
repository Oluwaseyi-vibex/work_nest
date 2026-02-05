import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import socket from "@/lib/socket";

export function useChatSocket(projectId: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!projectId) return;

    // Listen for new messages
    // src/hooks/useChatSocket.ts

    socket.on("new_message", (newMessage) => {
      queryClient.setQueryData(["chat-history", projectId], (oldData: any) => {
        // 1. If no cache exists yet, create the structure
        if (!oldData) {
          return {
            success: true,
            data: [newMessage],
          };
        }

        // 2. If cache exists, append newMessage to the internal 'data' array
        return {
          ...oldData,
          data: [...(oldData.data || []), newMessage],
        };
      });
    });

    return () => {
      socket.off("new_message");
    };
  }, [projectId, queryClient]);
}
