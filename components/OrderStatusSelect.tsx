"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const STATUSES = [
  "Pending",
  "Paid",
  "Packed",
  "Shipped",
  "Delivered",
];

type Props = {
  orderId: string;
  currentStatus: string;
};

export default function OrderStatusSelect({
  orderId,
  currentStatus,
}: Props) {
  const router = useRouter();

  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  async function updateStatus(
    newStatus: string
  ) {
    setLoading(true);

    const { error } = await supabase
      .from("orders")
      .update({
        status: newStatus,
      })
      .eq("id", orderId);

    if (error) {
      alert("Failed to update status.");
      console.error(error);
      setLoading(false);
      return;
    }

    setStatus(newStatus);
    setLoading(false);

    router.refresh();
  }

  return (
    <div className="space-y-2">
      <label className="font-semibold">
        Order Status
      </label>

      <select
        value={status}
        disabled={loading}
        onChange={(e) =>
          updateStatus(e.target.value)
        }
        className="border rounded-lg p-3 w-full"
      >
        {STATUSES.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}