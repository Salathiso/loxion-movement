"use client";

import { useState } from "react";
import CheckoutSummary from "@/components/CheckoutSummary";
import { createOrder } from "@/lib/orders";
import { clearCart } from "@/lib/cart";

export default function CheckoutPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [ loading, setLoading] = useState(false);

  async function handleContinue(
    e: React.FormEvent
  ) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const order = await createOrder({
        customer_name: fullName,
        email,
        phone,
        address,
      });

      clearCart();

    
      window.location.href = `/order-success`;
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Failed to create order.");
    }
  }

  return (
    <main className="min-h-screen max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <form
          onSubmit={handleContinue}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded p-3"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-3"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded p-3"
            required
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded p-3"
            rows={5}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50"
          >
            {loading ? "Creating Order...": "Continue"}
          </button>
        </form>

        <CheckoutSummary />
      </div>
    </main>
  );
}