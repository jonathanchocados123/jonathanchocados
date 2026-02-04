"use client"

import { Mail, MessageCircle, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, quisiera más información sobre sus vehículos")
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
    <section id="contacto" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Listo para tu próximo clásico?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Contáctanos para agendar una visita o recibir más información sobre cualquiera de nuestros vehículos
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Respuesta inmediata</p>
              <Button onClick={handleWhatsApp} className="bg-primary text-primary-foreground hover:bg-primary/90">
                Abrir WhatsApp
              </Button>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">info@luxuryclassics.com</p>
              <Button
                onClick={() => (window.location.href = "mailto:info@luxuryclassics.com")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Enviar Email
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Tu Ciudad, País</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
