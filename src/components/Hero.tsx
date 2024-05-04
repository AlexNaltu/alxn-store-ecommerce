import React from "react";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="custom-bg">
      <Wrapper className="flex flex-col gap-4 lg:gap-5 my-8 py-14 sm:py-20 lg:py-32">
        <h1 className="text-white text-3xl min-[450px]:text-4xl sm:text-6xl">
          Are you looking for accounts? <br /> We got you!
        </h1>
        <Link href="/products">
          <Button className="flex gap-3 items-center bg-third text-white w-fit text-xs sm:text-lg hover:bg-black transition-all duration-200 ease-out lg:px-6">
            Buy Now <MdOutlineArrowRightAlt size={20} />
          </Button>
        </Link>
      </Wrapper>
    </div>
  );
};

export default Hero;
