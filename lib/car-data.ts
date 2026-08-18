export interface Car {
  id: number
  marca: string
  modelo: string
  año: number
  precio: string
  kilometraje: string
  transmision?: string
  estado: string
  airbag?: string
  descripcion?: string
  imagenes: string[]
  nuevo?: boolean
}

export const cars: Car[] = [
   {
    id: 1,
    marca: "Mazda",
    modelo: "Cx5 R",
    año: 2019,
    precio: "$10.990.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 18 millones.",
    nuevo: true,
    imagenes: ["/103.jpg", "/25.jpg", "/26.jpg", "/20.jpg", "/53.jpg"]
  },
{
    id: 2,
    marca: "Renault",
    modelo: "Duster 4X4",
    año: 2016,
    precio: "$4.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/29.jpg", "/31.jpg", "/32.jpg", "/18.jpg"]
  },
{
    id: 3,
    marca: "Mg",
    modelo: "Zx",
    año: 2026,
    precio: "$6.990.000",
    kilometraje: "2000 kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/76.jpg", "/77.jpg", "/84.jpg", "/88.jpg", "/91.jpg"]
  },
     {
    id: 4,
    marca: "Haval",
    modelo: "Jolion Dct",
    año: 2024,
    precio: "$8.990.000",
    kilometraje: "20 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    transmision: "Automático",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/68.jpg", "/121.jpg", "/122.jpg", "/90.jpg", "/67.jpg"]
  },
  {
    id: 5,
    marca: "Chevrolet",
    modelo: "Tracker",
    año: 2021,
    precio: "$5.990.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/92.jpg", "/100.jpg", "/101.jpg", "/107.jpg"]
  },
{
    id: 6,
    marca: "Mg",
    modelo: "5",
    año: 2021,
    precio: "$5.990.000",
    kilometraje: "40 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/108.jpg", "/109.jpg", "/111.jpg", "/112.jpg"]
  },
  {
    id: 7,
    marca: "Volkswagen",
    modelo: "Nivus Tsi",
    año: 2023,
    precio: "$8.990.000",
    kilometraje: "38 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    transmision: "Manual",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg", "/17.jpg"]
  },
   {
    id: 8,
    marca: "Citroen",
    modelo: "C3 Hb",
    año: 2021,
    precio: "$6.490.000",
    kilometraje: "63 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    transmision: "Manual",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/34.jpg", "/117.jpg", "/22.jpg", "/35.jpg"]
  },
  {
    id: 9,
    marca: "Chevrolet",
    modelo: "Groove",
    año: 2025,
    precio: "$7.690.000",
    kilometraje: "23 mil kilómetros",
    estado: "Se va andando",
    transmision: "Manual",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/41.jpg", "/42.jpg", "/43.jpg", "/44.jpg"]
  },
   {
    id: 10,
    marca: "Hyundai",
    modelo: "venue",
    año: 2023,
    precio: "$6.690.000",
    kilometraje: "77 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg","/9.jpg"]
  },
  {
    id: 11,
    marca: "Mazda",
    modelo: "3 sport Hb",
    año: 2014,
    precio: "$4.290.000",
    kilometraje: "120 mil kilómetros, NUEVO",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/14.jpg", "/15.jpg", "/59.jpg", "/60.jpg"]
  },
   {
    id: 12,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$3.990.000",
    kilometraje: "80 mil kilómetros",
    transmision: "(Automático)",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. La compañía de seguros pagó 9millones al dueño.",
    nuevo: true,
    imagenes: ["/cherytigo2-4.jpg","/cherytigo2-3.jpg","/cherytigo2-2.jpg","/cherytigo2-1.jpg"]
  },
   {
    id: 13,
    marca: "Buggy ",
    modelo: "Can-Am  maverick X3 Turbo",
    año: 2020,
    precio: "$19.490.000",
    kilometraje: "59 mil km",
     estado: "Se va andando",
    descripcion: "Extensiones de puertas.",
    nuevo: true,
    imagenes: ["/Buggy5.jpg", "/Buggy4.jpg", "/Buggy3.jpg","/Buggy2.jpg", "/Buggy1.jpg", "/Buggy.jpg"]
  },

  
]
