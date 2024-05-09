import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import db from "@/db/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Product Page
const ProductPage = async () => {
  // Fetch all products
  const products = await db.product.findMany();
  // Render the products or a message if no products are found
  return (
    <>
      <div className="max-w-6xl mx-auto my-10 text-2xl flex justify-between px-2">
        {products && products.length > 0 ? (
          <div className="flex w-full flex-wrap gap-2">
            {products.map((item) => (
              <Card className="max-w-[250px]" key={item.id}>
                <CardContent className="flex flex-col gap-2 items-center">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="mt-2 aspect-video object-cover"
                  />
                  <CardTitle className="text-xs">{item.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <h1>No Products found</h1>
        )}
        <Link href="/admin/product/create">
          <Button className="bg-black hover:bg-primary text-white font-bold py-2 px-4 rounded">
            Add Product
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ProductPage;
