import { FadeIn } from "@/components/shared/FadeIn";
import Image from "next/image";

export function TarotProcess() {
  return (
    <section className="bg-[#F8F5EF] py-24 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Text */}
          <FadeIn>
            <div className="space-y-8 max-w-[520px]">
              <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-[#262626] leading-[1.1]">
                The Process.
              </h2>
              <div className="space-y-6">
                <p className="font-sans text-base text-[#6D6D6D] leading-relaxed">
                  These sessions are deeply rooted in spiritual practice. We do not simply sit and pull cards. Every session begins with sacred mantra.
                </p>
                <p className="font-sans text-base text-[#6D6D6D] leading-relaxed">
                  As the chanting deepens and the mind grows quiet, the cards are drawn. The conclusion that emerges is not my own–it is simply what the practice reveals.
                </p>
                <p className="font-sans text-base text-[#6D6D6D] leading-relaxed">
                  This is a space of reverence, designed to bring peace, reassurance, and profound clarity to whatever you are navigating in your life.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] rounded-xl overflow-hidden max-w-[520px] mx-auto lg:mx-0">
              <Image
                src="/manu.jpeg"
                alt="Yogi Manu in practice"
                fill
                className="object-cover object-center grayscale opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#D79B42]/10 mix-blend-color" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
