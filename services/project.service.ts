import axiosInstance from "@/lib/axiosInstance";

export const fetchMyProjects = async () => {
  const response = await axiosInstance.get("/project");
  return response.data;
};

export const fetchProjectMembers = async (id: string) => {
  const response = await axiosInstance.get(`/project/${id}/members`);
  return response.data;
};

interface ProjectMemberPayload {
  projectId: string;
  userEmail: string;
}
export const addProjectMembers = async (payload: ProjectMemberPayload) => {
  const response = await axiosInstance.post(`/project/add-member`, payload);
  return response.data;
};

export const removeProjectMembers = async (payload: ProjectMemberPayload) => {
  const response = await axiosInstance.post(`/project/remove-member`, payload);
  return response.data;
};
