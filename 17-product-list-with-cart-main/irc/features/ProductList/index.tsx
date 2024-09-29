"use client";

import useProductList from "./hooks/useProductList";
import ProductCard from "./components/ProductCard";
import { Product } from "../../interfaces/index";

//import { default as data } from "@/public/data.json";

export default function ProductList() {
  const { data, isLoading, error } = useProductList();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error </div>;
  return (
    <div>
      <p>Desserts</p>
      <div>
        {data.map((item: Product) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
}
