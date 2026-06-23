"use client";

export default function AddToCartButton() {
  function handleAddToCart() {
    localStorage.setItem("cart-test", "Classic Kasi Tee");
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