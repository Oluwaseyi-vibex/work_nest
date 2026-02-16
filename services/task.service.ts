import axiosInstance from "@/lib/axiosInstance";
import { UpdateTaskStatusPayload } from "@/types";

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

export const updateTaskStatus = async (payload: UpdateTaskStatusPayload) => {
  const response = await axiosInstance.patch(`/tasks/${payload.taskId}`, {
    status: payload.status,
  });
  return response.data;
};
