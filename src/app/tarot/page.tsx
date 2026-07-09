import type { Metadata } from "next";
import { TarotHero } from "@/components/blocks/tarot/TarotHero";
import { TarotProcess } from "@/components/blocks/tarot/TarotProcess";
import { TarotOptions } from "@/components/blocks/tarot/TarotOptions";

export const metadata: Metadata = {
  title: "Tarot & Mantra Sessions | Yogi Manu",
  description: "Clarity guided by devotion. Discover live and recorded tarot reading sessions interwoven with sacred mantra.",
};

export default function TarotPage() {
  return (
    <main>
      <TarotHero />
      <TarotProcess />
      <TarotOptions />
    </main>
  );
}
