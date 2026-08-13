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
    marca: "Kia",
    modelo: "Sportage",
    año: 2018,
    precio: "$7.490.000",
    kilometraje: "80 mil kilómetros, NUEVO",
    estado: "Se va andando",
    transmision: "Manual",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/78.jpg", "/81.jpg", "/82.jpg", "/85.jpg"]
  },
   {
    id: 2,
    marca: "Toyota",
    modelo: "Rav 4 Adventure",
    año: 2019,
    precio: "$7.990.000",
    kilometraje: "117 mil kilómetros",
    estado: "Se va andando",
    transmision: "Manual",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/1.jpg", "/2.jpg", "/3.jpg", "/18.jpg"]
  },
   {
    id: 3,
    marca: "Chevrolet",
    modelo: "Groove",
    año: 2025,
    precio: "$7.990.000",
    kilometraje: "23 mil kilómetros",
    estado: "Se va andando",
    transmision: "Manual",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/41.jpg", "/42.jpg", "/43.jpg", "/44.jpg"]
  },
   {
    id: 4,
    marca: "Hyundai",
    modelo: "venue",
    año: 2023,
    precio: "$6.990.000",
    kilometraje: "77 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg","/9.jpg"]
  },
  {
    id: 5,
    marca: "Renault",
    modelo: "Koleos",
    año: 2022,
    precio: "$6.890.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/103.jpg", "/25.jpg", "/26.jpg"]
  },
{
    id: 6,
    marca: "Mazda",
    modelo: "2 sedan",
    año: 2016,
    precio: "$4.690.000",
    kilometraje: "160 mil kilómetros, NUEVO",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/123.jpg", "/87.jpg", "/48.jpg", "/80.jpg", "/16.jpg"]
  },
   {
    id: 7,
    marca: "Toyota",
    modelo: "Raize",
    año: 2022,
    precio: "$4.990.000",
    kilometraje: "40 mil kilómetros, NUEVO",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/36.jpg", "/38.jpg", "/39.jpg", "/40.jpg"]
  },
   {
    id: 8,
    marca: "Nissan",
    modelo: "Sentra Advance",
    año: 2017,
    precio: "$5.490.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9.5 millones.",
    nuevo: true,
    imagenes: ["/118.jpg", "/119.jpg", "/120.jpg", "/23.jpg", "/24.jpg"]
  },
    {
    id: 9,
    marca: "Mazda",
    modelo: "3 sport Hb",
    año: 2014,
    precio: "$4.990.000",
    kilometraje: "120 mil kilómetros, NUEVO",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/14.jpg", "/15.jpg", "/59.jpg", "/60.jpg"]
  },
 {
    id: 10,
    marca: "Renault",
    modelo: "Alaskan (4x4)",
    año: 2018,
    precio: "$7.990.000",
    kilometraje: "200 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 18 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/29.jpg", "/31.jpg", "/32.jpg", "/53.jpg"]
  },
 {
    id: 11,
    marca: "Suzuki",
    modelo: "Baleno",
    año: 2019,
    precio: "$4.790.000",
    kilometraje: "105 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/12.jpg", "/13.jpg", "/62.jpg", "/10.jpg", "/20.jpg"]
  },
   {
    id: 12,
    marca: "Nissan",
    modelo: "Sentra",
    año: 2022,
    precio: "$6.990.000",
    kilometraje: "104 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de piloto",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg", "/17.jpg"]
  },
  {
    id: 13,
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
    id: 14,
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
