"use client"

import { Mail, MessageCircle, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hola, quisiera información sobre vehículos disponibles"
    )
    window.open(`https://wa.me/56978605469?text=${message}`, "_blank")
  }

  return (
    <section id="contacto" className="py-24 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-amber-400">
          Contáctanos
        </h2>

        <p className="text-neutral-300 mb-12">
          Venta de vehículos chocados.  
          Servicio de grúa disponible.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
            <MessageCircle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-neutral-400 mb-4">Respuesta rápida</p>

            <button
              onClick={handleWhatsApp}
              className="px-6 py-3 rounded-md bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
            >
              Abrir WhatsApp
            </button>
          </div>

          {/* Email */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
            <Mail className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-neutral-400 mb-4">
              jonathanchocados@gmail.com
            </p>

            <a
              href="mailto:jonathanchocados@gmail.com"
              className="inline-block px-6 py-3 rounded-md border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition"
            >
              Enviar Email
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>+56 9 7860 5469</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Camino Lonquén, Paradero 34</span>
          </div>
        </div>
      </div>
    </section>
  )
}
