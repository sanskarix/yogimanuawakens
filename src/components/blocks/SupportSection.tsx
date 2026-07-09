import { FadeIn } from "@/components/shared/FadeIn";

export function SupportSection() {
  return (
    <section
      id="support"
      className="bg-[#262626] py-20 md:py-28"
      aria-labelledby="support-heading"
    >
      <div className="max-w-[720px] mx-auto px-6 lg:px-16 text-center">
        <FadeIn>
          <div className="space-y-8">

            <h2
              id="support-heading"
              className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-[#FCFAF7] leading-[1.15]"
            >
              If these teachings have served you
            </h2>
            <p className="font-sans text-base text-[#FCFAF7]/60 leading-relaxed max-w-[480px] mx-auto">
              Everything shared through these teachings is offered freely. If
              these practices have supported your life and you feel called to
              contribute, your generosity helps make future videos, music,
              gatherings and teachings possible.
            </p>
            <a
              href="mailto:contact@yogimanu.com"
              id="support-main-cta"
              className="inline-flex items-center justify-center h-10 px-6 font-sans text-xs tracking-widest uppercase border border-[#D79B42] text-[#D79B42] rounded-full hover:bg-[#D79B42] hover:text-[#262626] transition-all duration-300"
            >
              Support the Journey
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
