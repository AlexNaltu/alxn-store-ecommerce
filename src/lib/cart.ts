import db from "@/db/db";
import { Prisma } from "@prisma/client";
import { cookies } from "next/dist/client/components/headers";

//a type that represents a cart item with the product included
export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

// a type that represents a cart item with the product included
export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

//a type that represents a shopping cart with the cart items included
export type ShoppingCart = CartWithProducts & {
  size: number;
  subtotal: number;
};

//getCart function that returns a ShoppingCart or null
export async function getCart(): Promise<ShoppingCart | null> {
  //get the localCartId from the cookies
  const localCartId = cookies().get("localCartId")?.value;
  //get the cart from the database
  const cart = localCartId
    ? //if the localCartId exists, get the cart with the items and products included
      await db.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { product: true } } },
      })
    : null;

  //if the cart does not exist, return null
  if (!cart) {
    return null;
  }

  //return the cart with the size and subtotal calculated
  return {
    ...cart,
    //calculate the size of the cart by summing the quantities of all items
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
    //calculate the subtotal of the cart by summing the product price times the quantity of each item
    subtotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.priceInCents,
      0
    ),
  };
}

//createCart function that creates a new cart and returns a ShoppingCart
export async function createCart(): Promise<ShoppingCart> {
  //create a new cart in the database
  const newCart = await db.cart.create({
    data: {},
  });

  //set the localCartId cookie to the id of the new cart
  cookies().set("localCartId", newCart.id);

  //return the new cart with size and subtotal set to 0
  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  };
}
