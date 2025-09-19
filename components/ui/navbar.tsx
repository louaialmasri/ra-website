"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Wenn wir auf der Startseite sind, scrollen wir sanft.
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    // Auf anderen Seiten überlassen wir dem Link die Navigation.
    // Next.js navigiert zur Startseite und springt zum richtigen Abschnitt.
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-500 font-extrabold text-white">R&A</div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-wide text-slate-500">Reinigung & Abbruch</p>
            <p className="text-base font-semibold">Mehr Raum. Mehr Ordnung.</p>
          </div>
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/#leistungen" onClick={(e) => handleScroll(e, "leistungen")} className="rounded-full px-3 py-2 text-sm text-slate-600 hover:text-slate-900">Leistungen</Link>
          <Link href="/#referenzen" onClick={(e) => handleScroll(e, "referenzen")} className="rounded-full px-3 py-2 text-sm text-slate-600 hover:text-slate-900">Referenzen</Link>
          <Link href="/#kontakt" onClick={(e) => handleScroll(e, "kontakt")} className="rounded-full px-3 py-2 text-sm text-slate-600 hover:text-slate-900">Kontakt</Link>
          <Button asChild className="ml-2 rounded-full">
            <Link href="/#kontakt" onClick={(e) => handleScroll(e, "kontakt")}>Kostenlos anfragen</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}