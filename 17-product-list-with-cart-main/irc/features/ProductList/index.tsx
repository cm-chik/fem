"use client";

import useProductContext from "./context/ProductContext";
import ProductCard from "./components/ProductCard";
import { Product } from "../../interfaces/index";
import { useState, useEffect } from "react";
//import { default as data } from "@/public/data.json";

export default function ProductList() {
  const { data, isLoading, error } = useProductContext();
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    setProducts(data);
  }, [data]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error </div>;
  else if (products)
    return (
      <div className="px-4">
        <div className="font-bold text-xl py-4">Desserts</div>
        <div className="grid md:grid-cols-3 gap-4">
          {products.map((item: Product, index: number) => {
            return <ProductCard key={index} product={item} />;
          })}
        </div>
      </div>
    );
}
