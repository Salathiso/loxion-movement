import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function AdminOrdersPage() {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">
          Orders
        </h1>

        <p className="text-red-500 mt-6">
          Failed to load orders.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-black">
          Orders
        </h1>
      </div>

      <div className="space-y-5">
        {orders?.length === 0 && (
          <div className="border rounded-xl p-8 text-center">
            No orders yet.
          </div>
        )}

        {orders?.map((order) => (
          <div
            key={order.id}
            className="border rounded-xl p-6 flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold text-xl">
                {order.customer_name}
              </h2>

              <p className="text-zinc-500">
                {order.email}
              </p>

              <p className="mt-2">
                Status:
                <strong className="ml-2">
                  {order.status}
                </strong>
              </p>
            </div>

            <div className="text-right">
              <p className="text-2xl font-black">
                R{order.total}
              </p>

              <Link
                href={`/admin/orders/${order.id}`}
                className="inline-block mt-4 border px-4 py-2 rounded-lg"
              >
                View Order
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}