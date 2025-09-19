"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceIcons } from "@/components/ui/service-icons";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";


export default function RALandingAlt() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />

      {/* Leistungen – 2er Raster */}
      <section id="leistungen" className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Unsere Leistungen</h2>
            <p className="mt-2 text-slate-600">Klare Pakete – schnell startklar.</p>
          </div>
          <Button variant="outline" className="rounded-full border-slate-300" onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}>Unverbindlich anfragen</Button>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Abbruch & Umbau"
            points={[
              "Wände entfernen & Durchbrüche",
              "Kernbohrungen, Schlitzen",
              "Abtransport & Entsorgung",
              "Staubschutz & Absaugung",
            ]}
            image="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop"
            accent="from-sky-500/20"
            href="/abbruch"
          />
          <ServiceCard
            title="Reinigung"
            points={[
              "Unterhalts- & Grundreinigung",
              "Bauendreinigung",
              "Glas- & Rahmenreinigung",
              "Praxis, Büro & privat",
            ]}
            image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
            accent="from-emerald-500/20"
            href="/reinigung"
          />
        </div>
      </section>

      {/* Referenzen / Testimonials */}
      <section id="referenzen" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Was Kund:innen sagen</h2>
              <p className="mt-2 text-slate-600">Echte Stimmen aus aktuellen Projekten.</p>
            </div>
            <div className="hidden md:block"><TestimonialsControls /></div>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Kontakt – Seitenleisten-Card */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1fr,380px]">
          <Card className="order-2 md:order-1 border-slate-200 bg-white shadow-sm">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-3xl font-semibold tracking-tight">Nachricht senden</h3>
              <p className="mt-2 text-slate-600">Teilen Sie kurz Ihr Anliegen. Wir antworten werktags i. d. R. innerhalb von 24 Stunden.</p>
              <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); alert("Danke! Wir melden uns."); }}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input required type="text" placeholder="Name" className="rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-sky-400" />
                  <input required type="email" placeholder="E‑Mail" className="rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-sky-400" />
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
                  <Button type="submit" className="rounded-xl">Senden</Button>
                  <Button variant="outline" className="rounded-xl border-slate-300" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Nach oben</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Seitenleiste */}
          <aside className="order-1 md:order-2">
            <div className="md:sticky md:top-24">
              <Card className="border-sky-200 bg-gradient-to-br from-sky-50 to-white shadow-sm">
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-wide text-sky-600">Direktkontakt</p>
                  <h4 className="mt-1 text-2xl font-semibold">R&A – Reinigung & Abbruch</h4>
                  <div className="mt-4 grid gap-2 text-slate-700">
                    <p>📞 0151 234 56 789</p>
                    <p>✉️ kontakt@ra-bau.de</p>
                    <p>📍 Regional & Umgebung</p>
                  </div>
                  <div className="mt-6 grid gap-2">
                    <Button className="w-full">Anrufen</Button>
                    <Button variant="outline" className="w-full border-slate-300">E‑Mail schreiben</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

/* ------------------------ Building Blocks ------------------------ */
function Hero() {
  return (
    <header className="relative isolate">
      <div className="absolute inset-0 -z-10">
        {/* Hintergrundbild */}
        <img
          src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2400&auto=format&fit=crop"
          alt="Bau & Reinigung"
          className="h-[72vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10" />
      </div>

      <div className="mx-auto flex h-[72vh] max-w-6xl items-center px-6">
        <div className="max-w-2xl text-white">
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Platz schaffen. <span className="text-sky-300">Sauber bauen.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05, duration: .6 }} className="mt-4 text-lg text-white/85">
            Abbruch, Umbau und Reinigung aus einer Hand – schnell, staubarm und zuverlässig.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .6 }} className="mt-8 flex flex-wrap gap-3">
            <Button className="rounded-full" onClick={() => document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })}>Leistungen ansehen</Button>
            <Button variant="outline" className="rounded-full border-white/40 text-sky-300 hover:bg-white/10 hover:text-sky-500" onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}>Schnelles Angebot</Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

function ServiceCard({ title, points, image, accent, href }: {
  title: string;
  points: string[];
  image: string;
  accent: string;
  href: string;
}) {
  // Icon je nach Titel
  let Icon = null;
  if (title.includes("Abbruch")) Icon = ServiceIcons.abbruch;
  else if (title.includes("Reinigung")) Icon = ServiceIcons.reinigung;

  return (
    <Link href={href}>
      <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 250, damping: 20 }}>
        <Card className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-40">
            <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            <div className={`absolute inset-0 bg-gradient-to-tr ${accent} to-transparent`} />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {Icon && <Icon className="text-sky-500" size={28} />}
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
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

/* ------------------------ Testimonials ------------------------ */
function TestimonialsControls() {
  return (
    <div className="text-slate-500 text-sm">Swipe/Buttons unten</div>
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

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardContent className="p-8 md:p-10">
                <p className="text-xl leading-relaxed">“{items[index].quote}”</p>
                <p className="mt-4 text-sm text-slate-600">{items[index].author}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Button variant="outline" className="rounded-full border-slate-300" onClick={prev}>Zurück</Button>
        <div className="flex gap-1">
          {items.map((_, i) => (
            <span key={i} className={`h-2 w-6 rounded-full ${i === index ? "bg-slate-900" : "bg-slate-300"}`} />
          ))}
        </div>
        <Button className="rounded-full" onClick={next}>Weiter</Button>
      </div>
    </div>
  );
}