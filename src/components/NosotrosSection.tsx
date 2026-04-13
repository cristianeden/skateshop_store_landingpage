"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2,118", label: "Posts" },
  { value: "2,351", label: "Seguidores" },
  { value: "+10", label: "Años en Torreón" },
];

export default function NosotrosSection() {
  return (
    <section id="nosotros" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Statement */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-[#ff3800] text-xs font-bold tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Quiénes somos
          </p>
          <h2
            className="text-5xl md:text-6xl text-[#f2f0e8] leading-none tracking-wider mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            LA SKATESHOP
            <br />
            <span className="text-[#f5e000]">QUE PATINA</span>
          </h2>
          <p
            className="text-[#888880] text-base leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            No somos solo una tienda. Somos parte de la comunidad skate de
            Torreón desde que empezó a formarse. Conocemos el spot, conocemos
            los trucos, y conocemos lo que tu setup necesita para rodar bien.
          </p>
          <p
            className="text-[#888880] text-base leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Visual Attack nació en Torreón, Coahuila. Seguimos aquí. Los mismos
            de siempre, representando la cultura skate del norte de México.
          </p>

          {/* Stats */}
          <div className="flex gap-8 border-t border-[#2a2a2a] pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl text-[#f5e000] tracking-wider"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-[#888880] text-xs tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Big quote */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="border border-[#2a2a2a] p-10 relative">
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-8 h-8 bg-[#f5e000]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#ff3800]" />

            <p
              className="text-[#888880] text-6xl leading-none mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              "
            </p>
            <blockquote
              className="text-2xl md:text-3xl text-[#f2f0e8] leading-tight tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SOMOS LOS MISMOS DE SIEMPRE. SOMOS VISUAL ATTACK.
            </blockquote>
            <p
              className="mt-6 text-sm text-[#ff3800] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              @visual_attack_skateshop
            </p>
          </div>

          {/* Community tag */}
          <div className="mt-6 flex gap-3 flex-wrap">
            {["#skateboarding", "#torreón", "#laVAndals", "#skatemx"].map(
              (tag) => (
                <span
                  key={tag}
                  className="border border-[#2a2a2a] px-3 py-1 text-xs text-[#888880] tracking-wide"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
