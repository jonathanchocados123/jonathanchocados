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
    modelo: "kick",
    año: 2018,
    precio: "$5.690.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/121.jpg", "/122.jpg", "/123.jpg", "/124.jpg", "/93.jpg"]
  },
 {
    id: 2,
    marca: "Audi",
    modelo: "a3 Sportback 1.4Turbo",
    año: 2014,
    precio: "$7.690.000",
    kilometraje: "117 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 9.5 millones.",
    nuevo: true,
    imagenes: ["/25.jpg", "/26.jpg", "/27.jpg", "/37.jpg", "/43.jpg"]
  },
 {
    id: 3,
    marca: "Moto BMW",
    modelo: "G310",
    año: 2026,
    precio: "$4.990.000",
    kilometraje: "800 kilómetros, nueva",
    estado: "Se va andando",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/104.jpg", "/105.jpg", "/106.jpg", "/28.jpg"]
  },
{
    id: 4,
    marca: "Mazda",
    modelo: "CX9 GT",
    año: 2014,
    precio: "$4.990.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    transmision: "Automatica",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/110.jpg", "/113.jpg", "/115.jpg", "/116.jpg", "/117.jpg"]
  },
 {
    id: 5,
    marca: "Kia",
    modelo: "Sportage",
    año: 2017,
    precio: "$6.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/12.jpg", "/13.jpg", "/14.jpg", "/15.jpg"]
  },
 {
    id: 6,
    marca: "Ram",
    modelo: "Van 700 Rapid",
    año: 2021,
    precio: "$2.590.000",
    kilometraje: "220 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg"]
  },
  {
    id: 7,
    marca: "Renault",
    modelo: "Dokker",
    año: 2018,
    precio: "$3.590.000",
    kilometraje: "130 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7.5 millones.",
    nuevo: true,
    imagenes: ["/118.jpg", "/119.jpg", "/120.jpg"]
  },
 {
    id: 8,
    marca: "Honda",
    modelo: "Pilot Ex",
    año: 2011,
    precio: "$3.790.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/45.jpg", "/46.jpg", "/47.jpg", "/48.jpg"]
  },

  {
    id: 9,
    marca: "Peugeot",
    modelo: "3008",
    año: 2019,
    precio: "$6.490.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/50.jpg", "/51.jpg", "/52.jpg", "/53.jpg"]
  },
 {
    id: 10,
    marca: "Chevrolet",
    modelo: "Groove Premier",
    año: 2023,
    precio: "$5.690.000",
    kilometraje: "9 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/90.jpg", "/86.jpg", "/103.jpg"]
  },
  {
    id: 11,
    marca: "Changan",
    modelo: "Alsvin",
    año: 2021,
    precio: "$4.290.000",
    kilometraje: "37 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/83.jpg", "/73.jpg", "/70.jpg", "/71.jpg"]
  },
  {
    id: 12,
    marca: "Volkswagen",
    modelo: "Amarok Highline",
    año: 2019,
    precio: "$12.890.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 22 millones.",
    nuevo: true,
    imagenes: ["/78.jpg", "/81.jpg",  "/82.jpg", "/85.jpg", "/87.jpg"]
  },
  {
    id: 13,
    marca: "Nissan",
    modelo: "Murano",
    año: 2013,
    precio: "$4.290.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/96.jpg", "/97.jpg", "/98.jpg", "/99.jpg"]
  },
 {
    id: 14,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$4.290.000",
    kilometraje: "80 mil kilómetros",
    transmision: "(Automático)",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. La compañía de seguros pagó 9millones al dueño.",
    nuevo: true,
    imagenes: ["/cherytigo2-4.jpg","/cherytigo2-3.jpg","/cherytigo2-2.jpg","/cherytigo2-1.jpg"]
  },
   {
    id: 15,
    marca: "Buggy ",
    modelo: "Can-Am  maverick X3 Turbo",
    año: 2020,
    precio: "$19.890.000",
    kilometraje: "59 mil km",
     estado: "Se va andando",
    descripcion: "Extensiones de puertas.",
    nuevo: true,
    imagenes: ["/Buggy5.jpg", "/Buggy4.jpg", "/Buggy3.jpg","/Buggy2.jpg", "/Buggy1.jpg", "/Buggy.jpg"]
  },
 {
    id: 16,
    marca: "Dodge",
    modelo: "Dakota Sxt ",
    año: 2011,
    precio: "$2.790.000",
    kilometraje: "220 mil km",
    transmision: "Automática",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7.5 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg","/9.jpg"]
  },
  
]
