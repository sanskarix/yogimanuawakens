import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

const beliefs = [
  "Healing begins with presence.",
  "Practice matters more than perfection.",
  "Devotion is stronger than ego.",
  "Consistency transforms more than intensity.",
  "Peace grows through service.",
  "Stillness is never far away.",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#FCFAF7]">

      {/* ── Part 1: Who is Yogi Manu ─────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left – Portrait */}
          <FadeIn className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden max-w-[520px] mx-auto lg:mx-0">
              <Image
                src="/manu2.jpeg"
                alt="Yogi Manu"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          {/* Right – Bio */}
          <FadeIn delay={0.15} className="lg:pt-8">
            <div className="space-y-6">
              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-light text-[#262626] leading-[1.1]">
                A devotee sharing<br />
                <em className="italic">what practice revealed.</em>
              </h2>

              <p className="font-sans text-base text-[#6D6D6D] leading-[1.9]">
                Years ago I discovered yoga while searching for relief from
                chronic pain. A friend suggested it. I was skeptical. After one
                session, my pain eased. My mind grew quiet. Something shifted.
              </p>

              <p className="font-sans text-base text-[#6D6D6D] leading-[1.9]">
                What began as a search for healing became a journey into
                meditation, mantra, devotion and conscious living. Today I share
                these practices – not as a teacher with answers, but as someone
                who found peace through sincere daily effort.
              </p>

              <p className="font-sans text-base text-[#6D6D6D] leading-[1.9]">
                My path has been quietly shaped by the grace of{" "}
                <span className="text-[#262626]">Neem Karoli Baba</span>.
                His teaching is simple: love everyone. Serve everyone.
                Remember God.
              </p>

              {/* Core beliefs */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-2">
                {beliefs.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-sans text-sm text-[#262626] leading-relaxed"
                  >
                    <span
                      className="mt-[7px] w-1 h-1 rounded-full bg-[#D79B42] shrink-0"
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

      {/* ── Part 2: What is shared ───────────────────────────────────────────── */}
      <div className="bg-[#F8F5EF] border-t border-[#E8E1D7]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left – text */}
            <FadeIn className="order-2 lg:order-1">
              <div className="space-y-6 max-w-[520px]">
                <h3 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-[#262626] leading-[1.12]">
                  Simple practices.<br />A more peaceful life.
                </h3>
                <p className="font-sans text-base text-[#6D6D6D] leading-[1.9]">
                  Everything I share – yoga, breathwork, mantra, kirtan,
                  devotion, spiritual conversation – comes directly from my own
                  practice. There is no performance here. Only an open
                  invitation to explore a quieter, more present way of living.
                </p>
                <p className="font-sans text-base text-[#6D6D6D] leading-[1.9]">
                  You don&apos;t need to be spiritual. You don&apos;t need experience.
                  You only need a sincere beginning.
                </p>

                <div className="pt-1 flex flex-wrap gap-2">
                  {["Yoga", "Breathwork", "Mantra", "Kirtan", "Devotion", "Reflection"].map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs tracking-wider text-[#6D6D6D] border border-[#E8E1D7] rounded-full px-4 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right – image */}
            <FadeIn delay={0.12} className="order-1 lg:order-2">
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
                <Image
                  src="/manu.jpeg"
                  alt="Yogi Manu"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── Part 3: Maharaj Ji ───────────────────────────────────────────────── */}
      <div className="bg-[#FCFAF7] border-t border-[#E8E1D7]">
        <div className="max-w-[760px] mx-auto px-6 lg:px-16 py-20 md:py-28 text-center">
          <FadeIn>
            <div className="flex justify-center gap-4 sm:gap-5 mb-12">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 border-[3px] border-[#E8E1D7]">
                <Image
                  src="/images/034-BRCD2-RT-min.jpg"
                  alt="Neem Karoli Baba"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 border-[3px] border-[#E8E1D7]">
                <Image
                  src="/images/9Maharaj-ji_069_90-min.jpg"
                  alt="Neem Karoli Baba"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="font-sans text-sm tracking-widest uppercase text-[#D79B42] mb-6">
              Neem Karoli Baba – Maharaj Ji
            </p>

            <blockquote className="space-y-5">
              <p className="font-serif text-[clamp(1.3rem,2.8vw,2rem)] font-light text-[#262626] leading-[1.5] italic">
                &ldquo;Love everyone. Serve everyone. Remember God.&rdquo;
              </p>
              <p className="font-sans text-base text-[#6D6D6D] leading-relaxed max-w-[520px] mx-auto">
                Much of my journey has been quietly shaped by Maharaj Ji&apos;s
                life and presence. He is not a theme on this website. He is the
                ground beneath everything I do.
              </p>
              <footer>
                <cite className="font-sans text-sm text-[#6D6D6D] not-italic">– Yogi Manu</cite>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </div>

    </section>
  );
}
