"use client";

import { ShoppingCart } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatters";
import Link from "next/link";
import { BsCart } from "react-icons/bs";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <>
      <Link href={"/cart"} className="text-white flex hover:text-third">
        <BsCart size={30} />
        <p className="mt-4">{cart?.size}</p>
      </Link>
    </>
  );
}
