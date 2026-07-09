"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export function SoundToggle() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Hydration guard
  useEffect(() => {
    setMounted(true);
    // Create audio element once on client
    const audio = new Audio("/kirtan.mp3");
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!enabled) {
      // Fade in
      audio.play().catch(() => { });
      fadeVolume(audio, 0, 0.45, 2000);
      setEnabled(true);
    } else {
      // Fade out then pause
      fadeVolume(audio, audio.volume, 0, 800, () => {
        audio.pause();
        audio.currentTime = 0;
      });
      setEnabled(false);
    }
  };

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute top-6 right-6 md:top-8 md:right-12 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Pulsing ripple rings – only shown when sound is OFF */}
        {!enabled && (
          <>
            <PulseRing delay={0} />
            <PulseRing delay={0.9} />
            <PulseRing delay={1.8} />
          </>
        )}

        {/* Button */}
        <button
          id="sound-toggle"
          onClick={handleToggle}
          aria-label={enabled ? "Mute background kirtan" : "Enable background kirtan"}
          aria-pressed={enabled}
          className={[
            "relative z-10 flex items-center gap-3 rounded-full",
            "font-sans text-xs tracking-widest uppercase transition-all duration-500",
            enabled
              ? "h-9 px-5 bg-white/10 border border-white/20 text-white/70 backdrop-blur-sm"
              : "h-11 px-6 bg-[#D79B42] text-[#1a1208] shadow-[0_4px_24px_rgba(215,155,66,0.45)] hover:bg-[#e0a84a]",
          ].join(" ")}
        >
          <AnimatePresence mode="wait" initial={false}>
            {enabled ? (
              <motion.span
                key="on"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Volume2 size={12} strokeWidth={2} />
                Kirtan playing
              </motion.span>
            ) : (
              <motion.span
                key="off"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2.5"
              >
                <VolumeX size={14} strokeWidth={2} />
                Enable kirtan
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
}

/* Animated ripple ring */
function PulseRing({ delay }: { delay: number }) {
  return (
    <motion.span
      className="absolute inset-0 rounded-full border border-[#FCFAF7]/30"
      style={{ margin: "-5px" }}
      animate={{
        scale: [1, 1.8],
        opacity: [0.6, 0],
      }}
      transition={{
        duration: 2.4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      aria-hidden="true"
    />
  );
}

/* Utility: linear volume ramp */
function fadeVolume(
  audio: HTMLAudioElement,
  from: number,
  to: number,
  durationMs: number,
  onComplete?: () => void
) {
  const steps = 30;
  const stepMs = durationMs / steps;
  const delta = (to - from) / steps;
  let current = from;
  let step = 0;

  const id = setInterval(() => {
    step++;
    current = Math.min(1, Math.max(0, current + delta));
    audio.volume = current;
    if (step >= steps) {
      clearInterval(id);
      onComplete?.();
    }
  }, stepMs);
}
