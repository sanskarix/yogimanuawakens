"use client";

import { useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { motion } from "framer-motion";

// ─── Configure Cal.com Booking Links here ──────────────────────────────
const CAL_USERNAME = "yogimanu"; // Your Cal.com username
const CAL_SLUGS = {
  single: "single-card",      // Event type slug for $25 Single Card
  fourCard: "four-card-spread", // Event type slug for $50 Four Card Spread
  video: "recorded-reading",  // Event type slug for $85 Recorded Reading (originally $54)
  live: "live-session",       // Event type slug for $150 Live Session (originally $108)
};
// ───────────────────────────────────────────────────────────────────────

const offerings = [
  {
    id: "single",
    title: "Single Card Pull",
    price: "$25",
    duration: "Delivered in 24 hours",
    subtitle: "A direct answer to one sincere question.",
    description:
      "Share a focused question. I sit in mantra, hold your intention, and pull one card. You receive a thoughtful written reading directly in your inbox.",
    features: [
      "1 focused question",
      "Sincere mantra intention",
      "Detailed typed reading",
      "Delivered within 24 hours",
    ],
    cta: "Request Reading",
    calLink: `${CAL_USERNAME}/${CAL_SLUGS.single}`,
    featured: false,
  },
  {
    id: "fourCard",
    title: "Four Card Spread",
    price: "$50",
    duration: "Delivered in 48 hours",
    subtitle: "Spiritual guidance.",
    description:
      "Share your situation or question. I sit in mantra, pull 3 tarot cards and 1 oracle card for deeper spiritual counsel. You receive a photo of your cards and a typed reading.",
    features: [
      "3 Tarot cards",
      "1 Oracle card (Spiritual guidance)",
      "Mantra practice & intention holding",
      "Photo of the drawn cards",
      "Typed interpretation",
      "Delivered within 48 hours",
    ],
    cta: "Book Spread",
    calLink: `${CAL_USERNAME}/${CAL_SLUGS.fourCard}`,
    featured: false,
  },
  {
    id: "video",
    title: "Recorded Reading",
    price: "$85",
    duration: "Delivered in 72 hours",
    subtitle: "A personal reading recorded in sacred space.",
    description:
      "I sit in quiet practice and chant on your behalf. I pull around 6 cards to explore your situation deeply, recording a personal video explaining the spread and messages.",
    features: [
      "Chanting and intention holding",
      "Around 6 cards drawn",
      "Private video recording (20-30 min)",
      "Deep card interpretation & advice",
      "Delivered within 72 hours",
    ],
    cta: "Book Video",
    calLink: `${CAL_USERNAME}/${CAL_SLUGS.video}`,
    featured: false,
  },
  {
    id: "live",
    title: "Live Session",
    price: "$150",
    duration: "45 Minutes · Live Video",
    subtitle: "A shared space of mantra and deep reflection.",
    description:
      "We sit together virtually. The session opens with sacred chanting. As the mind settles, cards are drawn in real-time with space for open conversation, guidance, and questions.",
    features: [
      "45-minute private video call",
      "Opening mantra & grounding",
      "Real-time card selection",
      "Q&A and open discussion",
    ],
    badge: "Most Immersive",
    cta: "Book Live",
    calLink: `${CAL_USERNAME}/${CAL_SLUGS.live}`,
    featured: true,
  },
];

export function TarotOptions() {
  // Initialize Cal.com Embed script
  useEffect(() => {
    (function (C: any, A: any, L: any) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const c = (C.Cal =
        C.Cal ||
        function () {
          const a = c as any;
          a.q = a.q || [];
          for (let i = 0; i < arguments.length; i++) {
            p(a, arguments[i]);
          }
        });
      c.sn = "v1";
      if (document.getElementById("cal-embed-script")) return;
      const s = A.createElement("script");
      s.id = "cal-embed-script";
      s.src = "https://app.cal.com/embed/embed.js";
      s.async = true;
      const entries = A.getElementsByTagName("script")[0];
      entries?.parentNode?.insertBefore(s, entries);
    })(window, document, ["script"]);

    // Set up Cal overlay preferences once loaded
    const initCal = () => {
      const Cal = (window as any).Cal;
      if (Cal) {
        Cal("init", { origin: "https://cal.com" });
        Cal("ui", {
          styles: {
            branding: {
              brandColor: "#262626",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    };

    // Attempt immediately and attach to onload as fallback
    initCal();
    const scriptEl = document.getElementById("cal-embed-script");
    if (scriptEl) {
      scriptEl.onload = initCal;
    }
  }, []);

  return (
    <section className="bg-[#FCFAF7] py-24 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-20 md:mb-28">
            <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#D79B42] mb-3">
              Offerings
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-light text-[#262626] leading-[1.1] tracking-tight mb-5">
              Four ways to connect.
            </h2>
            <p className="font-sans text-base text-[#6D6D6D] max-w-[480px] mx-auto leading-relaxed">
              Choose the format that best supports your schedule, your questions, and your journey.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1280px] mx-auto items-stretch">
          {offerings.map((offering, i) => (
            <FadeIn key={offering.id} delay={i * 0.12}>
              <motion.div
                whileHover={{
                  y: -6,
                  borderColor: offering.featured ? "#D79B42" : "rgba(215, 155, 66, 0.5)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)"
                }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className={[
                  "relative flex flex-col h-full rounded-[32px] p-8 md:p-10 border",
                  offering.featured
                    ? "bg-[#262626] border-[#262626] text-[#FCFAF7] xl:scale-[1.03]"
                    : "bg-white/40 backdrop-blur-md border-[#E8E1D7] text-[#262626]",
                ].join(" ")}
              >
                {/* Popular/Featured Badge */}
                {offering.featured && offering.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D79B42] text-[#1a1208] text-[9px] tracking-[0.2em] uppercase font-semibold px-4 py-1.5 rounded-full shadow-sm">
                    {offering.badge}
                  </span>
                )}

                {/* Card Title & Price Header */}
                <div className="border-b border-[#E8E1D7]/20 pb-6 mb-8 text-center">
                  <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D79B42] mb-3 font-semibold">
                    {offering.title}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-serif text-5xl md:text-6xl font-light tracking-tight">
                      {offering.price}
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-[#D79B42] mt-2 tracking-wider">
                    {offering.duration}
                  </p>
                </div>

                {/* Package description */}
                <div className="flex-1 flex flex-col gap-6">
                  <div className="space-y-3">
                    <p className="font-serif text-lg italic leading-snug">
                      {offering.subtitle}
                    </p>
                    <p className={[
                      "font-sans text-sm leading-relaxed",
                      offering.featured ? "text-[#FCFAF7]/70" : "text-[#6D6D6D]"
                    ].join(" ")}>
                      {offering.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="pt-4 border-t border-[#E8E1D7]/10">
                    <ul className="space-y-3" role="list">
                      {offering.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-3 font-sans text-xs">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: "#D79B42" }}
                            aria-hidden="true"
                          />
                          <span className={offering.featured ? "text-[#FCFAF7]/80" : "text-[#6D6D6D]"}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Button (Triggers Cal.com modal) */}
                <div className="pt-10">
                  <motion.button
                    data-cal-link={offering.calLink}
                    data-cal-config='{"layout":"month_view"}'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                    className={[
                      "flex items-center justify-center w-full min-h-[48px] py-3.5 px-4 rounded-2xl font-sans text-xs tracking-wider uppercase font-semibold cursor-pointer transition-colors duration-200",
                      offering.featured
                        ? "bg-[#D79B42] text-[#1a1208] hover:bg-[#c08a38] hover:shadow-[0_8px_24px_rgba(215,155,66,0.35)]"
                        : "bg-[#262626] text-[#FCFAF7] hover:bg-[#D79B42] hover:text-[#1a1208] hover:shadow-[0_8px_24px_rgba(38,38,38,0.15)]",
                    ].join(" ")}
                  >
                    {offering.cta}
                  </motion.button>
                </div>

              </motion.div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

