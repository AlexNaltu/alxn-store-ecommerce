import db from "@/db/db";
import { currentUser } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { getUserEmail } from "@/lib/utils";

// create a router
export const appRouter = router({
  // define a procedure named `testroute`
  testroute: publicProcedure.query(() => "Say this is a test route"),

  // define a procedure named `authCallback` that requires authentication
  authCallback: publicProcedure.query(async () => {
    // get the current user
    const user = await currentUser();

    // get the user's email
    const email = getUserEmail(user);

    // if the user is not logged in, throw an error
    if (!user?.id) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    // check if the user exists in the database
    const dbUser = await db.user.findFirst({
      where: {
        email: email,
      },
    });

    // if the user does not exist in the database, create a new user
    if (!dbUser) {
      await db.user.create({
        data: {
          id: user.id,
          email: email,
          username: user.username || null,
          image: user.imageUrl,
          fullName: `${user.firstName} ${user.lastName}`,
        },
      });
    }
    // return a success message
    return { success: true };
  }),

  // define a procedure named `getUser` that requires authentication
  getUser: privateProcedure.query(async ({ ctx }) => {
    // get the user id from the context
    const { userId } = ctx;
    const profiles = await db.user.findMany({
      where: { id: userId },
      select: {
        id: true,
        fullName: true,
      },
    });

    return profiles;
  }),

  // define a procedure named `getTotalUsers` that does not require authentication
  countUser: publicProcedure.query(async () => {
    // get the total number of users in the database
    const totalUsers = await db.user.count();
    return totalUsers;
  }),
});

export type AppRouter = typeof appRouter;
