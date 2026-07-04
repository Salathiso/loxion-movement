export type CartItem = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
};

const CART_KEY = "loxion-cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  const cart = localStorage.getItem(CART_KEY);

  return cart ? JSON.parse(cart) : [];
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(item: CartItem) {
  const cart = getCart();

  const existing = cart.find((p) => p.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(item);
  }

  saveCart(cart);
}

export function increaseQuantity(id: string) {
  const cart = getCart();

  const item = cart.find((p) => p.id === id);

  if (item) {
    item.quantity += 1;
  }

  saveCart(cart);
}

export function decreaseQuantity(id: string) {
  const cart = getCart();

  const item = cart.find((p) => p.id === id);

  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    saveCart(cart.filter((p) => p.id !== id));
    return;
  }

  saveCart(cart);
}

export function removeFromCart(id: string) {
  const cart = getCart();

  saveCart(cart.filter((p) => p.id !== id));
}