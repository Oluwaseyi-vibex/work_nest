import { create } from "zustand";
import { devtools } from "zustand/middleware";
import Cookies from "js-cookie";

interface AuthState {
  user: any | null;
  setUser: (user: any) => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logOut: () => {
      localStorage.removeItem("accessToken");
      Cookies.remove("accessToken", { path: "/" });
      set({ user: null });
      window.location.href = "/login";
    },
  })),
);
