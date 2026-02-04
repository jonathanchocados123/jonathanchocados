"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [open, setOpen] = useState(false)
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
         {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-neutral-300">
          <a href="#catalogo" className="hover:text-amber-400">Catálogo</a>
          <a href="#testimonios" className="hover:text-amber-400">Clientes</a>
          <a href="#contacto" className="hover:text-amber-400">Contacto</a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-amber-400 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-6 py-4 space-y-4">
          <a href="#catalogo" onClick={() => setOpen(false)} className="block text-neutral-300">
            Catálogo
          </a>
          <a href="#testimonios" onClick={() => setOpen(false)} className="block text-neutral-300">
            Clientes
          </a>
          <a href="#contacto" onClick={() => setOpen(false)} className="block text-neutral-300">
            Contacto
          </a>
        </div>
      )}
    </header>
  )
}
