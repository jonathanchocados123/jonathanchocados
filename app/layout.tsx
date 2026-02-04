import "./globals.css"
import { Header } from "@/components/header"

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
