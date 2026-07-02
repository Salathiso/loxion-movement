"use client";

import ProductForm from "@/components/ProductForm";
import { createProduct } from "@/lib/products/create";

export default function AddProductPage() {
  async function handleAddProduct(data: Parameters<typeof createProduct>[0]) {
    await createProduct(data);
    alert("✅ Product Added");
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        Add Product
      </h1>

      <ProductForm
        onSubmit={handleAddProduct}
        submitText="Add Product"
      />
    </main>
  );
}