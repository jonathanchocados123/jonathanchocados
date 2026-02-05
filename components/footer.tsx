import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black py-16 text-sm text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <img src="/videologo.gif" alt="Chocados Jonathan Chocados" className="h-12 mb-4" />
          <p>
            Especialistas en recuperación y venta de vehículos
            chocados. Servicio profesional y transparente.
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

    <li>
      <a
        href="tel:+56944740997"
        className="flex items-center gap-2 hover:text-amber-400 transition"
      >
        <Phone size={16} />
        +56 9 4474 0997
      </a>
    </li>

    <li>
      <a
        href="https://wa.me/56978605469"
        target="_blank"
        className="flex items-center gap-2 hover:text-amber-400 transition"
      >
        <MessageCircle size={16} />
        +56 9 7860 5469 (WhatsApp)
      </a>
    </li>

    <li>
      <a
        href="mailto:jonathanchocados@gmail.com"
        className="flex items-center gap-2 hover:text-amber-400 transition"
      >
        <Mail size={16} />
        jonathanchocados@gmail.com
      </a>
    </li>

     <li>
      <a
        href="https://www.facebook.com/share/p/16xhojKU5j/"
        className="flex items-center gap-2 hover:text-amber-400 transition"
      >
        <Mail size={16} />
        Facebook
      </a>
    </li>

     <li>
      <a
        href="https://instagram.com/jonathanchocados1"
        className="flex items-center gap-2 hover:text-amber-400 transition"
      >
        <Mail size={16} />
        Instagram
      </a>
    </li>

  </ul>
</div>


        {/* HORARIO */}
        <div>
          <h4 className="text-white font-semibold mb-4">Horario</h4>
          <p>Lunes a Viernes: 10:00 – 18:00</p>
          <p>Sábados: 10:00 – 14:00</p>
        </div>

        <div className="mt-6 rounded-xl overflow-hidden border border-neutral-800">
  <iframe
    src="https://maps.google.com/maps?q=Camino%20Lonqu%C3%A9n%20Paradero%2034&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="200"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


      </div>

      <div className="mt-12 text-center text-neutral-600">
        © {new Date().getFullYear()} Chocados Jonathan Chocados · Todos los derechos reservados
      </div>
    </footer>
  )
}
