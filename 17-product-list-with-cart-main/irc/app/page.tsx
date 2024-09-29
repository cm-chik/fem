"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import OrderConfirmed from "../features/OrderConfirmed";
import ProductList from "../features/ProductList";
import YourCart from "../features/YourCart";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4 flex bg-orange-50 font-red-hat-display text-black min-h-screen justify-center items-center w-[100vw]">
        <main className="grid md:grid-cols-[3fr,1fr] md:min-w-[80vw] ">
          <ProductList />
          <YourCart />
          {/* <OrderConfirmed /> */}
        </main>
      </div>
    </QueryClientProvider>
  );
}
