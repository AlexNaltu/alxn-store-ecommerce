import db from "@/db/db";

export async function fetchProducts() {
  const products = await db.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return products;
}
