"use client";

import { trpc } from "@/app/_trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { type PropsWithChildren, useState } from "react";

// create a provider that wraps the trpc client and the react-query client
const TrpcProvider = ({ children }: PropsWithChildren) => {
  // get the base url
  const getBaseUrl = () => {
    if (typeof window !== "undefined") return ""; // return an empty string if the code is running on the client
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // return the Vercel URL if it is defined
    return `http://localhost:${process.env.PORT ?? 3000}`; // return the localhost URL if the Vercel URL is not defined
  };

  // create a new query client and trpc client
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    // create a new trpc client with the httpBatchLink
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    })
  );
  return (
    // wrap the children with the trpc provider and the query client provider
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default TrpcProvider;
