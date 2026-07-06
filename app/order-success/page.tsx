import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-8">
      <div className="max-w-xl w-full text-center border border-zinc-800 rounded-2xl p-10">
        <div className="text-6xl mb-6">🎉</div>

        <h1 className="text-4xl font-black mb-4">
          Order Received!
        </h1>

        <p className="text-zinc-400 text-lg mb-8">
          Thank you for supporting <strong>Loxion Movement</strong>.
          We've received your order and will begin processing it shortly.
        </p>

        <div className="bg-zinc-900 rounded-xl p-5 mb-8">
          <p className="text-sm text-zinc-400">
            What's next?
          </p>

          <ul className="mt-4 space-y-3 text-left">
            <li>✅ Your order has been recorded.</li>
            <li>📦 We'll prepare your items.</li>
            <li>📲 You'll receive updates as your order progresses.</li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-zinc-200 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}