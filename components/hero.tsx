"use client"

export function Hero() {
  const activarSonido = () => {
    const video = document.getElementById("hero-video") as HTMLVideoElement
    if (video) {
      video.muted = false
      video.volume = 1
    }
  }

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <video
        id="hero-video"
        className="absolute inset-0 w-full h-full object-cover"
        src="/videbanner.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Botón sonido */}
      <button
        onClick={activarSonido}
        className="absolute bottom-6 right-6 z-20 bg-black/70 text-white px-4 py-2 rounded-lg text-sm hover:bg-black/90 transition"
      >
        🔊 Activar sonido
      </button>
    </section>
  )
}
