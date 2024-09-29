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
      <div className="font-bold text-xl">Desserts</div>
      <div className="grid sm:grid-cols-3">
        {data.map((item: Product, index: number) => {
          return <ProductCard key={index} product={item} />;
        })}
      </div>
    </div>
  );
}
