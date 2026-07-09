import { FadeIn } from "@/components/shared/FadeIn";

const offerings = [
  {
    id: "live",
    title: "Live Session",
    subtitle: "A real-time, shared space of mantra and reflection.",
    description: "We sit together virtually. The session opens with sacred chanting to ground the space. As the mantra deepens, the cards are pulled in real-time. We discuss the revelations and you have space to ask questions.",
    duration: "45 Minutes",
    price: "$108",
    cta: "Book Live Session",
    href: "mailto:contact@yogimanu.com?subject=Booking: Live Tarot Session",
  },
  {
    id: "video",
    title: "Recorded Reading",
    subtitle: "For when time or distance prevents us from meeting.",
    description: "I will sit in quiet practice and chant on your behalf. I will pull the cards while holding your intention, and record a private, in-depth video of the entire session and its conclusion for you to keep.",
    duration: "Delivered in 48 hours",
    price: "$54",
    cta: "Request Video Reading",
    href: "mailto:contact@yogimanu.com?subject=Booking: Recorded Tarot Reading",
  }
];

export function TarotOptions() {
  return (
    <section className="bg-[#FCFAF7] py-24 md:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-[#262626] leading-[1.1] mb-4">
              Two ways to connect.
            </h2>
            <p className="font-sans text-base text-[#6D6D6D] max-w-[480px] mx-auto">
              Choose the format that best supports your schedule and your journey.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[960px] mx-auto">
          {offerings.map((offering, i) => (
            <FadeIn key={offering.id} delay={i * 0.15}>
              <div className="flex flex-col h-full p-8 md:p-12 bg-[#F8F5EF] border border-[#E8E1D7] rounded-xl text-center hover:border-[#D79B42]/40 transition-colors duration-500">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl text-[#262626] mb-2">{offering.title}</h3>
                    <p className="font-sans text-sm text-[#D79B42] tracking-widest uppercase">{offering.price} &middot; {offering.duration}</p>
                  </div>
                  
                  <p className="font-serif text-lg italic text-[#262626]">
                    {offering.subtitle}
                  </p>
                  
                  <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed">
                    {offering.description}
                  </p>
                </div>

                <div className="pt-10">
                  <a
                    href={offering.href}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-sans text-xs tracking-widest uppercase bg-[#262626] text-[#FCFAF7] rounded-full hover:bg-[#D79B42] transition-colors duration-500"
                  >
                    {offering.cta}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
