"use client";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchCheckIcon } from "lucide-react";
import { MdOutlinePerson } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Wrapper from "./Wrapper";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SignIn, SignInButton, SignedIn, useAuth } from "@clerk/nextjs";
import dynamic from "next/dynamic";

const UserButton = dynamic(
  () => import("@clerk/clerk-react").then((mod) => mod.UserButton),
  {
    ssr: false,
  }
);

const Navbar = () => {
  const pathname = usePathname();

  if (pathname === "/sign-in" || pathname === "/sign-up") return null;

  return (
    <>
      <NavLogIn />
      <nav className="bg-fourth custom-shadow">
        <Wrapper className="flex items-center justify-between">
          <Image src="/ALXNSTORE.svg" alt="logo" width={128} height={77} />
          <div className="flex items-center gap-2 md:gap-10">
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger className="hidden sm:inline-block bg-white py-2 px-2 sm:px-3 rounded-tl-lg text-hover">
                  Categories
                </DropdownMenuTrigger>
                <DropdownMenuGroup>
                  <DropdownMenuContent className="rounded-none"></DropdownMenuContent>
                </DropdownMenuGroup>
              </DropdownMenu>
              <div className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search for products"
                  className="hidden sm:inline-block rounded-none border-none focus-within:border-0 focus:border-0 outline-none"
                />
                <Button
                  type="submit"
                  className="bg-white rounded-l-none rounded-r-full hover:bg-white text-hover"
                >
                  <SearchCheckIcon />
                </Button>
              </div>
            </div>
            <Button className="bg-white rounded-full hover:bg-third hover:text-white transition-all ease-linear duration-200 px-2">
              How to buy
            </Button>
          </div>
        </Wrapper>
      </nav>
    </>
  );
};

export default Navbar;

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
