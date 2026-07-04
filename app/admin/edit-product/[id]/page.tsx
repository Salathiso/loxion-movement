"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import ProductForm, { ProductFormData } from "@/components/ProductForm";

export default function EditProductPage() {
  const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProduct() {
            const { data } = await supabase
                .from("products")
                .select("*")
                .eq("id", id)
                .single();

            setProduct(data);
            setLoading(false);
        }
        
        loadProduct();
    }, [id]);

    async function handleSubmit(data: ProductFormData) {
        const { error } = await supabase
            .from("products")
            .update({
                name: data.name,
                price: data.price,
                description: data.description,
            })
            .eq("id", id);

        if (error) {
            alert(error.message);
            return;
        }

        alert("Product updated successfully!");
        router.push("/admin/products");
    }

    if (loading) {
       return <p className="p-10">Loading...</p>; 
    }

    return (
        <main className="min-h-screen p-10">
            <h1 className="text-3x1 font-bold mb-8">
                Edit Product
            </h1>

            <ProductForm
                initialData={{
                    name: product.name,
                    price: product.price,  
                    description: product.description,
                }}
                submitText="Update Product"
                onSubmit={handleSubmit}
            />
        </main>
    );
}