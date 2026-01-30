"use client";
import { loginUser } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/store/useAuthStore";
import { LoginFormInput } from "@/types";

export default function SignInPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInput>();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data.user));
      queryClient.setQueryData(["me"], data.user);
      console.log("logindata: ", data);
      toast.success("Login successfull");
      router.push("/dashboard");
    },

    onError: (error) => {
      const err = error as AxiosError<any>;
      console.error(err.response?.data?.message);
    },
  });

  const handleSubmitHandler = async (data: LoginFormInput) => {
    setLoading(true);
    try {
      const res = await loginUser(data);
      setUser(res.data);
      router.push("/dashboard");
    } catch (error) {
      console.log(error || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-[#181b20] font-sans min-h-screen flex flex-col">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          {/* Minimalist Branding Header */}
          <div className="px-4 md:px-40 flex justify-center py-8">
            <div className="flex items-center gap-3 text-[#1d6d6b]">
              <div className="w-8 h-8">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-[#121717] dark:text-white text-xl font-extrabold leading-tight tracking-[-0.015em]">
                WorkNest
              </h2>
            </div>
          </div>

          {/* Auth Content Container */}
          <main className="flex flex-1 items-center justify-center px-4 pb-20">
            <div className="flex flex-col w-full max-w-[480px] bg-white dark:bg-[#1f2329] p-8 md:p-12 rounded-xl shadow-lg">
              {/* Headline Section */}
              <div className="mb-8">
                <h1 className="text-[#121717] dark:text-white tracking-tight text-3xl font-bold leading-tight text-center pb-2">
                  Welcome Back
                </h1>
                <p className="text-[#678383] dark:text-gray-400 text-base font-normal leading-normal text-center">
                  Enter your details to access your workspace.
                </p>
              </div>

              {/* Social Auth */}
              <div className="flex flex-col gap-3 mb-8">
                <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg h-14 px-4 bg-white dark:bg-transparent border border-[#dde4e4] dark:border-gray-700 text-[#121717] dark:text-white text-base font-semibold leading-normal transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center mb-8">
                <div className="flex-grow border-t border-[#dde4e4] dark:border-gray-700"></div>
                <span className="flex-shrink mx-4 text-[#678383] text-sm uppercase tracking-widest font-medium">
                  or
                </span>
                <div className="flex-grow border-t border-[#dde4e4] dark:border-gray-700"></div>
              </div>

              {/* Login Form */}
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="flex flex-col w-full">
                    <p className="text-[#121717] dark:text-white text-sm font-bold leading-normal pb-2">
                      Email Address
                    </p>
                    <input
                      autoComplete="email"
                      className="flex w-full rounded-lg text-[#121717] dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#1d6d6b]/20 border border-[#dde4e4] dark:border-gray-700 bg-white dark:bg-[#2a2f36] focus:border-[#1d6d6b] h-14 placeholder:text-[#678383] p-[15px] text-base font-normal leading-normal"
                      placeholder="name@company.com"
                      type="email"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">
                        {errors.email.message as string}
                      </p>
                    )}
                  </label>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="flex flex-col w-full">
                    <div className="flex justify-between items-center pb-2">
                      <p className="text-[#121717] dark:text-white text-sm font-bold leading-normal">
                        Password
                      </p>
                      <a
                        className="text-[#1d6d6b] text-sm font-bold hover:underline"
                        href="#"
                      >
                        Forgot?
                      </a>
                    </div>
                    <div className="flex w-full items-stretch rounded-lg">
                      <input
                        autoComplete="current-password"
                        className="flex w-full min-w-0 flex-1 rounded-lg text-[#121717] dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#1d6d6b]/20 border border-[#dde4e4] dark:border-gray-700 bg-white dark:bg-[#2a2f36] focus:border-[#1d6d6b] h-14 placeholder:text-[#678383] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                        placeholder="••••••••"
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      {errors.password && (
                        <p className="text-xs text-red-500">
                          {errors.password.message as string}
                        </p>
                      )}
                      <div
                        className="text-[#678383] flex border border-[#dde4e4] dark:border-gray-700 bg-white dark:bg-[#2a2f36] items-center justify-center pr-3.75 rounded-r-lg border-l-0 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {showPassword ? (
                            <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                          ) : (
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                          )}
                        </svg>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Primary CTA */}
                <button
                  type="submit"
                  className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg h-14 px-4 bg-[#1d6d6b] text-white text-base font-bold leading-normal tracking-[0.015em] hover:brightness-110 active:scale-[0.98] transition-all"
                  onClick={handleSubmit(handleSubmitHandler)}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-dots loading-xl"></span>
                  ) : (
                    <span className="truncate">Sign In</span>
                  )}
                </button>
              </form>

              {/* Footer Link */}
              <div className="mt-8 text-center">
                <p className="text-[#678383] dark:text-gray-400 text-sm">
                  Don't have an account?
                  <a
                    className="text-[#1d6d6b] font-bold hover:underline ml-1"
                    href="#"
                  >
                    Create an account
                  </a>
                </p>
              </div>
            </div>
          </main>

          {/* Decorative Elements */}
          <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1d6d6b]/10 via-[#1d6d6b] to-[#1d6d6b]/10 opacity-20"></div>
        </div>
      </div>
    </div>
  );
}
