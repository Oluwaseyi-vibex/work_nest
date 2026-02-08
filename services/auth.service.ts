import axiosInstance from "@/lib/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

// REGISTER
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (payload: RegisterPayload) => {
  const { data } = await axiosInstance.post("/auth/register", payload);
  return data;
};

// LOGIN
export interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (payload: LoginPayload) => {
  const response = await axiosInstance.post("/auth/login", payload);
  return response.data;
};

export const getMe = async () => {
  const response = await axiosInstance.get("/user/me");
  return response.data;
};
