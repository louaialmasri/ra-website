"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ScrollToContactButton() {
  return (
    <Link href="/#kontakt">
      <Button size="lg" className="mt-8 rounded-full">
        Jetzt kostenloses Angebot anfordern
      </Button>
    </Link>
  );
}