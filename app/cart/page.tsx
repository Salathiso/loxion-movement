import CartItems from "@/components/CartItems";

export default function CartPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        Your Cart
      </h1>

      <CartItems />
    </main>
  );
}