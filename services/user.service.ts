import axiosInstance from "@/lib/axiosInstance";

export const getMe = async () => {
  const response = await axiosInstance.get("/user/me");
  return response.data;
};

export const updateUserName = async (name: string) => {
  const response = await axiosInstance.patch("/user/me", { name: name });
  return response.data;
};
