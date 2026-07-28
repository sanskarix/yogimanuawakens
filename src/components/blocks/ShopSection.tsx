import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

const categories = [
  {
    id: "yoga",
    label: "Yoga & Props",
    tagline: "Tools that support the practice.",
    products: [
      {
        id: "mat",
        name: "Manduka PRO Yoga Mat",
        description: "The mat I keep coming back to. Dense, grippy, built to last years of daily practice.",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=600",
        objectPosition: "object-top",
        href: "https://www.amazon.com/s?k=manduka+pro+yoga+mat",
      },
      {
        id: "blocks",
        name: "Cork Yoga Blocks (Set of 2)",
        description: "Natural cork gives you the stability and earth-connection that foam simply can't match.",
        image: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&q=80&w=600",
        objectPosition: "object-center",
        href: "https://www.amazon.com/s?k=cork+yoga+blocks",
      },
      {
        id: "strap",
        name: "Yoga Strap with D-Ring",
        description: "Simple, durable, and one of the most underrated props in a home practice.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
        objectPosition: "object-top",
        href: "https://www.amazon.com/s?k=yoga+strap+d-ring",
      },
    ],
  },
  {
    id: "meditation",
    label: "Meditation",
    tagline: "Create the conditions for stillness.",
    products: [
      {
        id: "cushion",
        name: "Zafu Meditation Cushion",
        description: "Elevates the hips, supports the spine. A proper seat changes everything about sitting practice.",
        image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=600",
        objectPosition: "object-center",
        href: "https://www.amazon.com/s?k=zafu+meditation+cushion",
      },
      {
        id: "bowl",
        name: "Tibetan Singing Bowl",
        description: "Hand-hammered, resonant, and instantly grounding. A beautiful way to open or close a session.",
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600",
        objectPosition: "object-center",
        href: "https://www.amazon.com/s?k=tibetan+singing+bowl",
      },
      {
        id: "mala",
        name: "108-Bead Mala (Rudraksha)",
        description: "Used for japa – mantra repetition. Rudraksha beads carry a long tradition in yogic practice.",
        image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?auto=format&fit=crop&q=80&w=600",
        objectPosition: "object-center",
        href: "https://www.amazon.com/s?k=rudraksha+mala+108",
      },
    ],
  },
  {
    id: "tarot",
    label: "Tarot Decks",
    tagline: "Decks I return to in my own practice.",
    products: [
      {
        id: "rider-waite",
        name: "Rider-Waite Tarot",
        description: "The foundation. Rich imagery, universally understood. Where most readings begin – and a great place to start.",
        image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600",
        objectPosition: "object-center",
        href: "https://www.amazon.com/s?k=rider+waite+tarot+deck",
      },
      {
        id: "osho-zen",
        name: "Osho Zen Tarot",
        description: "Rooted in Zen awareness rather than fortune-telling. A reflective deck that speaks to presence and consciousness.",
        image: "https://images.unsplash.com/photo-1508881598441-324f3974990b?auto=format&fit=crop&q=80&w=600",
        objectPosition: "object-top",
        href: "https://www.amazon.com/s?k=osho+zen+tarot",
      },
      {
        id: "thoth",
        name: "Thoth Tarot Deck",
        description: "Deeper symbolism, astrological and Kabbalistic layers. A beautiful deck for those ready to go further.",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600",
        objectPosition: "object-top",
        href: "https://www.amazon.com/s?k=thoth+tarot+deck",
      },
    ],
  },
];

export function ShopSection() {
  return (
    <div className="bg-[#FCFAF7]">
      {categories.map((cat, ci) => (
        <section
          key={cat.id}
          id={`shop-${cat.id}`}
          className={[
            "py-20 md:py-28",
            ci > 0 ? "border-t border-[#E8E1D7]" : "",
          ].join(" ")}
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
            {/* Category Header */}
            <FadeIn>
              <div className="mb-12 md:mb-16">
                <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#D79B42] mb-3">
                  {cat.label}
                </span>
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-[#262626] leading-[1.1]">
                  {cat.tagline}
                </h2>
              </div>
            </FadeIn>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cat.products.map((product, pi) => (
                <FadeIn key={product.id} delay={pi * 0.1}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    id={`shop-${cat.id}-${product.id}`}
                    className="group flex flex-col h-full bg-[#F8F5EF] border border-[#E8E1D7] rounded-2xl overflow-hidden hover:border-[#D79B42]/50 hover:shadow-md transition-all duration-500"
                    aria-label={`View ${product.name}`}
                  >
                    {/* Product Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={[
                          "object-cover transition-transform duration-700 group-hover:scale-[1.04]",
                          product.objectPosition,
                        ].join(" ")}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col flex-1 p-6 gap-3">
                      <h3 className="font-serif text-lg font-light text-[#262626] leading-snug group-hover:text-[#D79B42] transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed flex-1">
                        {product.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 pt-3 font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B6A4D] group-hover:text-[#D79B42] transition-colors duration-300">
                        <span>View Product</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Affiliate Disclaimer */}
      <div className="border-t border-[#E8E1D7] py-8">
        <p className="font-sans text-[11px] text-[#6D6D6D]/60 text-center max-w-[640px] mx-auto px-6 leading-relaxed">
          Some links on this page are affiliate links. If you purchase through them, I may earn a small commission at no extra cost to you. I only recommend things I genuinely use or believe in.
        </p>
      </div>
    </div>
  );
}
