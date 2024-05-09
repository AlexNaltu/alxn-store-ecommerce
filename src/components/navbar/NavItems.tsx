"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { SearchCheckIcon } from "lucide-react";

import Wrapper from "../Wrapper";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
import Link from "next/link";

export default function NavItems() {
  return (
    <nav>
      <Wrapper className="flex items-center justify-between">
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
          <Link href={"/howtobuy"}>
            <Button className="bg-white rounded-full hover:bg-third hover:text-white transition-all ease-linear duration-200 px-2">
              How to buy
            </Button>
          </Link>
        </div>
      </Wrapper>
    </nav>
  );
}
