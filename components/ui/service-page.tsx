"use client"; // WICHTIG: Macht dies zu einer Client-Komponente

import { motion } from "framer-motion";
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
  return (
    <>
      <header className="relative h-[40vh] min-h-[300px] bg-slate-900">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-6 pb-12">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
              Dienstleistung
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-1 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-white/85"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <section>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Unsere Leistungen im Detail
          </h2>
          <motion.div
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.07 }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card className="h-full border-slate-200 bg-white p-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-slate-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Einblicke in unsere Arbeit
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="aspect-video overflow-hidden rounded-xl"
              >
                <motion.img
                  src={src}
                  alt={`${title} Galeriebild ${index + 1}`}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Ihre Vorteile mit uns
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 text-sky-500">✔</span>
                <span className="text-lg text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Projekt anfragen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Wir beraten
            Sie gerne und finden die beste Lösung für Ihr Vorhaben.
          </p>
          <ScrollToContactButton />
        </section>
      </div>
    </>
  );
}

