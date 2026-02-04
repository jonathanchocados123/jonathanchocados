import { CarCard } from "./car-card"
import { cars } from "@/lib/car-data"

export function CatalogGrid() {
  return (
    <section id="catalogo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestro Catálogo</h2>
          <p className="text-muted-foreground text-lg">{cars.length} vehículos excepcionales disponibles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}
