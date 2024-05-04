import { currentUser } from "@clerk/nextjs/server";
import { TRPCError, initTRPC } from "@trpc/server";

// create a new instance of TRPC
const t = initTRPC.create();
// export the middleware
const middleware = t.middleware;

// create a middleware that checks if the user is authenticated
const isAuth = middleware(async (opts) => {
  // get the current user
  const user = await currentUser();
  // if the user is not logged in, throw an error
  if (!user || !user.id) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  // pass the user to the next middleware
  return opts.next({
    ctx: {
      userId: user.id,
      user,
    },
  });
});

// export the router, publicProcedure, and privateProcedure
export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
