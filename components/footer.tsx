export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="font-serif font-bold text-primary-foreground">LC</span>
            </div>
            <div>
              <p className="font-serif font-bold text-foreground">Luxury Classics</p>
              <p className="text-xs text-muted-foreground">Vehículos Reformados</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Luxury Classics. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
