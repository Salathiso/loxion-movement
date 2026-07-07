import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import OrderStatusSelect from "@/components/OrderStatusSelect";

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: order } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (!order) {
    notFound();
  }

  const { data: items } = await supabase
    .from("order_items")
    .select("*")
    .eq("order_id", id);

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-black mb-8">
        Order #{order.id}
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Customer Details */}
        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Customer
          </h2>

          <div className="space-y-2">
            <p>
              <strong>Name:</strong>{" "}
              {order.customer_name}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {order.email}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {order.phone}
            </p>

            <p>
              <strong>Address:</strong>{" "}
              {order.address}
            </p>

            <OrderStatusSelect
                orderId={order.id}
                currentStatus={order.status}
            />
            
          </div>
        </div>

        {/* Order Summary */}
        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Order Items
          </h2>

          <div className="space-y-4">
            {items?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b pb-3"
              >
                <div>
                  <p className="font-semibold">
                    {item.product_name}
                  </p>

                  <p className="text-sm text-zinc-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p>
                  R
                  {item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-4 flex justify-between text-xl font-black">
            <span>Total</span>

            <span>R{order.total}</span>
          </div>
        </div>
      </div>
    </main>
  );
}