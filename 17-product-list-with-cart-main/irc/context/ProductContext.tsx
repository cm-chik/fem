import type { Product } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

const ProductContext = createContext<{
  data: Product[];
  isLoading: boolean;
  error: Error | null;
}>({
  data: [],
  isLoading: false,
  error: null,
});

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/data.json").then((res) => res.json()),
  });

  return (
    <ProductContext.Provider
      value={{
        data,
        isLoading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("UseProductContext must be used with ProductProvider");
  }
  return context;
};
