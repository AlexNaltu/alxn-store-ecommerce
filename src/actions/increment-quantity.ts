"use server";

import db from "@/db/db";
import { getCart, createCart } from "@/lib/cart";
import { revalidatePath } from "next/cache";

// This function increments the quantity of a product in the cart
export async function incrementProductQuantity(productId: string) {
  // get the cart from the database
  const cart = (await getCart()) ?? (await createCart());

  // find the item in the cart with the given productId
  const articleInCart = cart.items.find((item) => item.productId === productId);

  // if the item is in the cart, increment the quantity
  if (articleInCart) {
    await db.cartItem.update({
      where: { id: articleInCart.id },
      data: { quantity: { increment: 1 } },
    });
    // if the item is not in the cart, create a new cart item
  } else {
    await db.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: 1,
      },
    });
  }

  revalidatePath("/cart");
}
