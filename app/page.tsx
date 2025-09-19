"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceIcons } from "@/components/ui/service-icons";
import { Button } from "@/components/ui/button";

// --- BUILDING BLOCKS (Komponenten nur für die Landing Page) ---

function Hero() {
  return (
    <header className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2400&auto=format&fit=crop"
          alt="Moderner und heller Innenraum"
          className="h-[72vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      </div>
      <div className="mx-auto flex h-[72vh] max-w-6xl items-center px-6">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          >
            Platz schaffen. <span className="text-sky-300">Sauber bauen.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mt-4 text-lg text-white/85"
          >
            Abbruch, Umbau und Reinigung aus einer Hand – schnell, staubarm und
            zuverlässig.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              className="rounded-full"
              onClick={() =>
                document
                  .getElementById("leistungen")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Leistungen ansehen
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/40 text-sky-300 hover:bg-white/10 hover:text-sky-500"
              onClick={() =>
                document
                  .getElementById("kontakt")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Schnelles Angebot
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

function ServiceCard({
  title,
  points,
  image,
  accent,
  href,
}: {
  title: string;
  points: string[];
  image: string;
  accent: string;
  href: string;
}) {
  const Icon = title.includes("Abbruch")
    ? ServiceIcons.abbruch
    : ServiceIcons.reinigung;

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Card className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-40">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${accent} to-transparent`}
            />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              {Icon && <Icon className="text-sky-500" size={28} />}
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <ul className="mt-4 grid gap-2 text-slate-700">
              {points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}

function Testimonials() {
    const items = [
      {
        quote: "Schnell, sauber, zuverlässig – der Durchbruch war in einem Tag erledigt, inkl. Entsorgung.",
        author: "Familie A., Wohnungssanierung",
      },
      {
        quote: "Top Bauendreinigung – die Übergabe an den Mieter lief reibungslos.",
        author: "Hausverwaltung M.",
      },
      {
        quote: "Fairer Festpreis und pünktlich – gerne wieder.",
        author: "F. Becker, Bürofläche",
      },
    ];

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, items.length]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-40 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full"
          >
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardContent className="p-8 md:p-10">
                <p className="text-xl leading-relaxed">“{items[index].quote}”</p>
                <p className="mt-4 text-sm font-semibold text-slate-600">{items[index].author}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-10 rounded-full transition-colors ${i === index ? "bg-sky-500" : "bg-slate-300 hover:bg-slate-400"}`}
            aria-label={`Zeige Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// --- HAUPTKOMPONENTE (Landing Page) ---

export default function RALandingPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");
  };

  return (
    <>
      <Hero />

      <motion.section
        id="leistungen"
        className="mx-auto max-w-6xl px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="mt-2 text-slate-600">
              Klare Pakete – schnell startklar.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full border-slate-300"
            onClick={() =>
              document
                .getElementById("kontakt")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Unverbindlich anfragen
          </Button>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Abbruch & Entsorgung"
            points={[
              "Teil- & Innenabbruch",
              "Entkernung & Entrümpelung",
              "Bauschutt- & Gefahrstoffentsorgung",
              "Saubere Baustellenübergabe",
            ]}
            image="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop"
            accent="from-sky-500/20"
            href="/abbruch"
          />
          <ServiceCard
            title="Gebäude- & Spezialreinigung"
            points={[
              "Büro- & Unterhaltsreinigung",
              "Bau- & Grundreinigung",
              "Fenster-, Fassaden- & Industriereinigung",
              "Außenanlagen, Grünpflege & Winterdienst",
            ]}
            image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
            accent="from-emerald-500/20"
            href="/reinigung"
          />
        </div>
      </motion.section>

      <section id="referenzen" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Was Kund:innen sagen
            </h2>
            <p className="mt-2 text-slate-600">
              Echte Stimmen aus aktuellen Projekten.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1fr,380px]">
          <Card className="order-2 border-slate-200 bg-white shadow-sm transition-all md:order-1">
            <CardContent className="p-8 md:p-10">
              {formStatus === "success" ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-semibold">Vielen Dank!</h3>
                  <p className="mt-2 text-slate-600">
                    Ihre Nachricht wurde erfolgreich versendet. Wir werden uns
                    in Kürze bei Ihnen melden.
                  </p>
                  <Button
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 rounded-xl"
                  >
                    Weitere Nachricht senden
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-semibold tracking-tight">
                    Nachricht senden
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Teilen Sie kurz Ihr Anliegen. Wir antworten werktags i. d. R.
                    innerhalb von 24 Stunden.
                  </p>
                  <form
                    className="mt-6 grid gap-4"
                    onSubmit={handleFormSubmit}
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      <input required type="text" placeholder="Name" className="rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-sky-400" />
                      <input required type="email" placeholder="E-Mail" className="rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-sky-400" />
                    </div>
                    <input type="tel" placeholder="Telefon (optional)" className="rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-sky-400" />
                    <div className="grid gap-4 md:grid-cols-2">
                      <select className="rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-sky-400">
                        <option>Leistung wählen</option>
                        <option>Abbruch</option>
                        <option>Reinigung</option>
                      </select>
                      <input type="text" placeholder="PLZ / Ort" className="rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-sky-400" />
                    </div>
                    <textarea rows={5} placeholder="Ihre Nachricht" className="rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-sky-400" />
                    <div className="flex flex-wrap gap-3">
                      <Button type="submit" className="w-28 rounded-xl" disabled={formStatus === "sending"}>
                        {formStatus === "sending" ? "Sendet..." : "Senden"}
                      </Button>
                      <Button variant="outline" className="rounded-xl border-slate-300" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        Nach oben
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </CardContent>
          </Card>

          <aside className="order-1 md:order-2">
            <div className="md:sticky md:top-24">
              <Card className="border-sky-200 bg-gradient-to-br from-sky-50 to-white shadow-sm">
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-wide text-sky-600">
                    Direktkontakt
                  </p>
                  <h4 className="mt-1 text-2xl font-semibold">
                    R&A – Reinigung & Abbruch
                  </h4>
                  <div className="mt-4 grid gap-2 text-slate-700">
                    <p>📞 0151 234 56 789</p>
                    <p>✉️ kontakt@ra-bau.de</p>
                    <p>📍 Regional & Umgebung</p>
                  </div>
                  <div className="mt-6 grid gap-2">
                    <Button className="w-full">Anrufen</Button>
                    <Button variant="outline" className="w-full border-slate-300">
                      E-Mail schreiben
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

