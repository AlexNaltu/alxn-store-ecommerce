import { getCart } from "@/lib/cart";
import React from "react";
import CartEntry from "./CartEntry";

const CartPage = async () => {
  const cart = await getCart();
  return (
    <>
      <div>
        {cart?.items.map((cartItem) => (
          <CartEntry cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
    </>
  );
};

export default CartPage;
