import { io } from "socket.io-client";
import { env } from "./env";

const socket = io(env.NEXT_PUBLIC_SOCKET_URL, {
  autoConnect: false,
  // Using 'query' because your backend expects it in the URL string
  query: {},
});

// We'll update the query parameters right before connecting
export const connectSocket = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  if (token) {
    socket.io.opts.query = { token }; // Dynamically inject the token
  }

  socket.connect();
};

export default socket;
