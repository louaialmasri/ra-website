import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}