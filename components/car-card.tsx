"use client"

import { Mail, MessageCircle, Gauge, Calendar, Fuel } from "lucide-react"
import type { Car } from "@/lib/car-data"

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en el ${car.marca} ${car.modelo} ${car.año}`,
    )
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(`Consulta: ${car.marca} ${car.modelo}`)
    const body = encodeURIComponent(
      `Hola,\n\nEstoy interesado en obtener más información sobre:\n${car.marca} ${car.modelo} ${car.año}\nPrecio: ${car.precio}\n\nGracias.`,
    )
    window.location.href = `mailto:info@luxuryclassics.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 hover:border-zinc-400 transition">
      {/* Imagen */}
     <div className="relative aspect-[4/3] overflow-hidden">
  <img
    src={`/autos/${(car.id % 11) + 1}.jpg`}
    alt={`${car.marca} ${car.modelo}`}
    className="h-full w-full object-cover"
  />

  {car.estado && (
    <span className="absolute top-3 right-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
      {car.estado}
    </span>
  )}
</div>


      {/* Contenido */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            {car.marca} {car.modelo}
          </h3>
          <p className="text-3xl font-bold text-zinc-200 mt-1">
            {car.precio}
          </p>
        </div>

        <div className="space-y-2 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Año: {car.año}</span>
          </div>

          {car.kilometraje && (
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              <span>{car.kilometraje}</span>
            </div>
          )}

          {car.motor && (
            <div className="flex items-center gap-2">
              <Fuel className="w-4 h-4" />
              <span>{car.motor}</span>
            </div>
          )}
        </div>

        {car.descripcion && (
          <p className="text-sm text-zinc-400 line-clamp-3">
            {car.descripcion}
          </p>
        )}

        {/* Botones */}
        <div className="mt-4 flex gap-3">
          <button
            onClick={handleWhatsApp}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500 transition"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>

          <button
            onClick={handleEmail}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-500 px-4 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition"
          >
            <Mail className="w-4 h-4" />
            Email
          </button>
        </div>
      </div>
    </div>
  )
}
