import "./globals.css"
import { Header } from "@/components/header"
import { WhatsAppFloat } from "@/components/WhatsAppFloat"
import { Footer } from "@/components/footer"


export const metadata = {
  title: "Chocados Jonathan Chocados |  Venta de Vehículos Chocados",
  description:
    "Chocados Jonathan Chocados en Lonquén. venta de vehículos chocados. Servicio de grúa y atención personalizada.",
  keywords: [
    "vehículos chocados",
    "restauración autos chocados",
    "venta autos chocados Chile",
    "servicio de grúa Lonquén",
    "Chocados Jonathan",
  ],
  openGraph: {
    title: "Chocados Jonathan Chocados",
    description: "Especialistas en vehículos chocados y restaurados",
    images: ["/videologo.gif"],
    locale: "es_CL",
    type: "website",
  },
  robots: {
  index: true,
  follow: true,
},
alternates: {
  canonical: "https://chocadosjonathanchocados.com",
},

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-black text-white">
        <Header />
        {children}
        <WhatsAppFloat />
        <Footer />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutoDealer",
      name: "Jonathan Chocados",
      image: "https://chocadosjonathanchocados.com/videologo.gif",
      telephone: "+56978605469",
      email: "jonathanchocados@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Camino Lonquén Paradero 34",
        addressLocality: "Santiago",
        addressCountry: "CL"
      },
      url: "https://chocadosjonathanchocados.com",
      sameAs: [
        "https://www.facebook.com/jonathan.chocados",
        "https://instagram.com/jonathanchocados1",
        "https://www.tiktok.com/@jonathanchocados1"
      ]
    })
  }}
/>

      </body>
    </html>
  )
}

