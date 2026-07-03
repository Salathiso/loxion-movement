import AdminNav from "@/components/AdminNav";
import AdminGuard from "@/components/AdminGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <AdminNav />
      {children}
    </AdminGuard>
  );
}