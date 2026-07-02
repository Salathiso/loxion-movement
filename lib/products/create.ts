import { supabase } from "@/lib/supabase";
import { uploadProductImage } from "@/lib/uploadProduct";
import { ProductFormData } from "@/components/ProductForm";

export async function createProduct(
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

  if (error) throw error;
}