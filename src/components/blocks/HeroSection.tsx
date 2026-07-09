"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SoundToggle } from "@/components/shared/SoundToggle";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image with very slow scale */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/banner.png"
          alt="Yogi Manu"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay – strong at bottom, lighter at top so image still reads */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0904]/92 via-[#0d0904]/55 to-[#0d0904]/15" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[720px]">


          {/* Headline */}
          <motion.h1
            className="font-serif text-[clamp(2.8rem,6.5vw,5.2rem)] font-light text-white leading-[1.06] mb-8 tracking-tight"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Walking the Path of Yoga,{" "}
            <em className="font-light italic">Devotion</em>{" "}
            &amp; Presence.
          </motion.h1>

          {/* Identity line */}
          <motion.div
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            {["Yoga", "Kirtan", "Spirituality"].map((label, i) => (
              <>
                <span key={label} className="font-sans text-[11px] tracking-[0.22em] uppercase text-white/60">
                  {label}
                </span>
                {i < 2 && <span className="text-[#D79B42]/50 text-xs" aria-hidden="true">·</span>}
              </>
            ))}
          </motion.div>
          <motion.p
            className="font-sans text-base md:text-lg text-white/85 leading-relaxed mb-10 max-w-[520px]"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            My journey began with pain.
            <br />
            Yoga became the doorway. Breath became the medicine.
            <br className="hidden sm:block" />
            These practices changed my life. I share them simply, with love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <a
              href="#practice"
              id="hero-watch-teachings"
              onClick={(e) => { e.preventDefault(); document.querySelector('#practice')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center h-10 px-6 font-sans text-xs tracking-widest uppercase bg-[#D79B42] text-[#262626] rounded-full hover:bg-[#c48c38] transition-colors duration-300"
            >
              Watch Teachings
            </a>
            <a
              href="#about"
              id="hero-begin-journey"
              onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center h-10 px-6 font-sans text-xs tracking-widest uppercase border border-[#FCFAF7]/50 text-[#FCFAF7] rounded-full hover:bg-[#FCFAF7]/10 transition-colors duration-300"
            >
              Begin Your Journey
            </a>
          </motion.div>
        </div>
      </div>

      {/* Sound Toggle – top-right corner */}
      <SoundToggle />

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#FCFAF7]/50 rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="w-px h-12 bg-[#FCFAF7]/30" />
      </motion.div>
    </section>
  );
}
