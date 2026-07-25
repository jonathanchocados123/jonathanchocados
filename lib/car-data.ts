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
    marca: "Volkswagen",
    modelo: "Golf HighLine",
    año: 2018,
    precio: "$6.490.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperado de robo, Sin llave, comprador hace la llave",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/29.jpg", "/31.jpg", "/32.jpg", "/53.jpg"]
  },
  {
    id: 2,
    marca: "Volkswagen",
    modelo: "Polo",
    año: 2023,
    precio: "$5.990.000",
    kilometraje: "30 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/83.jpg", "/73.jpg", "/70.jpg", "/71.jpg", "/21.jpg"]
  },
  {
    id: 3,
    marca: "Renault",
    modelo: "Fluence",
    año: 2017,
    precio: "$2.490.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 6.5 millones.",
    nuevo: true,
    imagenes: ["/45.jpg", "/46.jpg", "/47.jpg"]
  },
  {
    id: 4,
    marca: "Changan",
    modelo: "Cs15 Luxury",
    año: 2022,
    precio: "$3.390.000",
    kilometraje: "40 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/94.jpg", "/95.jpg", "/4.jpg", "/30.jpg"]
  },
  {
    id: 5,
    marca: "Hyundai",
    modelo: "Accent",
    año: 2021,
    precio: "$7.290.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/12.jpg", "/13.jpg", "/62.jpg", "/10.jpg", "/20.jpg"]
  },
  {
    id: 6,
    marca: "Nissan",
    modelo: "Qashqai",
    año: 2016,
    precio: "$5.990.000",
    kilometraje: "110 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/118.jpg", "/119.jpg", "/120.jpg", "/23.jpg", "/24.jpg"]
  },
 {
    id: 7,
    marca: "Suzuki",
    modelo: "Swift Glx",
    año: 2022,
    precio: "$5.490.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg"]
  },
   {
    id: 8,
    marca: "Toyota",
    modelo: "Yaris Spor",
    año: 2019,
    precio: "$5.290.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/11.jpg", "/64.jpg", "/65.jpg", "/66.jpg"]
  },
   {
    id: 9,
    marca: "Kia",
    modelo: "Seltos",
    año: 2023,
    precio: "$5.890.000",
    kilometraje: "44 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/1.jpg", "/2.jpg", "/3.jpg"]
  },
  {
    id: 10,
    marca: "Chevrolet",
    modelo: "Captiva",
    año: 2018,
    precio: "$4.390.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/41.jpg", "/42.jpg", "/44.jpg"]
  },
 {
    id: 11,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$4.190.000",
    kilometraje: "80 mil kilómetros",
    transmision: "(Automático)",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. La compañía de seguros pagó 9millones al dueño.",
    nuevo: true,
    imagenes: ["/cherytigo2-4.jpg","/cherytigo2-3.jpg","/cherytigo2-2.jpg","/cherytigo2-1.jpg"]
  },
   {
    id: 12,
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
    id: 13,
    marca: "Dodge",
    modelo: "Dakota Sxt ",
    año: 2011,
    precio: "$2.690.000",
    kilometraje: "220 mil km",
    transmision: "Automática",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7.5 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg","/9.jpg"]
  },
  
]
