"use client";

import AuthGuard from "@/components/auth/AuthGuard";
import { useAuthStore } from "@/store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";
import {
  Bell,
  Briefcase,
  ChevronRight,
  LogOut,
  Plus,
  Search,
  Settings,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const logout = useAuthStore((state) => state.logOut);

  // const logout = () => {
  //   localStorage.clear();
  //   queryClient.clear();
  //   router.push("/login");
  // };
  return (
    <AuthGuard>
      <section className="bg-background-light dark:bg-background-dark text-[#121717] dark:text-white font-display">
        <div className="flex min-h-screen">
          {/* <!-- Sidebar Navigation --> */}
          <aside className="w-64 border-r border-[#f1f4f4] dark:border-[#2d3238] bg-white dark:bg-background-dark flex flex-col justify-between sticky top-0 h-screen">
            <div className="flex flex-col gap-8 p-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <div className="size-8 text-primary2">
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
                      ></path>
                    </svg>
                  </div>
                  <h1 className="text-[#121717] dark:text-white text-base font-bold leading-tight">
                    WorkNest
                  </h1>
                </div>
              </div>
              <nav className="flex flex-col gap-1">
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f1f4f4] dark:bg-[#2d3238] border-r-4 border-primary2"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary2">
                    <Briefcase />
                  </span>
                  <p className="text-sm font-bold text-primary2">Projects</p>
                </a>
              </nav>
            </div>
            <div className="p-6">
              <button
                className="btn w-full flex items-center justify-center gap-2 rounded-lg h-10 bg-primary2 text-white text-sm font-bold tracking-wide"
                onClick={logout}
              >
                <span className="material-symbols-outlined text-sm">
                  <LogOut />
                </span>
                <span>Logout</span>
              </button>
            </div>
          </aside>
          {/* <!-- Main Content Area --> */}
          <main className="flex-1 flex flex-col min-w-0">
            {/* <!-- Top Navbar --> */}
            <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-background-dark border-b border-[#f1f4f4] dark:border-[#2d3238] sticky top-0 z-10">
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center gap-2 text-sm text-[#678383]">
                  <span>Projects</span>
                  <span className="material-symbols-outlined text-sm">
                    <ChevronRight />
                  </span>
                  <span className="text-[#121717] dark:text-white font-medium">
                    Directory
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#678383] text-xl">
                    <Search />
                  </span>
                  <input
                    className="pl-10 pr-4 py-2 bg-[#f1f4f4] dark:bg-[#2d3238] border-none rounded-lg text-sm w-64 focus:ring-1 focus:ring-primary2"
                    placeholder="Global search..."
                    type="text"
                  />
                </div>
                <button className="p-2 rounded-lg bg-[#f1f4f4] dark:bg-[#2d3238] text-[#121717] dark:text-white">
                  <span className="material-symbols-outlined text-xl">
                    <Bell />
                  </span>
                </button>
                <button className="p-2 rounded-lg bg-[#f1f4f4] dark:bg-[#2d3238] text-[#121717] dark:text-white">
                  <span className="material-symbols-outlined text-xl">
                    <Settings />
                  </span>
                </button>
                <div className="h-8 w-px bg-[#f1f4f4] dark:bg-[#2d3238] mx-2"></div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-center bg-cover border-2 border-primary2/20"
                    data-alt="User profile avatar portrait"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_XDl7Y0e2eUrlmaJSdccwy6r00J_IgqEtejQlJl4fCHWK81HWddEBLNmlSL0_tP8UHiERdnkch-eAVk-5hIbIm7yVOjFiQzJcHklEefdF8aUtaobTBTxVh7E8kZqZGrYROkylDrpzKemIh7F1fffJvHnePGTaHjeHDW_NwtIWUKnT2oSZOp6VBFcV5n1UqmD08oUkgo987fYgFYGF1sC7lobnaMH87MsXejmu9gI05BINeuBxBRFmC6ue2kILEkJTsj6GgysNTb0E')",
                    }}
                  ></div>
                </div>
              </div>
            </header>
            {/* <!-- Page Body --> */}
            <div className="p-8 max-w-7xl mx-auto w-full">{children}</div>
          </main>
        </div>
      </section>
    </AuthGuard>
  );
}
