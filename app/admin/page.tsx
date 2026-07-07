import { supabase } from "@/lib/supabase";
import StatCard from "@/components/StatCard";

export default async function AdminPage() {
  const { count: productCount } = await supabase
    .from("products")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: orderCount } = await supabase
    .from("orders")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: pendingOrders } = await supabase
    .from("orders")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "Pending");

  const { data: orders } = await supabase
    .from("orders")
    .select("total");

  const revenue =
    orders?.reduce(
      (sum, order) => sum + Number(order.total),
      0
    ) ?? 0;

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-black mb-10">
        Command Center
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Products"
          value={productCount ?? 0}
        />

        <StatCard
          title="Orders"
          value={orderCount ?? 0}
        />

        <StatCard
          title="Pending Orders"
          value={pendingOrders ?? 0}
        />

        <StatCard
          title="Revenue"
          value={`R${revenue}`}
        />
      </div>
    </main>
  );
}