import { fetchProducts } from "@/actions/fetch-product";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsPage = async () => {
  const products = await fetchProducts();
  return (
    <>
      <Wrapper className="flex justify-center">
        <div className="flex flex-col gap-5 justify-center px-2">
          <h1 className="text-3xl text-white mt-10">Browse Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3  text-white  mb-10 lg:mb-20 ">
            {products.map((item) => (
              <Link
                href={`/products/${item.id}`}
                key={item.id}
                className="flex gap-3 border-b-2 transition-all duration-200 ease-in px-2 py-6 flex-col max-w-sm lg:flex-row lg:max-w-none"
              >
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="aspect-video object-cover custom-shadow-games rounded-md lg:max-w-[300px]"
                />
                <div className="flex justify-between flex-col gap-2 h-full">
                  <h1 className="text-xs lg:text-xl">{item.title}</h1>
                  <p className="text-xs lg:text-base line-clamp-2 ">
                    {item.description}
                  </p>
                  <div className="mt-4 text-xs lg:text-sm">
                    <p>Price: {formatCurrency(item.priceInCents)}</p>
                  </div>
                  <Button className="bg-secondary text-black hover:text-white hover:bg-black transition-all duration-200 ease-in">
                    Add To Cart
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ProductsPage;
