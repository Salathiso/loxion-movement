export default function FeaturedProducts() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Featured Collection
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-zinc-800 p-6">
          Classic Kasi Tee
        </div>

        <div className="border border-zinc-800 p-6">
          Thokoza Hoodie
        </div>

        <div className="border border-zinc-800 p-6">
          Movement Cap
        </div>
      </div>
    </section>
  );
}