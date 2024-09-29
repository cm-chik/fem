"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import OrderConfirmed from "../features/OrderConfirmed";
import ProductList from "../features/ProductList";
import YourCart from "../features/YourCart";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-white font-red-hat-display text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ProductList />
          <YourCart />
          <OrderConfirmed />
        </main>
      </div>
    </QueryClientProvider>
  );
}
