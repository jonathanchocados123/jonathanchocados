"use client"

import { cars } from "@/lib/car-data"
import { Hero } from "@/components/hero"
import React, { useState } from "react"

const CarItem = ({ car }: { car: any }) => {

  const [index, setIndex] = React.useState(0)

  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-amber-500 transition">
      
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.imagenes[index]}
          alt={`${car.marca} ${car.modelo}`}
          className="h-full w-full object-cover transition-all duration-500"
        />

        {car.imagenes.length > 1 && (
          <>
            <button
              onClick={() =>
                setIndex(index === 0 ? car.imagenes.length - 1 : index - 1)
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setIndex(index === car.imagenes.length - 1 ? 0 : index + 1)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded"
            >
              ›
            </button>
          </>
        )}
      </div>

<div className="p-6 space-y-3">

  {car.nuevo && (
    <span className="inline-block bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">
      NUEVO INGRESO
    </span>
  )}

  <h3 className="text-xl font-semibold">
    {car.marca} {car.modelo}
  </h3>

  <p className="text-sm text-neutral-400">
    Año: {car.año}
  </p>

  <p className="text-2xl font-bold text-amber-400">
    {car.precio}
  </p>

  {car.kilometraje && (
    <p className="text-sm text-neutral-400">
      Kilometraje: {car.kilometraje}
    </p>
  )}

  {car.transmision && (
    <p className="text-sm text-neutral-400">
      Transmisión: {car.transmision}
    </p>
  )}

  {car.estado && (
    <p className="text-sm text-neutral-400">
      Estado: {car.estado}
    </p>
  )}

  {car.airbag && (
    <p className="text-sm text-neutral-400">
      Airbag: {car.airbag}
    </p>
  )}

  {car.descripcion && (
    <p className="text-sm text-neutral-300 pt-2 border-t border-neutral-800">
      {car.descripcion}
    </p>
  )}

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
}


export default function Home() {
  return (
    <main className="bg-black text-white">

   <Hero /> 

{/* PRESENTACIÓN */}
<section className="py-24 px-6 max-w-5xl mx-auto text-center">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
    CHOCADOS JONATHAN CHOCADOS
  </h1>

    <h2 className="text-3xl font-semibold mb-4 text-amber-400">
  MÁS DE 15 AÑOS DE EXPERIENCIA
</h2>

  <p className="text-xl text-neutral-200 mb-4">
    Venta de vehículos chocados
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

<section id="catalogo" className="py-24 px-6 max-w-7xl mx-auto">
  <h2 className="text-4xl font-semibold mb-16 text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
    Catálogo de Vehículos
  </h2>

  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    {cars.map((car) => (
      <CarItem key={car.id} car={car} />
    ))}
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

      <section className="text-center max-w-4xl mx-auto px-6 mb-16">
  <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-8 space-y-3 text-neutral-300">

    <p className="text-lg font-semibold text-amber-400">
      🚘 19 Vehículos Disponibles
    </p>

    <p>✅ Todos funcionando</p>
    <p>🚛 Contamos con servicio de grúa</p>

<p>
  📱 Videos publicados en{" "}
  <a
    href="https://instagram.com/jonathanchocados1"
    target="_blank"
    className="text-amber-400 hover:underline"
  >
    Instagram
  </a>{" "}
  y{" "}
  <a
    href="https://www.tiktok.com/@jonathanchocados1"
    target="_blank"
    className="text-amber-400 hover:underline"
  >
    TikTok @jonathanchocados1
  </a>
</p>

    <div className="pt-4 text-sm text-neutral-400 space-y-1">
      <p>✔ Valores incluyen transferencia</p>
      <p>✔ Vehículos se venden tal cual están chocados</p>
      <p>✔ Pueden revisarse completamente antes de comprar</p>
      <p>✔ Sin responsabilidad una vez retirado del recinto</p>
    </div>

  </div>
</section>

     

      {/* TESTIMONIOS */}
    <section id="testimonios" className="py-24 px-6 max-w-6xl mx-auto text-center">
  <h2 className="text-4xl font-semibold mb-12 text-amber-400">
    Clientes que confiaron en nosotros
  </h2>

  <div className="grid gap-8 md:grid-cols-3">
    {[
      "Excelente servicio, precios accequibles y justos",
      "Muy responsables y claros en todo el proceso."
     
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

