import { ServicePage } from "@/components/ui/service-page";

export default function AbbruchPage() {
  return (
    <ServicePage
      title="Abbruch, Rückbau & Entsorgung"
      description="Wir schaffen Baufreiheit für Ihr nächstes Projekt – präzise, sicher und mit einem klaren Fokus auf fachgerechte Entsorgung und Recycling."
      imageUrl="https://images.unsplash.com/photo-1525909002-150596c8278d?q=80&w=2400&auto=format&fit=crop"
      services={[
        { 
          title: "Teilabbruch & selektiver Rückbau", 
          description: "Präziser Rückbau einzelner Bauteile bei laufendem Betrieb oder im Bestand, um Platz für Modernisierungen zu schaffen." 
        },
        { 
          title: "Entkernung von Gebäuden", 
          description: "Wir entfernen die gesamte Haustechnik, Böden, Decken und nicht-tragende Wände und bereiten die Bausubstanz für den Rohbau vor." 
        },
        { 
          title: "Innenabbruch", 
          description: "Staubarme und erschütterungsarme Abbrucharbeiten im Inneren von Gebäuden, ideal für Sanierungen und Umbauten." 
        },
        { 
          title: "Entrümpelung", 
          description: "Besenreine Entrümpelung von Kellern, Dachböden, Wohnungen und Gewerbeflächen inklusive fachgerechter Entsorgung." 
        },
        { 
          title: "Pflaster- und Asphaltaufbruch", 
          description: "Effizientes Aufbrechen und Entfernen von befestigten Flächen wie Wegen, Parkplätzen oder Fundamenten." 
        },
        { 
          title: "Reinigung nach Abbrucharbeiten", 
          description: "Wir hinterlassen jede Baustelle besenrein und sorgen für eine sichere und saubere Übergabe an die Folgegewerke." 
        },
        { 
          title: "Fachgerechte Bauschuttentsorgung", 
          description: "Trennung, Abtransport und umweltgerechte Entsorgung aller anfallenden Materialien nach gesetzlichen Vorgaben." 
        },
        { 
          title: "Gefahrstoffentsorgung", 
          description: "Zertifizierte Entsorgung von Asbest, künstlichen Mineralfasern (KMF) und anderen gesundheitsgefährdenden Stoffen." 
        },
        { 
          title: "Sperrmüll- & Sondermüllentsorgung", 
          description: "Zuverlässige Entsorgung von nicht-recyclebaren Abfällen und Sondermüll in Zusammenarbeit mit zertifizierten Partnern." 
        },
      ]}
      galleryImages={[
        "https://images.unsplash.com/photo-1581092448348-a7262a03a2f8?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516935633465-7c154733dc33?q=80&w=800&auto=format&fit=crop",
      ]}
      benefits={[
        "Ein Ansprechpartner für Abbruch und Entsorgung",
        "Maximale Sicherheit und Einhaltung aller Vorschriften",
        "Moderne, staubarme Technologie für saubere Ergebnisse",
        "Transparente Kosten und termingerechte Ausführung",
        "Nachhaltiges Recycling und umweltgerechte Entsorgung",
      ]}
    />
  );
}