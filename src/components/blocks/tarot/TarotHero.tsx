import { FadeIn } from "@/components/shared/FadeIn";

export function TarotHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#FCFAF7] overflow-hidden pt-32 pb-20">
      {/* Decorative center line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#E8E1D7] -translate-x-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-[760px] mx-auto px-6 text-center">
        <FadeIn>
          <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#D79B42] mb-8">
            Tarot & Mantra
          </span>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#262626] leading-[1.1] mb-8">
            Clarity guided by <em className="italic">devotion</em>.
          </h1>
          <p className="font-sans text-base md:text-lg text-[#6D6D6D] leading-relaxed max-w-[520px] mx-auto">
            A reading is not about predicting the future. It is about illuminating the present. A quiet space to find clarity when the path feels uncertain.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
