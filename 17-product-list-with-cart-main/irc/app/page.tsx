"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import OrderConfirmed from "../features/OrderConfirmed";
import ProductList from "../features/ProductList";
import YourCart from "../features/YourCart";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex bg-white font-red-hat-display text-black min-h-screen p-12 justify-center items-center w-screen">
        <main className="grid sm:grid-cols-[auto,1fr] justify-center">
          <ProductList />
          <YourCart />
          {/* <OrderConfirmed /> */}
        </main>
      </div>
    </QueryClientProvider>
  );
}
