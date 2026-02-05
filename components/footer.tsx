import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black py-16 text-sm text-neutral-400">

      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <img
            src="/videologo.gif"
            alt="Chocados Jonathan"
            className="h-12 mb-4"
          />

          <p className="mb-4">
            Venta de vehículos provenientes de compañías de seguros con
            ingresos semanales, precios competitivos y atención transparente.
          </p>

          <p>
            Incluimos servicio de grúa y transferencia gratuita como beneficio
            adicional para nuestros clientes.
          </p>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>

          <ul className="space-y-3">

            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Camino Lonquén, Paradero 34
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} />
              +56 9 4474 0997
            </li>

            <li className="flex items-center gap-2">
              <MessageCircle size={16} />
              +56 9 7860 5469 (WhatsApp)
            </li>

            <li className="flex items-center gap-2">
              <Mail size={16} />
              jonathanchocados@gmail.com
            </li>

          </ul>
        </div>

        {/* REDES + HORARIO */}
        <div>
          <h4 className="text-white font-semibold mb-4">Redes & Horario</h4>

          <div className="space-y-3 mb-6">

            <a
              href="https://facebook.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-amber-400 transition"
            >
              <Facebook size={16} />
              Jonathan Chocados
            </a>

            <a
              href="https://instagram.com/jonathanchocados1"
              target="_blank"
              className="flex items-center gap-2 hover:text-amber-400 transition"
            >
              <Instagram size={16} />
              @jonathanchocados1
            </a>

          </div>

          <p>Lunes a Viernes: 10:00 – 18:00</p>
          <p>Sábados: 10:00 – 14:00</p>
        </div>

      </div>

      <div className="mt-12 text-center text-neutral-600">
        © {new Date().getFullYear()} Chocados Jonathan · Todos los derechos reservados
      </div>

    </footer>
  )
}
