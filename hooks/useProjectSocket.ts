import socket, { connectSocket } from "@/lib/socket";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function useProjectSocket(projectId: string) {
  const queryClient = useQueryClient();

  const invalidateQuery = () => {
    queryClient.invalidateQueries({ queryKey: ["project-todos", projectId] });
  };

  useEffect(() => {
    if (!projectId) return;
    connectSocket();

    socket.on("connect", () => {
      console.log("🚀 Connected to WorkNest Socket");
      // 2. ONLY emit after connection is successful
      socket.emit("join_project", projectId);
    });

    socket.on("task_created", invalidateQuery);
    socket.on("task_updated", invalidateQuery);
    socket.on("task_deleted", invalidateQuery);

    return () => {
      socket.off("connect");
      socket.off("task_created");
      socket.off("task_updated");
      socket.off("task_deleted");
      socket.disconnect();
    };
  }, [projectId, queryClient]);
}
