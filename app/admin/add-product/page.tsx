"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { uploadProductImage } from "@/lib/uploadProduct";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!file) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const imageUrl = await uploadProductImage(file);

      const slug = name
        .toLowerCase()
        .trim()
        .replaceAll(" ", "-");

      const { error } = await supabase
        .from("products")
        .insert({
          name,
          slug,
          description,
          price: Number(price),
          image_url: imageUrl,
          category: "T-Shirts",
          stock: 10,
          featured: false,
        });

      if (error) throw error;

      alert("Product Added Successfully");

      setName("");
      setPrice("");
      setDescription("");
      setFile(null);
    } catch (error) {
      console.error("FULL ERROR:", error);
      alert(JSON.stringify(error, null , 2));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg"
      >
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-3 rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-3 rounded"
          rows={4}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFile(e.target.files?.[0] || null)
          }
          className="border p-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white p-3 rounded"
        >
          {loading ? "Uploading..." : "Save Product"}
        </button>
      </form>
    </main>
  );
}