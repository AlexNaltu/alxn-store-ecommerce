import { getCart } from "@/lib/cart";
import ShoppingCartButton from "../cart-components/ShoppingCartButton";
import NavItems from "./NavItems";
import { NavLogIn } from "./NavLogIn";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper";

const Navbar = async () => {
  const cart = await getCart();
  return (
    <>
      <Wrapper>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={"/ALXNSTORE.svg"}
              alt={"Logo"}
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex items-center">
            <NavItems />
            <ShoppingCartButton cart={cart} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Navbar;
