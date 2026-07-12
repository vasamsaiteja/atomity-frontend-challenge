import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/api";

export function useProviders() {
  return useQuery({
    queryKey: ["providers"],
    queryFn: fetchUsers,
  });
}
