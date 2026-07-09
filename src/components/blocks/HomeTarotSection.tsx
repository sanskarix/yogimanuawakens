import { FadeIn } from "@/components/shared/FadeIn";
import Link from "next/link";
import Image from "next/image";

export function HomeTarotSection() {
  return (
    <section className="bg-[#FCFAF7] py-24 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <FadeIn>
            <div className="space-y-8 max-w-[520px]">
              <div>
                <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#D79B42] mb-4">
                  Offerings
                </span>
                <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-[#262626] leading-[1.1]">
                  Tarot &amp; Mantra Sessions
                </h2>
              </div>
              
              <p className="font-sans text-base text-[#6D6D6D] leading-relaxed">
                Sometimes the path feels uncertain and we simply need a quiet space to find clarity. I offer personalized tarot card reading sessions—not to predict the future, but to illuminate the present.
              </p>
              <p className="font-sans text-base text-[#6D6D6D] leading-relaxed">
                Every session is rooted in sacred mantra. As the chanting deepens, the cards are pulled, revealing conclusions guided entirely by the practice itself.
              </p>
              
              <div className="pt-4">
                <Link
                  href="/tarot"
                  className="inline-flex items-center justify-center h-12 px-8 font-sans text-xs tracking-widest uppercase bg-[#262626] text-[#FCFAF7] rounded-full hover:bg-[#D79B42] transition-colors duration-500"
                >
                  Explore Sessions
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F8F5EF] border border-[#E8E1D7]">
              {/* If we don't have a tarot-specific image, we use an abstract elegant layout or a placeholder image */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                 {/* Decorative elements representing cards */}
                 <div className="flex gap-4 rotate-[15deg]">
                    <div className="w-24 h-36 border border-[#262626] rounded-md -rotate-12 translate-y-4" />
                    <div className="w-24 h-36 border border-[#262626] rounded-md" />
                    <div className="w-24 h-36 border border-[#262626] rounded-md rotate-12 translate-y-4" />
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#F8F5EF] to-transparent opacity-80" />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
