import { FadeIn } from "@/components/shared/FadeIn";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Elevate the Guest Experience",
    description: "Provide travelers with an unexpected, thoughtful touch that shows a commitment to their well-being.",
  },
  {
    title: "Distinctive Wellness Amenity",
    description: "Differentiate your property by offering tailored, onsite restorative yoga that stands out from typical gyms.",
  },
  {
    title: "Convenient Relaxation",
    description: "Guests can participate in professional sessions right on the property–no transport or off-property bookings required.",
  },
  {
    title: "Memorable Hospitality",
    description: "Create positive memories and unique experiences that guests will associate with their stay and recommend to others.",
  },
  {
    title: "Flexible Scheduling",
    description: "Align class timings with guest needs, from early morning rises to evening winding-down sessions.",
  },
  {
    title: "Seamless Integration",
    description: "We handle mats, setup, cleanup, and maintenance, making it completely hands-off for your staff.",
  },
];

export function WhyHotels() {
  return (
    <section className="bg-[#F8F5EF] py-16 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <FadeIn>
          <div className="max-w-[620px] mb-16 md:mb-24">
            <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#5E7052] mb-3 font-semibold">
              The Value
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-light text-[#262626] leading-[1.15]">
              Why properties offer <br />
              <em className="italic">onsite restorative yoga.</em>
            </h2>
          </div>
        </FadeIn>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.1}>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#5E7052]/10 text-[#5E7052] shrink-0">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-light text-[#262626]">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
