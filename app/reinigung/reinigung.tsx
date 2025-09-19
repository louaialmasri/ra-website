import { ServicePage } from "@/components/ui/service-page";

export default function ReinigungPage() {
  return (
    <ServicePage
      title="Professionelle Reinigung"
      description="Wir schaffen eine saubere und repräsentative Umgebung, in der sich Menschen wohlfühlen – zuverlässig, gründlich und flexibel."
      imageUrl="https://images.unsplash.com/photo-1600372673295-e53c4b12637f?q=80&w=2400&auto=format&fit=crop"
      // Leistungen sind jetzt in der ServicePage-Komponente direkt strukturiert
      services={[
        // Gebäudereinigung
        { title: "Büroreinigung", description: "Sorgen Sie für ein produktives Arbeitsumfeld mit unserer regelmäßigen und gründlichen Büroreinigung." },
        { title: "Treppenhausreinigung", description: "Ein sauberes Treppenhaus ist die Visitenkarte Ihrer Immobilie. Wir übernehmen die Pflege." },
        { title: "Grundreinigung", description: "Intensive Reinigung, die hartnäckige Verschmutzungen entfernt und Oberflächen für die Zukunft schützt." },
        { title: "Unterhaltsreinigung", description: "Flexible Reinigungsintervalle, die genau auf die Bedürfnisse Ihrer Immobilie zugeschnitten sind." },
        { title: "Fenster- & Glasreinigung", description: "Streifenfreier Durchblick für Fenster, Glasfassaden und Wintergärten, inklusive Rahmenreinigung." },

        // Spezialreinigung
        { title: "Baureinigung", description: "Von der Baugrobreinigung bis zur Baufeinreinigung – wir sorgen für eine saubere Übergabe Ihres Projekts." },
        { title: "Industriereinigung", description: "Reinigung von Produktionsanlagen, Maschinen und Hallen nach höchsten Standards." },
        { title: "Fassadenreinigung", description: "Wir entfernen schonend Schmutz, Algen und Moos und lassen Ihre Fassade in neuem Glanz erstrahlen." },
        { title: "Teppich- & Polsterreinigung", description: "Tiefenwirksame Reinigung für Teppiche und Polstermöbel – für Frische und Hygiene." },
        { title: "Desinfektionsreinigung", description: "Professionelle Desinfektion zur Keimreduktion in sensiblen Bereichen wie Praxen und Sanitäranlagen." },

        // Außenanlagen & Pflege
        { title: "Grünanlagenpflege", description: "Vom Rasenschnitt bis zum Heckenschnitt – wir halten Ihre Grünflächen gepflegt und repräsentativ." },
        { title: "Winterdienst", description: "Zuverlässige Schnee- und Eisbeseitigung für sichere Wege, Einfahrten und Parkplätze." },
        { title: "Hof- und Parkplatzreinigung", description: "Maschinelle Reinigung von Außenflächen für einen stets einladenden ersten Eindruck." },
        { title: "Graffitientfernung", description: "Schnelle und rückstandslose Entfernung von Graffitis auf allen Arten von Oberflächen." },
      ]}
      galleryImages={[
        "https://images.unsplash.com/photo-1628177142042-a0dc758f5e92?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541123437800-1a730214c93b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599557049493-247a3c3aa393?q=80&w=800&auto=format&fit=crop",
      ]}
      benefits={[
        "Ein Ansprechpartner für alle Reinigungsarbeiten",
        "Einsatz von umwelt- und materialschonenden Reinigungsmitteln",
        "Geschultes, zuverlässiges und diskretes Personal",
        "Flexible und individuell anpassbare Reinigungspläne",
        "Hohe Qualitätsstandards durch regelmäßige Kontrollen",
        "Klare und transparente Preisgestaltung ohne versteckte Kosten",
      ]}
    />
  );
}