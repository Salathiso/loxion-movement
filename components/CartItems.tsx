"use client";

import { useEffect, useState } from "react";
import { 
    CartItem, 
    getCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart
} from "@/lib/cart";

export default function CartItems() {
  const [items, setItems] = useState<CartItem[]>([]);

  function refreshCart() {
    setItems(getCart());
  }

  useEffect(() => {
    refreshCart();
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

            <div className="flex items--center gap-3 mt-3">
                <button
                    onClick={() => {
                       decreaseQuantity(item.id);
                          refreshCart();
                    }}
                    className="border px-3 py-1 rounded"
                >
                    -
                </button> 

                <span className="font-bold">
                    {item.quantity}
                </span>

                <button
                    onClick={() => {
                        increaseQuantity(item.id);
                        refreshCart();
                    }}
                    className="border px-3 py-1 rounded"
                >
                    +
                </button>

                <button
                    onClick={() => {
                        removeFromCart(item.id);
                        refreshCart();
                    }}
                    className="text-red-500 ml-4"
                >
                    Remove
                </button>
            </div>

            <p className="font-semibold mt-3">
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