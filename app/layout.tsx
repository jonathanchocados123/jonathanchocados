import "./globals.css"
import { Header } from "@/components/header"
import { WhatsAppFloat } from "@/components/WhatsAppFloat"
import { Footer } from "@/components/footer"


export const metadata = {
   metadataBase: new URL("https://chocadosjonathanchocados.com"),
 title: "Chocados Jonathan Chocados | Venta de Vehículos Chocados en Lonquén, Santiago",
  description:
    "Chocados Jonathan Chocados en Lonquén. venta de vehículos chocados. Servicio de grúa y atención personalizada.",
  keywords: [
     "autos chocados",
    "autos chocados chile",
    "autos chocados santiago",
    "venta autos chocados",
    "autos para repuestos",
    "autos baratos chile",
    "vehículos chocados",
    "autos siniestrados",
  ],
  openGraph: {
    title: "Chocados Jonathan Chocados",
    description: "Autos chocados funcionando, baratos y listos para entrega. Santiago - Lonquén.",
    images: ["/videologo.gif"],
    locale: "es_CL",
    type: "website",
  },
  robots: {
  index: true,
  follow: true,
},
verification: {
  google: "nnWxe3B8yqiKH2bHVD0dtqeuYJ0QqcC1UxwgfrMFjJU",
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

