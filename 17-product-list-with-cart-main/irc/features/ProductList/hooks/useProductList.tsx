import { useQuery } from "@tanstack/react-query";

export default function useProductList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/data.json").then((res) => res.json()),
  });
  return { data, isLoading, isError };
}
