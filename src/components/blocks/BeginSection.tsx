"use client";
import { FadeIn } from "@/components/shared/FadeIn";

const pathways = [
  {
    id: "heal",
    intent: "I Want to Heal",
    description:
      "Gentle yoga, breathwork, and simple practices to ease physical and emotional pain.",
    href: "#journey",
    accent: "#5E7052",
  },
  {
    id: "peace",
    intent: "I Want More Peace",
    description:
      "Meditation, mantra, and reflections to quiet the restless mind and rediscover stillness.",
    href: "#journey",
    accent: "#8B6A4D",
  },
  {
    id: "devotion",
    intent: "I Feel Drawn to Devotion",
    description:
      "Kirtan, spiritual teachings, and the path of bhakti – practice rooted in love and surrender.",
    href: "#community",
    accent: "#D79B42",
  },
];

export function BeginSection() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="begin"
      className="bg-[#FCFAF7] py-24 md:py-36 border-t border-[#E8E1D7]"
      aria-labelledby="begin-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <FadeIn>
          <div className="max-w-[480px] mb-16">

            <h2
              id="begin-heading"
              className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-[#262626] leading-[1.1]"
            >
              Everyone arrives from a different place.
            </h2>
          </div>
        </FadeIn>

        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Starting points for your practice"
        >
          {pathways.map((p, i) => (
            <li key={p.id}>
              <FadeIn delay={i * 0.12}>
                <a
                  href={p.href}
                  id={`begin-${p.id}`}
                  onClick={(e) => handleClick(e, p.href)}
                  className="group block bg-[#F8F5EF] border border-[#E8E1D7] rounded-lg p-8 hover:border-[#D79B42]/40 transition-all duration-500 h-full"
                >
                  <div
                    className="w-8 h-0.5 mb-6 transition-all duration-500 group-hover:w-12"
                    style={{ backgroundColor: p.accent }}
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-2xl font-light text-[#262626] mb-4 leading-snug">
                    {p.intent}
                  </h3>
                  <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed mb-6">
                    {p.description}
                  </p>
                  <span className="font-sans text-xs tracking-wider uppercase text-[#6D6D6D] group-hover:text-[#262626] transition-colors duration-300">
                    Explore →
                  </span>
                </a>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
