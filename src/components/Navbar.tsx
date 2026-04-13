"use client";

import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";

const links = [
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Eventos", href: "#eventos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#2a2a2a]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="font-heading text-2xl text-[#f5e000] tracking-widest group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            VISUAL ATTACK
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wider text-[#888880] hover:text-[#f5e000] transition-colors uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.instagram.com/visual_attack_skateshop/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#f5e000] text-[#0a0a0a] px-4 py-2 text-sm font-bold tracking-wide hover:bg-white transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <ExternalLink size={14} />
              Instagram
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#f2f0e8] hover:text-[#f5e000] transition-colors"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#2a2a2a] px-4 py-6">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold tracking-wider text-[#f2f0e8] hover:text-[#f5e000] transition-colors uppercase block"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.instagram.com/visual_attack_skateshop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#f5e000] text-[#0a0a0a] px-4 py-3 font-bold tracking-wide hover:bg-white transition-colors w-fit"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <ExternalLink size={16} />
                @visual_attack_skateshop
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
