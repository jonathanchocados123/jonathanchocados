import "./globals.css"
import { Header } from "@/components/header"
import { WhatsAppFloat } from "@/components/WhatsAppFloat"
import { Footer } from "@/components/footer"


export const metadata = {
  title: "Chocados Jonathan Chocados | Reparación y Venta de Vehículos Chocados",
  description:
    "Chocados Jonathan Chocados en Lonquén. Reparación, restauración y venta de vehículos chocados. Servicio de grúa y atención personalizada.",
  keywords: [
    "vehículos chocados",
    "reparación autos chocados",
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
  canonical: "https://chocadosjonathan.cl",
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
      </body>
    </html>
  )
}
