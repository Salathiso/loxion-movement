import { supabase } from "@/lib/supabase";

export async function reduceStock(
  productId: string,
  quantity: number
) {
  // Get current stock
  const { data: product, error } = await supabase
    .from("products")
    .select("stock")
    .eq("id", productId)
    .single();

  if (error) {
    throw error;
  }

  if (!product) {
    throw new Error("Product not found.");
  }

  const newStock = Math.max(product.stock - quantity, 0);

  const { error: updateError } = await supabase
    .from("products")
    .update({
      stock: newStock,
    })
    .eq("id", productId);

  if (updateError) {
    throw updateError;
  }
}