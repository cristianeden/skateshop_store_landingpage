"use client";

import { motion } from "framer-motion";

const categorias = [
  {
    nombre: "Tablas",
    descripcion: "Decks de todas las medidas. Para street, park y bowl.",
    icon: "🛹",
    color: "#f5e000",
  },
  {
    nombre: "Ruedas",
    descripcion: "Duras, blandas, grandes y pequeñas. Para cada terreno.",
    icon: "⚙",
    color: "#ff3800",
  },
  {
    nombre: "Baleros",
    descripcion: "ABEC-7, Bones Reds y más. Rueda rápido, cae bien.",
    icon: "●",
    color: "#f2f0e8",
  },
  {
    nombre: "Lijas",
    descripcion: "Grip tape de calidad. Que tu tabla no se vaya sola.",
    icon: "▦",
    color: "#f5e000",
  },
  {
    nombre: "Ropa",
    descripcion: "Playeras, sudaderas y gorras para el día a día.",
    icon: "◈",
    color: "#ff3800",
  },
  {
    nombre: "Accesorios",
    descripcion: "Trucks, hardware, herramienta, wax y todo lo demás.",
    icon: "⬡",
    color: "#f2f0e8",
  },
  {
    nombre: "Mochilas",
    descripcion: "Para llevar tu deck donde sea sin andar cargándola.",
    icon: "◧",
    color: "#f5e000",
  },
  {
    nombre: "Stickers",
    descripcion: "Marca tu tabla, tu casco, tu vida. Representando.",
    icon: "★",
    color: "#ff3800",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductosSection() {
  return (
    <section id="productos" className="bg-[#0f0f0f] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-[#2a2a2a] pb-8">
          <div>
            <p
              className="text-[#ff3800] text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Lo que tenemos
            </p>
            <h2
              className="text-5xl md:text-7xl text-[#f2f0e8] tracking-wider"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CATÁLOGO
            </h2>
          </div>
          <a
            href="https://www.instagram.com/visual_attack_skateshop/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-[#888880] text-sm tracking-wider hover:text-[#f5e000] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ver todo en Instagram →
          </a>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2a2a2a]"
        >
          {categorias.map((cat) => (
            <motion.div
              key={cat.nombre}
              variants={itemVariants}
              className="bg-[#0f0f0f] p-6 md:p-8 group hover:bg-[#141414] transition-colors cursor-default"
            >
              <div
                className="text-3xl mb-4 transition-transform group-hover:scale-110 duration-200"
                style={{ color: cat.color }}
              >
                {cat.icon}
              </div>
              <h3
                className="text-2xl md:text-3xl text-[#f2f0e8] mb-2 tracking-wider"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {cat.nombre}
              </h3>
              <p
                className="text-[#888880] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {cat.descripcion}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p
            className="text-[#888880] text-sm mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ¿No ves lo que buscas? Pregúntanos directamente.
          </p>
          <a
            href="#contacto"
            className="inline-block border border-[#2a2a2a] text-[#f2f0e8] px-8 py-3 text-sm font-bold tracking-widest hover:border-[#f5e000] hover:text-[#f5e000] transition-all duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            CONTACTAR
          </a>
        </div>
      </div>
    </section>
  );
}
