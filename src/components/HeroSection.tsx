"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background texture: diagonal stripes */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #f5e000 0, #f5e000 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Accent bar left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f5e000]" />

      {/* Red accent block */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 right-8 md:right-24 w-2 h-32 bg-[#ff3800] origin-top"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-0 grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#ff3800] text-sm font-bold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Torreón, Coahuila — México
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl md:text-9xl leading-none tracking-widest text-[#f2f0e8] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            VISUAL
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl md:text-9xl leading-none tracking-widest text-[#f5e000] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ATTACK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg text-[#888880] mb-10 max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Somos los mismos de siempre. La skateshop que patina. Tablas, ruedas,
            baleros, ropa y todo lo que tu setup necesita.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#productos"
              className="inline-flex items-center gap-2 bg-[#f5e000] text-[#0a0a0a] px-8 py-4 font-bold tracking-wider hover:bg-white transition-all duration-200 text-sm group"
              style={{ fontFamily: "var(--font-body)" }}
            >
              VER CATÁLOGO
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#f2f0e8] px-8 py-4 font-bold tracking-wider hover:border-[#f5e000] hover:text-[#f5e000] transition-all duration-200 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ENCUÉTRANOS
            </a>
          </motion.div>
        </div>

        {/* Visual side — abstract skate deck shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden md:flex items-center justify-center"
        >
          {/* Main deck shape */}
          <div className="relative w-48 h-[420px]">
            <div
              className="absolute inset-0 bg-[#f5e000]"
              style={{ borderRadius: "80px 80px 70px 70px" }}
            />
            <div
              className="absolute inset-3 bg-[#0a0a0a] flex flex-col items-center justify-center gap-4"
              style={{ borderRadius: "72px 72px 62px 62px" }}
            >
              <span
                className="text-[#f5e000] text-5xl tracking-widest writing-mode-vertical"
                style={{
                  fontFamily: "var(--font-heading)",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  letterSpacing: "0.2em",
                }}
              >
                VISUAL ATTACK
              </span>
            </div>
          </div>

          {/* Floating accent deck */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-12 w-24 h-[200px]"
          >
            <div
              className="w-full h-full bg-[#ff3800]"
              style={{ borderRadius: "40px 40px 35px 35px" }}
            />
          </motion.div>

          {/* Small background deck */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-4 bottom-8 w-20 h-[160px] opacity-30"
          >
            <div
              className="w-full h-full bg-[#f2f0e8]"
              style={{ borderRadius: "35px 35px 30px 30px" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#f5e000] py-2 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="text-[#0a0a0a] text-sm font-bold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              VISUAL ATTACK SKATESHOP · TORREÓN, COAHUILA ·
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
