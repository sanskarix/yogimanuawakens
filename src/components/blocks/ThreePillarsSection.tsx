"use client";
import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

const pillars = [
  {
    id: "yoga",
    label: "Yoga",
    tagline: "Where healing begins.",
    description:
      "Yoga is where my own journey started. Not with flexibility or advanced poses – simply with a desire to live without pain. These practices help you move more freely, breathe more deeply and feel more at home in your body.",
    cta: "Explore the practice",
    href: "#journey",
    image: "/yoga.png",
    imageAlt: "A quiet yoga practice",
  },
  {
    id: "kirtan",
    label: "Kirtan",
    tagline: "Devotion through song.",
    description:
      "Kirtan is shared devotion. A space where voices become one. Joy and prayer often arrive together. You don't need to be a musician. You only need to show up open-hearted.",
    cta: "Listen together",
    href: "#community",
    image: "/kirtan.png",
    imageAlt: "A circle of people singing kirtan",
  },
  {
    id: "teachings",
    label: "Teachings",
    tagline: "Conversations, not instructions.",
    description:
      "The reflections shared here come from practice, not theory. They are honest conversations about awareness, breath, service and what it means to live with a little more presence each day.",
    cta: "Watch a conversation",
    href: "#journey",
    image: "/hero.png",
    imageAlt: "A quiet moment of reflection",
  },
];

export function ThreePillarsSection() {
  return (
    <section
      id="practice"
      className="bg-[#FCFAF7] py-24 md:py-36"
      aria-labelledby="pillars-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header */}
        <FadeIn>
          <div className="max-w-[480px] mb-16 md:mb-20">

            <h2
              id="pillars-heading"
              className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-[#262626] leading-[1.1]"
            >
              Three ways in.
            </h2>
          </div>
        </FadeIn>

        {/* Cards */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          role="list"
          aria-label="The three pillars"
        >
          {pillars.map((p, i) => (
            <li key={p.id}>
              <FadeIn delay={i * 0.12}>
                <article className="group bg-[#F8F5EF] border border-[#E8E1D7] rounded-lg overflow-hidden hover:border-[#D79B42]/40 transition-colors duration-500">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7 space-y-4">
                    <span className="font-sans text-xs tracking-[0.15em] uppercase text-[#D79B42]">
                      {p.label}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-[#262626]">
                      {p.tagline}
                    </h3>
                    <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed">
                      {p.description}
                    </p>
                    <a
                      href={p.href}
                      id={`pillar-cta-${p.id}`}
                      onClick={(e) => { e.preventDefault(); const el = document.querySelector(p.href); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                      className="inline-block font-sans text-sm text-[#262626] border-b border-[#262626] pb-px hover:text-[#D79B42] hover:border-[#D79B42] transition-colors duration-300 mt-2"
                    >
                      {p.cta} →
                    </a>
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
