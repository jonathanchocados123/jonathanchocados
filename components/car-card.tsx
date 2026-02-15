"use client"

import { Mail, MessageCircle, Gauge, Calendar } from "lucide-react"
import type { Car } from "@/lib/car-data"
import { useState } from "react"

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  const [index, setIndex] = useState(0)

  const next = () =>
    setIndex((prev) => (prev + 1) % car.imagenes.length)

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? car.imagenes.length - 1 : prev - 1,
    )

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en el ${car.marca} ${car.modelo} ${car.año}`,
    )
    window.open(
      `https://wa.me/56978605469?text=${message}`,
      "_blank",
    )
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(
      `Consulta: ${car.marca} ${car.modelo}`,
    )
    window.location.href = `mailto:jonathanchocados@gmail.com?subject=${subject}`
  }

  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 overflow-hidden">

      {/* Imagen carrusel */}
      <div className="relative aspect-[4/3]">
        <img
          src={car.imagenes[index]}
          className="w-full h-full object-cover"
        />

        {car.nuevo && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
            Nuevo ingreso
          </span>
        )}

        {car.imagenes.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 bg-black/60 px-2 py-1 text-white">‹</button>
            <button onClick={next} className="absolute right-2 top-1/2 bg-black/60 px-2 py-1 text-white">›</button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl text-white font-semibold">
          {car.marca} {car.modelo}
        </h3>

        <p className="text-2xl text-amber-400 font-bold">
          {car.precio}
        </p>

        <div className="text-sm text-zinc-400 space-y-1">
          <p className="flex gap-2"><Calendar size={14}/> {car.año}</p>
          {car.kilometraje && <p className="flex gap-2"><Gauge size={14}/> {car.kilometraje}</p>}
          {car.transmision && <p>⚙️ {car.transmision}</p>}
          {car.estado && <p>🚗 {car.estado}</p>}
          {car.airbag && <p>🛡️ {car.airbag}</p>}
        </div>

        {car.descripcion && (
          <p className="text-sm text-zinc-400">{car.descripcion}</p>
        )}

        <div className="flex gap-2 pt-3">
          <button onClick={handleWhatsApp} className="flex-1 bg-green-600 py-2 rounded-xl text-white">
            WhatsApp
          </button>

          <button onClick={handleEmail} className="flex-1 border border-zinc-600 py-2 rounded-xl text-white">
            Email
          </button>
        </div>
      </div>
    </div>
  )
}
