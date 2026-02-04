"use client"

export function WhatsAppFloat() {
  const phone = "56978605469"
  const message = encodeURIComponent(
    "Hola, quisiera más información sobre sus servicios y vehículos."
  )

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg hover:bg-green-600 transition"
    >
      <img
        src="/wath.gif"
        alt="WhatsApp"
        className="w-7 h-7"
      />
      <span className="hidden md:block font-medium">
        Escríbenos
      </span>
    </a>
  )
}
