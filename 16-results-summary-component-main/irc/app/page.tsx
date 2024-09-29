"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ResultSummary from "./features/ResultSummary";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <main className={hankenGrotesk.className}>
      <QueryClientProvider client={queryClient}>
        <div className="flex justify-center items-center sm:h-screen">
          <ResultSummary />
        </div>
      </QueryClientProvider>
    </main>
  );
}
