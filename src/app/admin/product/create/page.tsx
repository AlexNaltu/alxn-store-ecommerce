import { createProduct } from "@/actions/add-product";
import ProductForm from "@/components/forms/ProductForm";
import React from "react";

// Create Product Page
const CreateProductPage = () => {
  return (
    <div>
      <ProductForm
        formAction={createProduct}
        initialData={{
          title: "",
          description: "",
          image_url: "",
          price: 0,
        }}
      />
    </div>
  );
};

export default CreateProductPage;
