"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.clear();
    queryClient.clear();
    router.push("/login");
  };
  return (
    <html lang="en">
      <body>
        <main>
          {children}

          <button className="cursor-pointer" onClick={logout}>
            log out
          </button>
        </main>
      </body>
    </html>
  );
}
