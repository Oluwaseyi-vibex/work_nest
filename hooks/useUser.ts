import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/services/auth.service";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";

export function useUser() {
  const setUser = useAuthStore((state) => state.setUser);

  const query = useQuery({
    queryKey: ["user-me"],
    queryFn: getMe,
    retry: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (query.data) {
      setUser(query.data.data);
    }
  }, [query.data, setUser]);

  return {
    user: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
