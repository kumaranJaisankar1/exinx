import { IlluminatedHero } from "@/components/ui/illuminated-hero";

export default function DemoPage() {
  return (
    <main className="bg-black">
      <IlluminatedHero 
        title="Introducing"
        highlight="Illuminated Glow Text."
        subtitle="Highlight the main focus text."
        description="Experience a new way to draw attention to key elements with stunning illuminated text. Perfect for making a bold statement, this dynamic design ensures your content stands out effortlessly."
      />
    </main>
  );
}
