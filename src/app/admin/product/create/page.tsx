import { createProduct } from "@/actions/add-product";
import ProductForm from "@/components/forms/ProductForm";
import React from "react";

const page = () => {
  return (
    <div>
      <ProductForm
        formAction={createProduct}
        initialData={{
          title: "",
          description: "",
          image_url: "",
        }}
      />
    </div>
  );
};

export default page;