import { FadeIn } from "@/components/shared/FadeIn";
import Image from "next/image";

export function OnsiteConcept() {
  return (
    <section className="bg-[#F8F5EF] py-16 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <FadeIn>
            <div className="space-y-8 max-w-[520px]">
              <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#5E7052] font-semibold">
                The Concept
              </span>
              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-light text-[#262626] leading-[1.1] tracking-tight">
                Grounded wellness <br />
                <em className="italic">where you are.</em>
              </h2>
              <div className="space-y-6">
                <p className="font-sans text-base text-[#6D6D6D] leading-[1.9]">
                  Travel and modern living often disconnect us from our bodies. Onsite Yoga &amp; Restore brings professionally guided yoga directly to hotels, residential communities, and workplaces.
                </p>
                <p className="font-sans text-base text-[#6D6D6D] leading-[1.9]">
                  We eliminate the friction of travel by managing the entire experience. By providing premium mats, equipment, setups, and post-session cleanups, we create an effortless space for physical ease and mental clarity.
                </p>
                <p className="font-sans text-base text-[#6D6D6D] leading-[1.9]">
                  Whether recovering from a long flight, finding stillness in a busy workday, or building connection with neighbors, we offer a quiet haven of presence without needing to leave the property.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] rounded-3xl overflow-hidden max-w-[520px] mx-auto lg:mx-0 shadow-sm border border-[#E8E1D7]">
              <Image
                src="/yoga2.jpeg"
                alt="Restorative onsite yoga session"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}
