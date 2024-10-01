"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import OrderConfirmed from "../features/OrderConfirmed";
import ProductList from "../features/ProductList";
import YourCart from "../features/YourCart";
import { ProductProvider } from "@/context/ProductContext";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <div className="p-4 flex bg-orange-50 font-red-hat-display text-black min-h-screen justify-center items-center w-[100vw]">
          <main className="grid md:grid-cols-[3fr,1fr] md:min-w-[80vw] py-4 px-4 gap-4">
            <ProductList />
            <YourCart />
            {/* <OrderConfirmed /> */}
          </main>
        </div>
      </ProductProvider>
    </QueryClientProvider>
  );
}
