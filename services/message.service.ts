import axiosInstance from "@/lib/axiosInstance";

export const fetchChatHistory = async (projectId: string) => {
  const response = await axiosInstance.get(`/message/${projectId}`);
  return response.data;
};

interface sendMessagePayload {
  projectId: string;
  content: string;
}
export const sendMessage = async (payload: sendMessagePayload) => {
  const response = await axiosInstance.post("/message", payload);
  return response.data;
};
