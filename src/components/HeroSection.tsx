import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

function HeroSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const AVATARS = [
    { initials: "AK", color: "bg-[#F2A65A]" },
    { initials: "JM", color: "bg-[#6C8EFF]" },
    { initials: "RS", color: "bg-[#57C4A6]" },
    { initials: "PD", color: "bg-[#E86A6A]" },
  ];

  const watermark = "DuooTech";

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden text-[#F5F3EE]">
        {/** Header */}
        <Header />

        {/* ambient grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            WebkitMaskImage:
              "radial-gradient(ellipse 700px 500px at 50% 410px, black 0%, black 30%, transparent 75%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskComposite: "source-in, source-in",
            maskImage:
              "radial-gradient(ellipse 700px 500px at 50% 410px, black 0%, black 30%, transparent 75%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            maskComposite: "intersect, intersect",
          }}
        />

        {/* glow behind the arc */}
        <div
          className="pointer-events-none absolute left-1/2 top-[-150px] h-[320px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.8]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(56,189,248,0.35), rgba(56,189,248,0.08) 45%, transparent 95%)",
          }}
        />

        {/* thin arc line (horizon) */}
        <div
          className="pointer-events-none absolute left-1/2 top-[410px] h-[1080px] w-[1300px] -translate-x-1/2 rounded-[90%]"
          style={{
            borderTop: "1.5px solid rgba(56,189,248,0.85)",
            boxShadow:
              "0 -8px 40px 4px rgba(56,189,248,0.35), 0 -2px 16px rgba(56,189,248,0.5)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 42%, black 58%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 42%, black 58%, transparent 100%)",
          }}
        />

        {/* giant faint watermark */}
        <div
          className="pointer-events-none absolute bottom-[-4%] left-1/2 w-full -translate-x-1/2 select-none whitespace-nowrap text-center font-black leading-none tracking-tight text-white/[0.045]"
          style={{ fontSize: "min(22vw, 320px)" }}
          aria-hidden="true"
        >
          {watermark}
        </div>

        {/* content */}
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:px-10 lg:px-16">
          <div className="flex max-w-6xl flex-col items-center mt-[6rem]">
            {/* headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-3xl font-sans text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Your Idea. <br /> Our Infrastructure.
            </motion.h1>

            {/* subtext */}
            <p className="mt-6 max-w-xl text-balance text-base text-white/60 sm:text-lg">
              We architect and build the SaaS platforms, backend systems, and
              tools that power modern startups — reliable, fast, and ready to
              grow with you.
            </p>

            {/* social proof */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <div className="flex -space-x-3">
                {AVATARS.map((a, i) => (
                  <div
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0E0F13] text-[11px] font-semibold text-[#0E0F13] ${a.color}`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-0.5 sm:items-start">
                <div className="flex gap-0.5 text-[#E8A25A]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M10 1.5l2.6 5.4 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-white/50">
                  Trusted by 10+ businesses accross the India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
