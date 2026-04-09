"use client"

const PromoBar = () => {
  return (
    <div className="w-full mt-6 mb-6 px-4">
      <div className="bg-black border-2 border-red-500 rounded-xl py-5 overflow-hidden shadow-[0_0_25px_rgba(255,0,0,0.7)]">

        <div className="flex w-max animate-marquee gap-10">

          {/* TEXTO 1 */}
          <span className="font-extrabold text-lg tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 whitespace-nowrap">
            🚨 NUEVOS INGRESOS TODAS LAS SEMANAS 🚗 • PRECIOS LIQUIDACIÓN 🔥 • VEHÍCULOS DESDE $2.490.000 💰 • TODOS FUNCIONANDO ✅ • TRANSFERENCIA INCLUIDA 📄 •
          </span>

          {/* TEXTO 2 (CLON) */}
          <span className="font-extrabold text-lg tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 whitespace-nowrap">
            🚨 NUEVOS INGRESOS TODAS LAS SEMANAS 🚗 • PRECIOS LIQUIDACIÓN 🔥 • VEHÍCULOS DESDE $2.490.000 💰 • TODOS FUNCIONANDO ✅ • TRANSFERENCIA INCLUIDA 📄 •
          </span>

        </div>

      </div>
    </div>
  )
}

export default PromoBar
