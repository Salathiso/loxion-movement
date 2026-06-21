import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full max-w-md rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-6">
        {product.name}
      </h1>

      <p className="mt-4 text-zinc-400">
        {product.description}
      </p>

      <p className="mt-6 text-2xl font-bold">
        R{product.price}
      </p>
    </main>
  );
}