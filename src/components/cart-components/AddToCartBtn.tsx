"use client";

import { useState, useTransition } from "react";
import { Button } from "../ui/button";

interface AddToCartBtnProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

export default function AddToCartBtn({
  productId,
  incrementProductQuantity,
}: AddToCartBtnProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
        className="bg-black"
      >
        Add to Cart
      </Button>
      {isPending && <p>Adding to cart...</p>}
      {!isPending && success && <span>Added to Cart.</span>}
    </>
  );
}
