"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const eventos = [
  {
    nombre: "LIBRE BOWL",
    tipo: "Competencia",
    descripcion:
      "El clásico bowl abierto de Visual Attack. Ruedas libres, nivel libre, todos bienvenidos. ¿Tienes tabla? Entra.",
    lugar: "Torreón, Coahuila",
    estado: "Recurrente",
    color: "#f5e000",
  },
  {
    nombre: "LA VANDALS SESSION",
    tipo: "Sesión",
    descripcion:
      "Sesiones de skate con la crew. Spots locales, nivel real. Sigue las stories para saber cuándo es la próxima.",
    lugar: "Spots de Torreón",
    estado: "Próximamente",
    color: "#ff3800",
  },
  {
    nombre: "SKATE CONTEST NORTE",
    tipo: "Evento",
    descripcion:
      "Competencias regionales de skateboarding. Visual Attack siempre presente representando la escena del norte.",
    lugar: "Norte de México",
    estado: "Anual",
    color: "#f2f0e8",
  },
];

export default function EventosSection() {
  return (
    <section id="eventos" className="bg-[#0f0f0f] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[#ff3800] text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            En la calle y en el bowl
          </p>
          <h2
            className="text-5xl md:text-7xl text-[#f2f0e8] tracking-wider"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            EVENTOS
          </h2>
        </div>

        {/* Event list */}
        <div className="space-y-px bg-[#2a2a2a]">
          {eventos.map((evento, i) => (
            <motion.div
              key={evento.nombre}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f0f0f] p-8 md:p-10 group hover:bg-[#141414] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-3 py-1"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: evento.color,
                        border: `1px solid ${evento.color}`,
                      }}
                    >
                      {evento.tipo}
                    </span>
                    <span
                      className="text-xs text-[#888880] tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {evento.estado}
                    </span>
                  </div>
                  <h3
                    className="text-3xl md:text-4xl text-[#f2f0e8] tracking-wider mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {evento.nombre}
                  </h3>
                  <p
                    className="text-[#888880] text-sm leading-relaxed max-w-xl"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {evento.descripcion}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#888880]">
                  <MapPin size={14} />
                  <span
                    className="text-sm tracking-wide"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {evento.lugar}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p
            className="text-[#888880] text-sm mb-1"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Fechas exactas en Instagram.
          </p>
          <a
            href="https://www.instagram.com/visual_attack_skateshop/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5e000] text-sm font-bold tracking-widest hover:underline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            @visual_attack_skateshop →
          </a>
        </div>
      </div>
    </section>
  );
}
