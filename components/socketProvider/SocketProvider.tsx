"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import socket, { connectSocket } from "@/lib/socket";
import { useAuthStore } from "@/store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const SocketContext = createContext(socket);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (user) {
      // 1. Connect when user is logged in
      connectSocket();

      socket.on("connect", () => {
        console.log("✅ Real-time connection established");
      });
      socket.on("disconnect", () => {
        console.log("❌ connection disconnected");
      });

      // 2. Global Listener: Project Invites
      socket.on("invited_to_project", (data) => {
        toast.info("🎉 You've been invited to a new project!");
        // Refresh sidebar project list
        queryClient.invalidateQueries({ queryKey: ["projects"] });
      });

      // Cleanup on logout or unmount
      return () => {
        socket.off("invited_to_project");
        socket.disconnect();
      };
    }
  }, [user, queryClient]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

// Custom hook to use the socket easily in any component
export const useSocket = () => useContext(SocketContext);
