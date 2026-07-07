import { supabase } from "@/lib/supabase";
import { getCart } from "@/lib/cart";
import { reducestock } from "@/lib/inventory";

type CustomerDetails = {
  customer_name: string;
  email: string;
  phone: string;
  address: string;
};

export async function createOrder(
  customer: CustomerDetails
) {
  const cart = getCart();

  if (cart.length === 0) {
    throw new Error("Cart is empty.");
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const { data: order, error } = await supabase
    .from("orders")
    .insert({
      ...customer,
      total,
      status: "pending",
    })
    .select()
    .single();

  if (error) throw error;

  const orderItems = cart.map((item) => ({
    order_id: order.id,
    product_id: item.id,
    product_name: item.name,
    price: item.price,
    quantity: item.quantity,
  }));

  const { error: itemsError } = await supabase
    .from("order_items")
    .insert(orderItems);

  if (itemsError) throw itemsError;

  // Reduce stock for every purchased item
  for (const item of cart) {
    await reduceStock(item.id, item.quantity);
  }
  localStorage.removeItem("loxion-cart");

  return order;
}