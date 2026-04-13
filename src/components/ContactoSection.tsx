"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";

export default function ContactoSection() {
  return (
    <section id="contacto" className="bg-[#0a0a0a] py-24 px-4 sm:px-6 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[#ff3800] text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Haznos saber
            </p>
            <h2
              className="text-5xl md:text-6xl text-[#f2f0e8] tracking-wider leading-none mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ENCUÉNTRANOS
              <br />
              <span className="text-[#f5e000]">EN TORREÓN</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#141414] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-[#f5e000]" />
                </div>
                <div>
                  <p
                    className="text-[#f2f0e8] font-bold text-sm tracking-wide mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Ubicación
                  </p>
                  <p
                    className="text-[#888880] text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Torreón, Coahuila, México
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#141414] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ExternalLink size={18} className="text-[#f5e000]" />
                </div>
                <div>
                  <p
                    className="text-[#f2f0e8] font-bold text-sm tracking-wide mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Instagram principal
                  </p>
                  <a
                    href="https://www.instagram.com/visual_attack_skateshop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5e000] text-sm hover:underline"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    @visual_attack_skateshop
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#141414] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ExternalLink size={18} className="text-[#ff3800]" />
                </div>
                <div>
                  <p
                    className="text-[#f2f0e8] font-bold text-sm tracking-wide mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Instagram TRC
                  </p>
                  <a
                    href="https://www.instagram.com/visual_attack.trc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff3800] text-sm hover:underline"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    @visual_attack.trc
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="border border-[#2a2a2a] p-8">
              <h3
                className="text-2xl text-[#f2f0e8] tracking-wider mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                MÁNDANOS UN MENSAJE
              </h3>
              {/* TODO: Replace with Formspree form ID when available */}
              <form
                action="mailto:visualattackskateshop@gmail.com"
                method="get"
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-xs text-[#888880] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    className="w-full bg-[#141414] border border-[#2a2a2a] text-[#f2f0e8] px-4 py-3 text-sm focus:outline-none focus:border-[#f5e000] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-xs text-[#888880] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="body"
                    rows={4}
                    required
                    className="w-full bg-[#141414] border border-[#2a2a2a] text-[#f2f0e8] px-4 py-3 text-sm focus:outline-none focus:border-[#f5e000] transition-colors resize-none"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="¿Qué buscas? ¿Tienes alguna duda?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f5e000] text-[#0a0a0a] py-4 text-sm font-bold tracking-widest hover:bg-white transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  ENVIAR →
                </button>
              </form>

              <p
                className="mt-4 text-[#888880] text-xs text-center"
                style={{ fontFamily: "var(--font-body)" }}
              >
                O escríbenos por DM en Instagram, respondemos rápido.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
