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
    marca: "Jmc",
    modelo: "Vigus exclusive",
    año: 2025,
    precio: "$10.990.000",
    kilometraje: "26 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 19 millones.",
    nuevo: true,
    imagenes: ["/43.jpg", "/44.jpg", "/16.jpg", "/92.jpg", "/76.jpg"]
  },
 {
    id: 2,
    marca: "Renault",
    modelo: "Clio 0.9Turbo",
    año: 2019,
    precio: "$5.490.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/23.jpg", "/56.jpg", "/57.jpg", "/36.jpg", "/68.jpg"]
  },
    {
    id: 3,
    marca: "Suzuki",
    modelo: "Swift Glx",
    año: 2019,
    precio: "$6.990.000",
    kilometraje: "78 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/71.jpg", "/83.jpg", "/73.jpg", "/67.jpg"]
  },
    {
    id: 4,
    marca: "Chevrolet",
    modelo: "Suburban",
    año: 2009,
    precio: "$3.990.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9.5 millones.",
    nuevo: true,
    imagenes: ["/31.jpg", "/32.jpg", "/19.jpg", "/84.jpg", "/120.jpg"]
  },
   {
    id: 5,
    marca: "Citroen",
    modelo: "C3",
    año: 2020,
    precio: "$4.990.000",
    kilometraje: "108 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/18.jpg", "/13.jpg", "/62.jpg", "/10.jpg", "/Buggy5.jpg"]
  },
  {
    id: 6,
    marca: "Mazda",
    modelo: "Bt50 (4x4)",
    año: 2021,
    precio: "$8.990.000",
    kilometraje: "130 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 19 millones.",
    nuevo: true,
    imagenes: ["/8.jpg", "/9.jpg", "/33.jpg", "/49.jpg"]
  },
  {
    id: 7,
    marca: "Ford",
    modelo: "Territory Titanium",
    año: 2023,
    precio: "$9.490.000",
    kilometraje: "15 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/74.jpg", "/59.jpg", "/30.jpg", "/88.jpg", "/72.jpg"]
  },
   {
    id: 9,
     marca: "Chery",
    modelo: "Tiggo 3",
    año: 2019,
    precio: "$3.990.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/22.jpg", "/35.jpg", "/12.jpg"]
  },
 {
    id: 10,
    marca: "Peugeot",
    modelo: "2008",
    año: 2025,
    precio: "$15.990.000",
    kilometraje: "77 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 28 millones.",
    nuevo: true,
    imagenes: ["/86.jpg", "/45.jpg", "/46.jpg", "/47.jpg", "/38.jpg"]
  },
  {
    id: 11,
    marca: "Nissan",
    modelo: "Kick Exclusive",
    año: 2021,
    precio: "$7.990.000",
    kilometraje: "47 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/100.jpg", "/101.jpg", "/107.jpg"]
  },
 {
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
