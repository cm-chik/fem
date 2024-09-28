"use client";

import Categor from "./components/categor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Categor />
      </div>
    </QueryClientProvider>
  );
}
