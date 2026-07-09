"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { useState } from "react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#FCFAF7] py-24 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[760px] mx-auto px-6 lg:px-16">
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-[#262626] leading-[1.1] mb-6">
              Get in touch.
            </h2>
            <p className="font-sans text-base text-[#6D6D6D] leading-relaxed max-w-[480px] mx-auto">
              If you have questions about the practices, or simply want to connect, feel free to reach out. We will get back to you soon.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {status === "success" ? (
            <div className="text-center p-12 bg-[#F8F5EF] border border-[#E8E1D7] rounded-lg">
              <p className="font-serif text-2xl text-[#262626] mb-3">Thank you.</p>
              <p className="font-sans text-sm text-[#6D6D6D]">Your message has been received peacefully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-sans text-xs tracking-widest uppercase text-[#6D6D6D]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b border-[#E8E1D7] py-3 text-[#262626] font-sans text-base focus:outline-none focus:border-[#D79B42] transition-colors duration-300 disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-sans text-xs tracking-widest uppercase text-[#6D6D6D]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b border-[#E8E1D7] py-3 text-[#262626] font-sans text-base focus:outline-none focus:border-[#D79B42] transition-colors duration-300 disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block font-sans text-xs tracking-widest uppercase text-[#6D6D6D]">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  disabled={status === "submitting"}
                  className="w-full bg-transparent border-b border-[#E8E1D7] py-3 text-[#262626] font-sans text-base resize-none focus:outline-none focus:border-[#D79B42] transition-colors duration-300 disabled:opacity-50"
                ></textarea>
              </div>
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center h-12 px-10 font-sans text-xs tracking-widest uppercase bg-[#262626] text-[#FCFAF7] rounded-full hover:bg-[#D79B42] transition-colors duration-500 disabled:opacity-50 disabled:hover:bg-[#262626]"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
