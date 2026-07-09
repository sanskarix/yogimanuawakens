import { FadeIn } from "@/components/shared/FadeIn";

export function GratitudeSection() {
  return (
    <section
      className="bg-[#F8F5EF] py-24 md:py-36"
      aria-labelledby="gratitude-heading"
    >
      <div className="max-w-[720px] mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          {/* Divider ornament */}
          <div className="flex items-center justify-center gap-4 mb-12" aria-hidden="true">
            <div className="h-px w-16 bg-[#E8E1D7]" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#D79B42]">
              Neem Karori Baba
            </span>
            <div className="h-px w-16 bg-[#E8E1D7]" />
          </div>

          <blockquote className="space-y-8">
            <p
              className="font-serif text-[clamp(1.5rem,3.5vw,2.6rem)] font-light text-[#262626] leading-[1.3] italic"
              id="gratitude-heading"
            >
              &ldquo;Much of my journey has been quietly shaped by the life and teachings of
              Neem Karori Baba. His example of unconditional love, humility and
              selfless service continues to inspire the way I practice, teach and live.&rdquo;
            </p>

            <footer>
              <cite className="font-sans text-sm text-[#6D6D6D] not-italic tracking-wide">
                – Yogi Manu
              </cite>
            </footer>
          </blockquote>

          <p className="mt-10 font-sans text-base text-[#6D6D6D] leading-relaxed">
            Rather than seeking extraordinary experiences, Maharaj Ji&apos;s teachings
            remind us to love deeply, serve sincerely, and remember the divine in
            everyday life.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
