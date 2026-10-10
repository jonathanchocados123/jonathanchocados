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
    marca: "RAM",
    modelo: "1000 Big Horn",
    año: 2023,
    precio: "$8.990.000",
    kilometraje: "65 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 19 millones.",
    nuevo: true,
    imagenes: ["/7.jpg", "/8.jpg","/9.jpg", "/70.jpg", "/88.jpg"]
  },
  {
    id: 2,
    marca: "Chevrolet",
    modelo: "Sail",
    año: 2026,
    precio: "$6.490.000",
    kilometraje: "15 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/31.jpg", "/32.jpg", "/19.jpg", "/84.jpg"]
  },
  {
    id: 3,
    marca: "Kia",
    modelo: "morning",
    año: 2019,
    precio: "$4.990.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/103.jpg", "/25.jpg", "/26.jpg", "/20.jpg", "/53.jpg"]
  },
{
    id: 4,
    marca: "Ford",
    modelo: "Fiesta",
    año: 2018,
    precio: "$4.990.000",
    kilometraje: "110 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/85.jpg", "/76.jpg", "/67.jpg", "/66.jpg"]
  },
  {
    id: 5,
    marca: "Subaru",
    modelo: "Impreza",
    año: 2018,
    precio: "$5.990.000",
    kilometraje: "95 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/86.jpg", "/45.jpg", "/46.jpg", "/47.jpg", "/38.jpg"]
  },
  {
    id: 6,
    marca: "Honda",
    modelo: "Pilot",
    año: 2014,
    precio: "$4.990.000",
    kilometraje: "118 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/111.jpg", "/112.jpg", "/42.jpg", "/116.jpg"]
  },
  {
    id: 7,
    marca: "Volvo",
    modelo: "V40 D2",
    año: 2017,
    precio: "$4.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/23.jpg", "/56.jpg", "/57.jpg", "/72.jpg"]
  },
   {
    id: 8,
    marca: "Nissan",
    modelo: "Versa",
    año: 2015,
    precio: "$3.490.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/43.jpg", "/44.jpg", "/16.jpg", "/92.jpg"]
  },
  {
    id: 9,
    marca: "Chevrolet",
    modelo: "Ónix",
    año: 2018,
    precio: "$4.990.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/21.jpg",  "/1.jpg", "/108.jpg", "/109.jpg"]
  },
  {
    id: 10,
    marca: "Volvo",
    modelo: "Xc60 ll T5 (4x4)",
    año: 2019,
    precio: "$9.990.000",
    kilometraje: "87 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 26 millones.",
    nuevo: true,
    imagenes: ["/17.jpg", "/2.jpg", "/3.jpg", "/124.jpg"]
  },
  {
    id: 11,
    marca: "Volvo",
    modelo: "S60 D4 Cross Country",
    año: 2019,
    precio: "$15.990.000",
    kilometraje: "96 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 21 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg", "/60.jpg"]
  },
 {
    id: 12,
    marca: "Chevrolet",
    modelo: "Groove Ltz",
    año: 2021,
    precio: "$6.490.000",
    kilometraje: "94 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/24.jpg", "/50.jpg", "/51.jpg", "/52.jpg", "/91.jpg"]
  },
   {
    id: 13,
    marca: "Ford",
    modelo: "Explorer",
    año: 2015,
    precio: "$6.790.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/33.jpg", "/49.jpg", "/58.jpg", "/68.jpg", "/121.jpg"]
  },
  {
    id: 14,
    marca: "Volvo",
    modelo: "S60 Lmted",
    año: 2015,
    precio: "$6.490.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/100.jpg", "/101.jpg", "/107.jpg"]
  },
  {
    id: 15,
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
