"use client";

import { deleteProduct } from "@/lib/deleteProduct";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

export default function DeleteProductButton({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm(
      "Delete this product?"
    );

    if (!confirmed) return;

    try {
      await deleteProduct(id);

      alert("Product deleted");

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="border border-red-500 text-red-500 px-4 py-2 rounded"
    >
      Delete
    </button>
  );
}