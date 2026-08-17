"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { motion } from "framer-motion";

export function OnsiteHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-[#FCFAF7] overflow-hidden pt-32 pb-20">
      {/* Decorative center line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#E8E1D7] -translate-x-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <FadeIn>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#262626] leading-[1.1] tracking-tight mb-8">
            Bring restorative wellness <br />
            directly to your <em className="italic">property</em>.
          </h1>
          <p className="font-sans text-base md:text-lg text-[#6D6D6D] leading-relaxed max-w-[580px] mx-auto mb-10">
            Professional yoga instruction, equipment setup, and tailored programs for premium hotels, residential communities, and workplaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => document.getElementById("property-inquiry")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full font-sans text-xs tracking-wider uppercase font-semibold bg-[#262626] text-[#FCFAF7] hover:bg-[#5E7052] transition-colors duration-500 cursor-pointer"
            >
              Partner With Us
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("program-details")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full font-sans text-xs tracking-wider uppercase font-semibold border border-[#E8E1D7] text-[#262626] hover:bg-[#F8F5EF] transition-colors duration-500 cursor-pointer"
            >
              Explore Program
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
