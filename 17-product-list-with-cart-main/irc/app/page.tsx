"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ProductList from "../features/Product";
import YourCart from "../features/Cart";
import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/cartContext";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <CartProvider>
          <div className="p-12 flex bg-orange-50 font-red-hat-display text-black min-h-screen justify-center items-center w-[100vw]">
            <main className="grid md:grid-cols-[3fr,2fr] md:min-w-[80vw] py-4 px-4 gap-4">
              <ProductList />
              <YourCart />
              {/* <OrderConfirmed /> */}
            </main>
          </div>
        </CartProvider>
      </ProductProvider>
    </QueryClientProvider>
  );
}
