import { cars } from "@/lib/car-data"
import { Hero } from "@/components/hero"


export default function Home() {
  return (
    <main className="bg-black text-white">

   <Hero /> 

{/* PRESENTACIÓN */}
<section className="py-24 px-6 max-w-5xl mx-auto text-center">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
    CHOCADOS JONATHAN CHOCADOS
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
      En <strong>Jonathan Chocados</strong> nos especializamos en la venta de vehículos
      provenientes de compañías de seguros, ofreciendo alternativas accesibles,
      transparentes y competitivas dentro del mercado automotriz chileno.
      Trabajamos con ingreso constante de vehículos, atención clara y beneficios
      adicionales como servicio de grúa y transferencia gratuita para nuestros clientes.
    </p>
  </div>

  <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8">
    <h2 className="text-3xl font-semibold mb-4 text-amber-400">
      Nuestra Visión
    </h2>

    <p className="text-neutral-300 leading-relaxed">
      Ser un referente nacional en la comercialización transparente de vehículos
      chocados y de seguro, destacando por la honestidad, precios justos y procesos
      claros de compra, brindando confianza total a cada cliente que elige trabajar
      con nosotros.
    </p>
  </div>

</section>


      {/* SERVICIOS */}
<section id="servicios" className="py-24 px-6 max-w-7xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
    Nuestros Servicios
  </h2>

  <p className="text-center text-neutral-400 max-w-3xl mx-auto mb-16">
    En <strong>Chocados Jonathan Chocados</strong> ofrecemos soluciones completas para vehículos chocados,
    combinando experiencia técnica, transparencia y atención personalizada.
  </p>

  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    
    {/* SERVICIO 1 */}
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-3 text-amber-400">
        🔧 Restauracion de Vehículos Chocados
      </h3>
      <p className="text-neutral-300 leading-relaxed">
        Restauramos vehículos chocados devolviéndoles su seguridad estructural,
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

{/* INFORMACIÓN DE COMPRA */}
<section className="py-24 px-6 max-w-5xl mx-auto text-center">

  <h2 className="text-4xl font-semibold mb-8 text-amber-400">
    Información Importante para Compradores
  </h2>

  <p className="text-neutral-300 mb-6">
    En <strong>Jonathan Chocados</strong> comercializamos vehículos provenientes de
    compañías de seguros con ingreso de unidades nuevas todas las semanas,
    ofreciendo precios altamente competitivos y un stock en constante renovación.
  </p>

  <div className="text-neutral-400 space-y-4 text-left max-w-3xl mx-auto">
    <p>✔️ Todos los vehículos se venden en el estado en que se encuentran.</p>
    <p>✔️ Invitamos a realizar una revisión completa antes de comprar.</p>
    <p>✔️ Puede asistir con mecánico, escáner o herramientas de diagnóstico.</p>
    <p>✔️ Una vez que el vehículo sale del recinto, no existe derecho a reclamo.</p>
    <p>✔️ Incluimos transferencia gratuita como beneficio adicional.</p>
    <p>✔️ Contamos con servicio de grúa disponible.</p>
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
                      <img src="/what.gif" alt="WhatsApp" className="w-5 h-5" />
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
      "Excelente servicio de grúa y restauracion rápida."
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

     
      </section>
    </main>
  )
}
