import axiosInstance from "@/lib/axiosInstance";

export const fetchMyProjectsTask = async (id: string) => {
  const response = await axiosInstance.get(`/tasks/${id}`);
  return response.data;
};

interface createTaskPayload {
  title: string;
  description: string;
  projectId: string;
}
export const createTask = async (payload: createTaskPayload) => {
  const response = await axiosInstance.post("/tasks", payload);
  return response.data;
};
