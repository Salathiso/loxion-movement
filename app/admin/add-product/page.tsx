"use client";

import ProductForm, {
  ProductFormData,
} from "@/components/ProductForm";
import { uploadProductImage } from "@/lib/uploadProduct";
import { supabase } from "@/lib/supabase";

export default function AddProductPage() {
  async function handleAddProduct(
    data: ProductFormData
  ) {
    const imageUrl = await uploadProductImage(
      data.image!
    );

    const slug = data.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    const { error } = await supabase
      .from("products")
      .insert({
        name: data.name,
        slug,
        description: data.description,
        price: data.price,
        image_url: imageUrl,
        category: "T-Shirts",
        stock: 10,
        featured: false,
      });

    if (error) {
      console.error(error);
      throw error;
    }

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