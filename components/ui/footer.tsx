"use client";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-10 text-center text-slate-500">
      <p>© {new Date().getFullYear()} R&A – Reinigung & Abbruch. Alle Rechte vorbehalten.</p>
    </footer>
  );
}