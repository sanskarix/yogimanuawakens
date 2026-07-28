import type { Metadata } from "next";
import { FadeIn } from "@/components/shared/FadeIn";
import { ShopSection } from "@/components/blocks/ShopSection";

export const metadata: Metadata = {
  title: "Shop | Yogi Manu",
  description:
    "Curated yoga props, meditation tools, and tarot decks – things Manu personally uses and recommends for your practice.",
};

export default function ShopPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen">
      {/* Hero Header */}
      <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-16 border-b border-[#E8E1D7]">
        {/* Decorative center line */}
        <div
          className="absolute top-0 bottom-0 left-1/2 w-px bg-[#E8E1D7] -translate-x-1/2"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[760px] mx-auto px-6 text-center">
          <FadeIn>
            <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#D79B42] mb-6">
              Curated Recommendations
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#262626] leading-[1.1] mb-6">
              The <em className="italic">Shop</em>
            </h1>
            <p className="font-sans text-base md:text-lg text-[#6D6D6D] leading-relaxed max-w-[520px] mx-auto">
              A small collection of things I genuinely use and trust – yoga
              props, meditation tools, and tarot decks that have supported my
              own practice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Shop Grid */}
      <ShopSection />
    </main>
  );
}
