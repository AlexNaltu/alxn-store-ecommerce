import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/trpc";

// create a trpc client with the router we defined in src/trpc/index.ts
export const trpc = createTRPCReact<AppRouter>({});
