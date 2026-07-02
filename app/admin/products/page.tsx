import { supabase } from "@/lib/supabase";
import Link from "next/link";
import DeleteProductButton from "@/components/deleteProductButton";

export default async function AdminProductsPage() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Products
        </h1>

        <Link
          href="/admin/add-product"
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Add Product
        </Link>
      </div>

      <div className="space-y-6">
        {products?.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex gap-6 items-center"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-28 h-28 object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="text-xl font-bold">
                {product.name}
              </h2>

              <p>R{product.price}</p>

              <p>Stock: {product.stock}</p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/admin/edit-product/${product.id}`}
                className="border px-4 py-2 rounded"
              >
                Edit
              </Link>

              <DeleteProductButton
                id={product.id}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}