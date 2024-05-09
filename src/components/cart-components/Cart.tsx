import { getCart } from "@/lib/cart";
import ShoppingCartButton from "./ShoppingCartButton";

export default async function CartBtn() {
  const cart = await getCart();
  return (
    <>
      <ShoppingCartButton cart={cart} />
    </>
  );
}
