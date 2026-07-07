"use client";

import { useEffect, useState } from "react";
import { CartItem, getCart } from "@/lib/cart";

export default function CheckoutSummary() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="border rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <p className="font-semibold">
                {item.name}
              </p>

              <p className="text-sm text-zinc-500">
                Qty: {item.quantity}
              </p>
            </div>

            <p className="font-bold">
              R{item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8 text-xl font-bold">
        <span>Total</span>

        <span>R{total}</span>
      </div>
    </div>
  );
}