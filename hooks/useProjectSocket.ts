import socket from "@/lib/socket";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function useProjectSocket(projectId: string) {
  const queryClient = useQueryClient();

  const invalidateQuery = () => {
    queryClient.invalidateQueries({ queryKey: ["project-todos", projectId] });
  };

  useEffect(() => {
    if (!projectId) return;
    // socket.on("connect", () => {
    //   console.log("✅ Socket Connected:", socket.id);
    // });

    // socket.on("disconnect", (reason) => {
    //   console.log("❌ Socket Disconnected. Reason:", reason);
    // });

    socket.emit("join_project", projectId);

    socket.on("task_created", invalidateQuery);
    socket.on("task_updated", invalidateQuery);
    socket.on("task_deleted", invalidateQuery);

    return () => {
      socket.off("connect");
      socket.off("task_created");
      socket.off("task_updated");
      socket.off("task_deleted");
    };
  }, [projectId, queryClient]);
}
