import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { getMe } from "@/services/auth.service";
import { useUser } from "@/hooks/useUser";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useUser();
  const logout = useAuthStore((state) => state.logOut);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      logout();
      // router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading WorkNest...
      </div>
    );

  return user ? <>{children}</> : null;
};

export default AuthGuard;
