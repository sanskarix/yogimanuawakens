import { FadeIn } from "@/components/shared/FadeIn";
import { Sparkles, Calendar, ClipboardCheck, Dumbbell, ShieldCheck } from "lucide-react";

const inclusions = [
  {
    icon: ShieldCheck,
    title: "Certified Instruction",
    description: "Experienced, fully insured professional yoga guidance focused on safety and restoration.",
  },
  {
    icon: Dumbbell,
    title: "Premium Props",
    description: "We provide high-quality yoga mats, blocks, and straps for all participants.",
  },
  {
    icon: ClipboardCheck,
    title: "Setup & Cleanup",
    description: "Complete preparation of the practice space beforehand and clearing it afterward.",
  },
  {
    icon: Sparkles,
    title: "Mat Maintenance",
    description: "Strict post-session cleaning and sanitization of all mats and equipment.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Class programming structured to align with your seasonal guest volumes and hours.",
  },
];

export function WhatsIncluded() {
  return (
    <section className="bg-[#FCFAF7] py-16 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <FadeIn>
          <div className="max-w-[560px] mb-16 md:mb-24">
            <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#5E7052] mb-3 font-semibold">
              The Service
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-light text-[#262626] leading-[1.15]">
              Everything provided. <br />
              <em className="italic">Effortlessly managed.</em>
            </h2>
          </div>
        </FadeIn>

        {/* List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {inclusions.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="space-y-4">
                  <div className="text-[#5E7052]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg font-light text-[#262626] border-b border-[#E8E1D7]/60 pb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13.5px] text-[#6D6D6D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
