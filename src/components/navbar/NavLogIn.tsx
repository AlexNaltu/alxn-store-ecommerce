import { useAuth } from "@clerk/nextjs";
import { Link } from "lucide-react";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdOutlinePerson } from "react-icons/md";
import Wrapper from "../Wrapper";
import dynamic from "next/dynamic";

const UserButton = dynamic(
  () => import("@clerk/clerk-react").then((mod) => mod.UserButton),
  {
    ssr: false,
  }
);

export function NavLogIn() {
  const { isSignedIn, sessionId, userId } = useAuth();

  return (
    <Wrapper className="flex items-center gap-4 text-white justify-end my-2">
      <Link href={"/sign-up"} className="flex items-center gap-2 text-hover">
        <BsPersonFillAdd size={20} />
        <h1>Register</h1>
      </Link>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href="/sign-in" className="flex items-center gap-2 text-hover">
          <MdOutlinePerson size={20} />
          <h1>Sign In</h1>
        </Link>
      )}
    </Wrapper>
  );
}
