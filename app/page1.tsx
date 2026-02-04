import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
      
       <div className="flex items-center gap-3">
        <img
          src="/1.1.jpg"
          alt="chocadosjonathan"
          className="h-10 w-auto"
        />
        <span className="text-1xl md:text-2xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-wide">
          ChocadosJonathan
        </span>
      </div>


             <div>
              <p className="text-1xl md:text-2xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Vehículos Reformados</p>
            </div>

           <nav className="hidden md:flex gap-6 text-1xl md:text-2xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
          <a href="#catalogo" className="hover:text-white">Catálogo</a>
          <a href="#testimonios" className="hover:text-white">Clientes</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </nav>
        
        </div>
      </div>
    </header>
    
  )
}
