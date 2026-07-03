"use client";

import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminNav() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  return (
    <nav className="flex items-center justify-between border-b p-4 mb-8">
      <h1 className="text-xl font-bold">
        Loxion Admin
      </h1>

      <div className="flex gap-4">
        <Link href="/admin/products">
          Products
        </Link>

        <Link href="/admin/add-product">
          Add Product
        </Link>

        <button
          onClick={handleLogout}
          className="text-red-500"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}