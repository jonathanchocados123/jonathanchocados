import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO + NOMBRE */}
        <div className="flex items-center gap-4">
          <img
            src="/videologo.gif"
            alt="Chocados Jonathan"
            className="h-12 w-auto drop-shadow-[0_0_12px_rgba(255,191,0,0.6)]"

          />

          <span className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            Chocados Jonathan
          </span>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <a href="#catalogo" className="hover:text-amber-400 transition">
            Catálogo
          </a>
          <a href="#testimonios" className="hover:text-amber-400 transition">
            Clientes
          </a>
          <a href="#contacto" className="hover:text-amber-400 transition">
            Contacto
          </a>
        </nav>

      </div>
    </header>
  )
}
