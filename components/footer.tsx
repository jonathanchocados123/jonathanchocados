import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black py-16 text-sm text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <img src="/videologo.gif" alt="Chocados Jonathan" className="h-12 mb-4" />
          <p>
            Especialistas en recuperación, reparación y venta de vehículos
            chocados. Servicio profesional y transparente.
          </p>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Camino Lonquén, Paradero 34
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +56 9 7860 5469
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> jonathanchocados@gmail.com
            </li>
          </ul>
        </div>

        {/* HORARIO */}
        <div>
          <h4 className="text-white font-semibold mb-4">Horario</h4>
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
