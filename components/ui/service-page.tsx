import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollToContactButton } from "./scroll-to-contact-button";

interface ServicePageProps {
  title: string;
  description: string;
  imageUrl: string;
  services: {
    title: string;
    description: string;
  }[];
  galleryImages: string[];
  benefits: string[];
}

export function ServicePage({
  title,
  description,
  imageUrl,
  services,
  galleryImages,
  benefits,
}: ServicePageProps) {
  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: title, href: "#" }, // Aktuelle Seite ist nicht verlinkt
  ];

  return (
    <>
      {/* Hero Section - NEUES DESIGN */}
      <header className="relative h-[40vh] min-h-[300px] bg-slate-900">
        <img src={imageUrl} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-6 pb-12">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Dienstleistung</p>
            <h1 className="mt-1 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
            <p className="mt-4 text-lg text-white/85">{description}</p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Breadcrumbs wurden hier entfernt */}
        
        {/* Services Section */}
        <section>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Unsere Leistungen im Detail</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border-slate-200 bg-white p-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mt-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Einblicke in unsere Arbeit</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl aspect-video">
                <img src={src} alt={`${title} Galeriebild ${index + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-16 rounded-3xl bg-slate-50 p-8 md:p-12 border border-slate-200">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ihre Vorteile mit uns</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 text-sky-500">✔</span>
                <span className="text-lg text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Projekt anfragen</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Wir beraten Sie gerne und finden die beste Lösung für Ihr Vorhaben.
          </p>
          <ScrollToContactButton />
        </section>
      </div>
    </>
  );
}