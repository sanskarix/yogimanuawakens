import { FadeIn } from "@/components/shared/FadeIn";

const beliefs = [
  "Healing begins with presence.",
  "Practice matters more than perfection.",
  "Devotion is stronger than ego.",
  "Consistency transforms more than intensity.",
  "Peace grows through service.",
  "The breath is always available.",
  "Stillness is never far away.",
  "We are more connected than we often realize.",
];

export function DailyPracticeSection() {
  return (
    <section
      id="daily-practice"
      className="bg-[#F8F5EF] py-24 md:py-36"
      aria-labelledby="daily-practice-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: Text */}
          <FadeIn>
            <div className="space-y-8">
              <div>

                <h2
                  id="daily-practice-heading"
                  className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-[#262626] leading-[1.1]"
                >
                  You don&apos;t need hours each day.
                </h2>
              </div>
              <p className="font-sans text-base text-[#6D6D6D] leading-relaxed">
                You only need a sincere beginning. Ten minutes of conscious
                breathing. A few moments of movement. A little stillness.
                Practiced consistently, these small moments quietly reshape an
                entire life.
              </p>
              <p className="font-serif text-xl italic text-[#262626]">
                Consistency matters more than intensity.
              </p>
            </div>
          </FadeIn>

          {/* Right: Core Beliefs */}
          <FadeIn delay={0.15}>
            <div>
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#6D6D6D] mb-8">
                Core Beliefs
              </p>
              <ul className="space-y-5" aria-label="Core beliefs">
                {beliefs.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 font-sans text-base text-[#262626] leading-relaxed"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D79B42] shrink-0"
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
