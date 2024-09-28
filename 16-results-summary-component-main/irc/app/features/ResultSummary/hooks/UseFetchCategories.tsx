import { useQuery } from "@tanstack/react-query";

function useFetchCategories() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:3000/api/").then((res) => res.json()),
  });
  return { data, isLoading, error };
}

export default useFetchCategories;
