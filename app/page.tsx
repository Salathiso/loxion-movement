import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Product } from "@/types/product";

async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*");
  
  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }
  
  return data || [];
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="border border-zinc-800 p-6 rounded-xl block hover:border-white transition cursor-pointer"
    >
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg"
        loading="lazy"
      />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-zinc-400 mt-2 line-clamp-2">
        {product.description}
      </p>
      <p className="text-xl font-bold mt-4">R{product.price}</p>
    </Link>
  );
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-black mb-10">LOXION MOVEMENT</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}