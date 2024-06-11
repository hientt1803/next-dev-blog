import { fetcher } from "@/lib/utils";
import useSWR from "swr";

export function useTags() {
  const { data, error, isLoading } = useSWR(
    `${process.env.API_URL}/api/tags`,
    fetcher
  );

  console.log(data);
  

  return { data, error, isLoading };
}
