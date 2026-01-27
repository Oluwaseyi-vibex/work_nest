"use client";

import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      // redirect, show toast, etc.
      toast.success("Registration successful!");
      router.push("/login");
    },
    onError: (error) => {
      const err = error as AxiosError<any>;
      console.error("❌ Registration failed:", err.response?.data);
      toast.error("❌ Registration failed:", err.response?.data);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-[#181b20]">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-6 lg:px-10 py-4 bg-white dark:bg-[#181b20]">
        <div className="flex items-center gap-4 text-[#1d6d6b]">
          <div className="w-8 h-8">
            <svg
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
          <h2 className="text-[#121717] dark:text-white text-xl font-bold leading-tight tracking-tight">
            WorkNest
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 hidden sm:inline">
            Already have an account?
          </span>
          <Link href={"/login"}>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-[#121717] dark:text-white text-sm font-bold transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
              Log in
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#1d6d6b]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-[#1d6d6b]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-stretch gap-0 bg-white dark:bg-[#1f2329] rounded-2xl overflow-hidden shadow-2xl shadow-black/5 border border-gray-100 dark:border-gray-800">
          {/* Left Side: Visual/Context */}
          <div className="hidden lg:flex flex-1 bg-[#1d6d6b] p-12 flex-col justify-between relative overflow-hidden">
            <div className="z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6">
                Version 2.4
              </span>
              <h1 className="text-white text-4xl font-black leading-tight mb-4">
                Start managing projects like a pro.
              </h1>
              <p className="text-white/80 text-lg max-w-sm">
                Join 15,000+ freelancers and agencies who scaled their business
                with WorkNest.
              </p>
            </div>

            <div className="z-10 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                <p className="text-white text-sm italic">
                  "The workspace setup was so fast. We were collaborating on our
                  first project within 5 minutes."
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                  <img
                    alt="Headshot of a smiling professional man"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4CwhUBI9VaEzLdxEHg4HsrzKQ5F0mAlhURfvevJGk3ftadvHJr4yNXYIkYhBtXi9g8huq1FdRLlJqX6CKl7KJIbSFLnCrQg_xYodPX03cVX3O6iZyfOePIo4f-Q_HfgLa9jIBN6jggo7bBvTkXtlg_LOktsSVqswT299oCQiGVTq90uQvbiQ-9GHpp3_hBKdAI0TmgOzwnDUC51xNjsXh85bA_bF4mSjle97eYK32Y822TXPZ6Y79UfxlCte5v-_UNWYEz6CBQebJ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">Marcus Chen</p>
                  <p className="text-white/60 text-[10px] uppercase">
                    Founder, Creative Flow
                  </p>
                </div>
              </div>
            </div>

            {/* Abstract shape in background */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 border-[32px] border-white/5 rounded-full"></div>
          </div>

          {/* Right Side: Registration Form */}
          <div className="flex-1 p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-[#121717] dark:text-white mb-2">
                  Create Account
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Set up your workspace and start collaborating.
                </p>
              </div>

              <div className="space-y-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#121717] dark:text-white text-sm font-semibold">
                    Full Name
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <input
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-[#121717] dark:text-white focus:ring-2 focus:ring-[#1d6d6b]/20 focus:border-[#1d6d6b] outline-none transition-all placeholder:text-gray-400"
                      placeholder="e.g. Alex Rivera"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/*  Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#121717] dark:text-white text-sm font-semibold">
                    Email
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <input
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-[#121717] dark:text-white focus:ring-2 focus:ring-[#1d6d6b]/20 focus:border-[#1d6d6b] outline-none transition-all placeholder:text-gray-400"
                      placeholder="name@gmail.com"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Workspace Name */}
                {/* <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[#121717] dark:text-white text-sm font-semibold">
                      Workspace Name
                    </label>
                    <div className="group relative flex items-center">
                      <svg
                        className="w-4 h-4 text-gray-400 cursor-help"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                      <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-900 text-white text-[10px] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        This is the name your team will see when they join.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-stretch">
                    <div className="relative flex-1">
                      <svg
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9zm-2 2V9l8-6 8 6v12h-7v-6h-2v6H4z" />
                      </svg>
                      <input
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-l-lg text-[#121717] dark:text-white focus:ring-2 focus:ring-[#1d6d6b]/20 focus:border-[#1d6d6b] outline-none transition-all placeholder:text-gray-400"
                        placeholder="e.g. Acme Agency"
                        type="text"
                      />
                    </div>
                    <div className="flex items-center px-4 bg-gray-100 dark:bg-gray-700 border border-l-0 border-gray-200 dark:border-gray-700 rounded-r-lg text-gray-400 text-sm font-medium">
                      .io
                    </div>
                  </div>
                </div> */}

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#121717] dark:text-white text-sm font-semibold">
                    Password
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                    <input
                      className="w-full pl-11 pr-12 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-[#121717] dark:text-white focus:ring-2 focus:ring-[#1d6d6b]/20 focus:border-[#1d6d6b] outline-none transition-all placeholder:text-gray-400"
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1d6d6b] transition-colors"
                      type="button"
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
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    className="w-full bg-[#1d6d6b] hover:bg-[#1d6d6b]/90 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg shadow-[#1d6d6b]/20 flex items-center justify-center gap-2"
                    onClick={handleSubmit}
                  >
                    Create Account
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </button>
                </div>

                {/* Social Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200 dark:border-gray-700"></span>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white dark:bg-[#1f2329] text-gray-400 uppercase tracking-widest text-[10px] font-bold">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Social Button */}
                <button
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-bold text-[#121717] dark:text-white"
                  type="button"
                >
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
                  Sign up with Google
                </button>

                <p className="mt-6 text-center text-[11px] text-gray-400 leading-relaxed">
                  By clicking "Create Account", you agree to our{" "}
                  <a
                    className="text-[#1d6d6b] hover:underline underline-offset-2"
                    href="#"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-[#1d6d6b] hover:underline underline-offset-2"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-6 text-gray-400 text-xs">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            256-bit SSL Security
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z" />
            </svg>
            SOC2 Type II Compliant
          </span>
        </div>
      </main>

      <footer className="py-6 px-10 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#181b20] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © 2024 WorkNest Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            className="text-sm text-gray-500 hover:text-[#1d6d6b] transition-colors"
            href="#"
          >
            Help Center
          </a>
          <a
            className="text-sm text-gray-500 hover:text-[#1d6d6b] transition-colors"
            href="#"
          >
            Status
          </a>
          <a
            className="text-sm text-gray-500 hover:text-[#1d6d6b] transition-colors"
            href="#"
          >
            Contact Sales
          </a>
        </div>
      </footer>
    </div>
  );
}
