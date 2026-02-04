import { cars } from "@/lib/car-data"
import { Hero } from "@/components/hero"


export default function Home() {
  return (
    <main className="bg-black text-white">

   <Hero /> 

{/* PRESENTACIÓN */}
<section className="py-24 px-6 max-w-5xl mx-auto text-center">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
    CHOCADOS JONATHAN
  </h1>

  <p className="text-xl text-neutral-200 mb-4">
    Recuperación, restauración y venta de vehículos chocados
  </p>

  <p className="text-neutral-400 max-w-3xl mx-auto">
    Especialistas en devolverle valor, seguridad y estética a tu vehículo.
    Contamos con servicio de grúa y atención personalizada en todo el proceso.
  </p>
</section>

      

      {/* MISIÓN & VISIÓN */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8">
          <h2 className="text-3xl font-semibold mb-4 text-amber-400">
            Nuestra Misión
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            En <strong>Chocados Jonathan</strong> nos dedicamos a recuperar,
            reparar y restaurar vehículos chocados, devolviéndoles su seguridad,
            funcionalidad y valor. Trabajamos con compromiso, transparencia y
            altos estándares de calidad, ofreciendo además servicio de grúa
            confiable para acompañar a nuestros clientes en todo el proceso.
          </p>
        </div>

        <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8">
          <h2 className="text-3xl font-semibold mb-4 text-amber-400">
            Nuestra Visión
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Ser una empresa reconocida en Chile por la excelencia en la
            recuperación automotriz, destacando por nuestro profesionalismo,
            honestidad y atención personalizada, consolidándonos como un
            referente en la venta de vehículos restaurados y servicios asociados.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
<section id="servicios" className="py-24 px-6 max-w-7xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
    Nuestros Servicios
  </h2>

  <p className="text-center text-neutral-400 max-w-3xl mx-auto mb-16">
    En <strong>Chocados Jonathan</strong> ofrecemos soluciones completas para vehículos chocados,
    combinando experiencia técnica, transparencia y atención personalizada.
  </p>

  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    
    {/* SERVICIO 1 */}
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-3 text-amber-400">
        🔧 Reparación de Vehículos Chocados
      </h3>
      <p className="text-neutral-300 leading-relaxed">
        Reparamos vehículos chocados devolviéndoles su seguridad estructural,
        funcionalidad mecánica y estética, utilizando procesos confiables y materiales de calidad.
      </p>
    </div>

    {/* SERVICIO 2 */}
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-3 text-amber-400">
        🚗 Restauración Automotriz
      </h3>
      <p className="text-neutral-300 leading-relaxed">
        Restauramos vehículos dañados para que vuelvan a lucir como nuevos,
        cuidando cada detalle estético y mecánico para maximizar su valor final.
      </p>
    </div>

    {/* SERVICIO 3 */}
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-3 text-amber-400">
        💰 Venta de Autos Restaurados
      </h3>
      <p className="text-neutral-300 leading-relaxed">
        Comercializamos vehículos chocados completamente restaurados,
        listos para su uso, con asesoría clara y honesta durante todo el proceso.
      </p>
    </div>

    {/* SERVICIO 4 */}
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-3 text-amber-400">
        🚛 Servicio de Grúa
      </h3>
      <p className="text-neutral-300 leading-relaxed">
        Contamos con servicio de grúa rápido y seguro para el traslado de vehículos,
        brindando apoyo inmediato en situaciones de emergencia o traslado a taller.
      </p>
    </div>

    {/* SERVICIO 5 */}
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-3 text-amber-400">
        🤝 Asesoría Personalizada
      </h3>
      <p className="text-neutral-300 leading-relaxed">
        Acompañamos a nuestros clientes en cada etapa, resolviendo dudas y ofreciendo
        orientación transparente para tomar la mejor decisión según sus necesidades.
      </p>
    </div>

  </div>
</section>


      {/* CATÁLOGO */}
      <section id="catalogo" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-16 text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
          Catálogo de Vehículos
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, index) => {
            const imageNumber = (index % 11) + 1

            return (
              <div
                key={car.id}
                className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-amber-500 transition"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={`/${imageNumber}.jpg`}
                    alt={`${car.marca} ${car.modelo}`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">
                    {car.marca} {car.modelo}
                  </h3>

                  <p className="text-sm text-neutral-400">
                    Año {car.año}
                  </p>

                  <p className="text-2xl font-bold text-amber-400">
                    {car.precio}
                  </p>

                  <div className="flex gap-3 pt-4">
                    <a
                      href="https://wa.me/56944740997"
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-amber-400 text-black text-sm font-medium hover:bg-amber-300"
                    >
                      <img src="/wath.gif" alt="WhatsApp" className="w-5 h-5" />
                      WhatsApp
                    </a>

                    <a
                      href="mailto:info@chocadosjonathan.cl"
                      className="px-4 py-2 rounded-md border border-white/40 text-sm hover:bg-white hover:text-black transition"
                    >
                      ✉️ Email
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* TESTIMONIOS */}
    <section id="testimonios" className="py-24 px-6 max-w-6xl mx-auto text-center">
  <h2 className="text-4xl font-semibold mb-12 text-amber-400">
    Clientes que confiaron en nosotros
  </h2>

  <div className="grid gap-8 md:grid-cols-3">
    {[
      "Mi auto quedó como nuevo después del choque. Trabajo impecable.",
      "Muy responsables y claros en todo el proceso.",
      "Excelente servicio de grúa y reparación rápida."
    ].map((text, i) => (
      <div
        key={i}
        className="bg-neutral-900/80 p-6 rounded-xl border border-neutral-800"
      >
        <p className="text-neutral-300 mb-4 italic">
          “{text}”
        </p>
        <span className="text-sm text-neutral-500">
          Cliente verificado
        </span>
      </div>
    ))}
  </div>
</section>


      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-amber-400">
          Contáctanos
        </h2>

        <div className="space-y-3 text-neutral-300">
          <p>📍 Camino Lonquén, Paradero 34</p>
          <p>📞 +56 9 4474 0997</p>
          <p>📞 WhatsApp: +56 9 7860 5469</p>
          <p>🕒 Lunes a Viernes: 10:00 – 18:00</p>
          <p>🕒 Sábados: 10:00 – 14:00</p>
        </div>
      </section>
    </main>
  )
}
