import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <p
              className="text-3xl text-[#f5e000] tracking-widest mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              VISUAL ATTACK
            </p>
            <p
              className="text-[#888880] text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Torreón, Coahuila, México
            </p>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {[
                { label: "Productos", href: "#productos" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Eventos", href: "#eventos" },
                { label: "Contacto", href: "#contacto" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#888880] hover:text-[#f5e000] transition-colors tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/visual_attack_skateshop/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#888880] hover:text-[#f5e000] hover:border-[#f5e000] transition-all"
              aria-label="Instagram Visual Attack SkateShop"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href="https://www.instagram.com/visual_attack.trc/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#888880] hover:text-[#ff3800] hover:border-[#ff3800] transition-all"
              aria-label="Instagram Visual Attack TRC"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p
            className="text-[#888880] text-xs tracking-wide"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2026 Visual Attack SkateShop. Todos los derechos reservados.
          </p>
          <p
            className="text-[#555550] text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Built with{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#888880] transition-colors"
            >
              Claude Web Builder by Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
