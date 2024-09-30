import { useQuery } from "@tanstack/react-query";

function useProductContext() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/data.json").then((res) => res.json()),
  });
  return { data, isLoading, error };
}

export default useProductContext;
