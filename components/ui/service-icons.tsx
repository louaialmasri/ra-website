import { Hammer, SprayCan } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Wir definieren einen Typ für unsere Icons
interface ServiceIconCollection {
  [key: string]: LucideIcon;
}

// Wir exportieren die Icons, damit wir sie im Hauptcode verwenden können
export const ServiceIcons: ServiceIconCollection = {
  abbruch: Hammer,
  reinigung: SprayCan,
};
