"use client";

import { useState } from "react";

export type ProductFormData = {
  name: string;
  price: number;
  description: string;
  image: File | null;
};

type Props = {
  onSubmit: (data: ProductFormData) => Promise<void>;
  submitText?: string;
  initialData?: {
    name: string;
    price: number;
    description: string;
  };
};

export default function ProductForm({
  onSubmit,
  submitText = "Save Product",
  initialData,
}: Props) {
  const [name, setName] = useState(initialData?.name ?? "");
  const [price, setPrice] = useState(initialData?.price.toString() ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!image && !initialData) {
      alert("Please choose an image.");
      return;
    }

    setLoading(true);

    try {
      await onSubmit({
        name,
        price: Number(price),
        description,
        image,
      });

      setName("");
      setPrice("");
      setDescription("");
      setImage(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-lg"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="border p-3 rounded"
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="border p-3 rounded"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-3 rounded"
        rows={4}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setImage(e.target.files?.[0] || null)
        }
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white p-3 rounded"
      >
        {loading ? "Saving..." : submitText}
      </button>
    </form>
  );
}