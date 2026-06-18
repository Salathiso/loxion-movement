import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: products } = await supabase
    .from("products")
    .select("*");

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-black mb-10">
        LOXION MOVEMENT
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div
            key={product.id}
            className="border border-zinc-800 p-6 rounded-xl"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />

            <h2 className="text-2xl font-bold mt-4">
              {product.name}
            </h2>

            <p className="text-zinc-400 mt-2">
              {product.description}
            </p>

            <p className="text-xl font-bold mt-4">
              R{product.price}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}