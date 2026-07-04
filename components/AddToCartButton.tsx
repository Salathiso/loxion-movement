"use client";

import { addToCart } from "@/lib/cart";

type Props = {
  id: string;
  name: string;
  price: number;
  image_url: string;
};

export default function AddToCartButton({
  id,
  name,
  price,
  image_url,
}: Props) {
  function handleAddToCart() {
    addToCart({
      id,
      name,
      price,
      image_url,
      quantity: 1,
    });

    alert("Added to cart");
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-white text-black px-6 py-3 rounded-lg mt-6"
    >
      Add To Cart
    </button>
  );
}