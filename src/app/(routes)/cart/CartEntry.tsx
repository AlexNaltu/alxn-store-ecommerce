"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { CartItemWithProduct } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
}

export default function CartEntry({
  cartItem: { product, quantity },
}: CartEntryProps) {
  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return (
    <>
      <div>
        <div>
          <Image src={product.image_url} alt={"/"} width={100} height={100} />
          <div>
            <p>{product.title}</p>
            <p>Price: {formatCurrency(product.priceInCents)}</p>

            <div>{formatCurrency(product.priceInCents * quantity)}</div>
          </div>
        </div>
      </div>
    </>
  );
}
