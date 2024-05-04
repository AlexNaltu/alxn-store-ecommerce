"use server";
import { z } from "zod";
import { Product } from "@prisma/client";
import db from "@/db/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// schema for the product
const productSchema = z.object({
  title: z.string().min(1).max(1000),
  description: z.string().min(1).max(3000),
  image_url: z.string().min(1).max(10000),
});

// interface for the form state
interface ProductFormState {
  errors: {
    title?: string[];
    description?: string[];
    image_url?: string[];
    _form?: string[];
  };
}

// This function creates a new product in the database
export async function createProduct(
  formState: ProductFormState,
  formData: FormData
): Promise<ProductFormState> {
  // validate the form data
  const result = productSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    image_url: formData.get("image_url"),
  });

  // if the form data is invalid, return the errors
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  let product: Product;

  // create the product in the database and handle any errors
  try {
    product = await db.product.create({
      data: {
        title: result.data.title,
        description: result.data.description,
        image_url: result.data.image_url,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["An unknown error occurred"],
        },
      };
    }
  }

  // if the product was created successfully, redirect to the product list page
  revalidatePath("/admin/product/create");
  redirect("/admin/product");
}
