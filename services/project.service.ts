import axiosInstance from "@/lib/axiosInstance";

export const fetchMyProjects = async () => {
  const response = await axiosInstance.get("/project");
  return response.data;
};
