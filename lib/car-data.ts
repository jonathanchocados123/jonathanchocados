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
    marca: "Nissan",
    modelo: "Navara",
    año: 2021,
    precio: "$9.990.000",
    kilometraje: "30 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 18 millones.",
    nuevo: true,
    imagenes: ["/2.jpg", "/3.jpg", "/124.jpg", "/87.jpg"]
  },
   {
    id: 2,
    marca: "Renault",
    modelo: "Fluence",
    año: 2015,
    precio: "$2.990.000",
    kilometraje: "50 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/4.jpg", "/11.jpg", "/27.jpg", "/28.jpg", "/123.jpg"]
  },
  {
    id: 3,
    marca: "Chery",
    modelo: "Tiggo 2 Pro",
    año: 2023,
    precio: "$2.990.000",
    kilometraje: "38 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/39.jpg", "/40.jpg", "/80.jpg", "/81.jpg"]
  },
 {
    id: 4,
    marca: "Changan",
    modelo: "Alsvin",
    año: 2021,
    precio: "$3.490.000",
    kilometraje: "44 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/21.jpg",  "/1.jpg", "/108.jpg", "/109.jpg"]
  },
{
    id: 5,
    marca: "Kia",
    modelo: "Soluto",
    año: 2020,
    precio: "$3.990.000",
    kilometraje: "128 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/92.jpg", "/100.jpg", "/101.jpg", "/107.jpg", "/60.jpg"]
  },
  {
    id: 6,
    marca: "Nissan",
    modelo: "Xtrail",
    año: 2020,
    precio: "$5.990.000",
    kilometraje: "95 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/103.jpg", "/25.jpg", "/26.jpg", "/20.jpg", "/53.jpg"]
  },
   {
    id: 7,
    marca: "Nissan",
    modelo: "Sentra",
    año: 2012,
    precio: "$1.790.000",
    kilometraje: "99 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 6 millones.",
    nuevo: true,
    imagenes: ["/64.jpg", "/65.jpg", "/66.jpg", "/67.jpg"]
  },
   {
    id: 8,
    marca: "Volvo",
    modelo: "Xc60 ll T5",
    año: 2019,
    precio: "$9.990.000",
    kilometraje: "87 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 26 millones.",
    nuevo: true,
    imagenes: ["/24.jpg", "/50.jpg", "/51.jpg", "/52.jpg"]
  },
  {
    id: 9,
    marca: "Volkswagen",
    modelo: "Nivus Tsi",
    año: 2023,
    precio: "$7.590.000",
    kilometraje: "38 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    transmision: "Manual",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg", "/17.jpg"]
  },
  {
    id: 10,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$3.890.000",
    kilometraje: "80 mil kilómetros",
    transmision: "(Automático)",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. La compañía de seguros pagó 9millones al dueño.",
    nuevo: true,
    imagenes: ["/cherytigo2-4.jpg","/cherytigo2-3.jpg","/cherytigo2-2.jpg","/cherytigo2-1.jpg"]
  },
  

  
]
