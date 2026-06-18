export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-8xl font-black mb-6">
        LOXION MOVEMENT
      </h1>

      <p className="text-xl md:text-2xl max-w-2xl mb-8">
        Caged By None, Styled By Kasi.
      </p>

      <p className="text-zinc-400 max-w-xl mb-10">
        Urban lifestyle. Local culture. Art. Music.
      </p>

      <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:scale-105 transition">
        SHOP THE MOVEMENT
      </button>
    </section>
  );
}