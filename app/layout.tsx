import "./globals.css"
import { Header } from "@/components/header"

export const metadata = {
  title: "Chocados Jonathan | Reparación y Venta de Vehículos Chocados",
  description:
    "Chocados Jonathan en Lonquén. Reparación, restauración y venta de vehículos chocados. Servicio de grúa y atención personalizada.",
  keywords: [
    "vehículos chocados",
    "reparación autos chocados",
    "venta autos chocados Chile",
    "servicio de grúa Lonquén",
    "Chocados Jonathan"
  ],
  openGraph: {
    title: "Chocados Jonathan",
    description: "Especialistas en vehículos chocados y restaurados",
    images: ["/videologo.gif"],
    locale: "es_CL",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className="min-h-screen bg-black text-white"
        style={{
          backgroundImage: "url('/bg/1.1.1.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
         <Header />
        {children}
      </body>
    </html>
  )
}
