"use client";

import React, { useState } from "react";
import { useFormState } from "react-dom";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface FormErrors {
  title?: string[];
  description?: string[];
  image_url?: string[];
  price?: number[];
}

interface FormState {
  errors: FormErrors;
}

interface ProductFormProps {
  formAction: any;
  initialData: {
    title: string;
    description: string;
    image_url: string;
    price: number;
  };
}

const ProductForm = ({ formAction, initialData }: ProductFormProps) => {
  const [formState, action] = useFormState<FormState>(formAction, {
    errors: {},
  });

  const [priceInCents, setPriceInCents] = useState<number>();
  return (
    <form
      action={action}
      className="text-black flex flex-col max-w-lg mx-auto my-10 gap-3"
    >
      <label htmlFor="image_url">Image Url</label>
      <Input type="text" id="image_url" name="image_url" />
      {formState.errors.title && <h1>{formState.errors.title.join(",")} </h1>}

      <label htmlFor="title">Title</label>
      <Input type="text" id="title" name="title" />
      {formState.errors.title && <h1>{formState.errors.title.join(",")} </h1>}

      <label htmlFor="description">Description</label>
      <Textarea id="description" name="description" />
      {formState.errors.title && <h1>{formState.errors.title.join(",")} </h1>}

      <label htmlFor="price">Price</label>
      <Input
        type="number"
        id="priceInCents"
        name="priceInCents"
        value={priceInCents}
        onChange={(e) => setPriceInCents(Number(e.target.value))}
      />
      {formState.errors.price && <h1>{formState.errors.price.join(",")} </h1>}

      <Button type="submit" className="text-white">
        Submit
      </Button>
    </form>
  );
};

export default ProductForm;
