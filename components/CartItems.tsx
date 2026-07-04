"use client";

import { useEffect, useState } from "react";
import { CartItem, getCart } from "@/lib/cart";

export default function CartItems() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  if (items.length === 0) {
    return (
      <p className="text-zinc-400">
        Your cart is empty.
      </p>
    );
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 flex gap-4"
        >
          <img
            src={item.image_url}
            alt={item.name}
            className="w-24 h-24 object-cover rounded"
          />

          <div className="flex-1">
            <h2 className="text-xl font-bold">
              {item.name}
            </h2>

            <p>R{item.price}</p>

            <p>Qty: {item.quantity}</p>

            <p className="font-semibold">
              R{item.price * item.quantity}
            </p>
          </div>
        </div>
      ))}

      <div className="text-right text-2xl font-bold">
        Total: R{total}
      </div>
    </div>
  );
}