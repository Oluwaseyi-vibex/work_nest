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

    socket.on("new_file", (newMessage) => {
      queryClient.setQueryData(["chat-history", projectId], (oldData: any) => {
        // 1. Handle empty cache
        if (!oldData) return { success: true, data: [newMessage] };

        // 2. Prevent Duplicate Messages
        // Sometimes Sockets and HTTP overlap; this check prevents the message appearing twice
        const exists = oldData.data?.some((m: any) => m.id === newMessage.id);
        if (exists) return oldData;

        // 3. Append and return
        return {
          ...oldData,
          data: [...(oldData.data || []), newMessage],
        };
      });
    });

    socket.on("file_deleted", (newMessage) => {
      queryClient.setQueryData(["chat-history", projectId], (oldData: any) => {
        // 1. Handle empty cache
        if (!oldData) return { success: true, data: [newMessage] };

        // 2. Prevent Duplicate Messages
        // Sometimes Sockets and HTTP overlap; this check prevents the message appearing twice
        const exists = oldData.data?.some((m: any) => m.id === newMessage.id);
        if (exists) return oldData;

        // 3. Append and return
        return {
          ...oldData,
          data: [...(oldData.data || []), newMessage],
        };
      });
    });

    return () => {
      socket.off("new_message");
      socket.off("new_file");
      socket.off("file_deleted");
    };
  }, [projectId, queryClient]);
}
