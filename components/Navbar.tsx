import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
      <Link href="/" className="text-2xl font-bold">
        LOXION MOVEMENT
      </Link>

      <div className="flex gap-6">
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}