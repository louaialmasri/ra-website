"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollTo = (id: string) => {
    // Überprüfen, ob wir auf der Startseite sind
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Wenn nicht, zur Startseite navigieren und dann scrollen
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-500 text-white font-extrabold">R&A</div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-wide text-slate-500">Reinigung & Abbruch</p>
            <p className="text-base font-semibold">Mehr Raum. Mehr Ordnung.</p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <button onClick={() => scrollTo("leistungen")} className="rounded-full px-3 py-2 text-sm text-slate-600 hover:text-slate-900">Leistungen</button>
          <button onClick={() => scrollTo("referenzen")} className="rounded-full px-3 py-2 text-sm text-slate-600 hover:text-slate-900">Referenzen</button>
          <button onClick={() => scrollTo("kontakt")} className="rounded-full px-3 py-2 text-sm text-slate-600 hover:text-slate-900">Kontakt</button>
          <Button className="ml-2 rounded-full" onClick={() => scrollTo("kontakt")}>Kostenlos anfragen</Button>
        </div>
      </div>
    </nav>
  );
}