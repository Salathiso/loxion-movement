export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
  featured: boolean;
  created_at: string | null;
};

export type ProductInsert = Omit<
  Product,
  "id" | "created_at"
>;