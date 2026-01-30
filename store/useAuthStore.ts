import { create } from "zustand";

interface AuthState {
  user: any | null;
  setUser: (user: any) => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logOut: () => set({ user: null }),
}));
