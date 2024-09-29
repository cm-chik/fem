"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ResultSummary from "./features/ResultSummary";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex justify-center items-center h-screen">
        <ResultSummary />
      </div>
    </QueryClientProvider>
  );
}
