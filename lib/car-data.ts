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
    marca: "Jeep",
    modelo: "Grand Cherokee Limited",
    año: 2017,
    precio: "$10.990.000",
    kilometraje: "170 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 19 millones.",
    nuevo: true,
    imagenes: ["/40.jpg", "/41.jpg", "/42.jpg", "/12.jpg", "/47.jpg"]
  },
 {
    id: 2,
    marca: "Kia",
    modelo: "Sportage",
    año: 2023,
    precio: "$12.990.000",
    kilometraje: "40 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 21 millones.",
    nuevo: true,
    imagenes: ["/87.jpg", "/89.jpg", "/90.jpg", "/94.jpg", "/95.jpg"]
  },
   {
    id:3,
    marca: "Volkswagen",
    modelo: "Touareg Tdi",
    año: 2016,
    precio: "$8.990.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 20 millones.",
    nuevo: true,
    imagenes: ["/43.jpg", "/44.jpg", "/16.jpg", "/25.jpg", "/26.jpg"]
  },
    {
    id: 4,
    marca: "Toyota",
    modelo: "Yaris",
    año: 2026,
    precio: "$8.490.000",
    kilometraje: "4 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/Buggy5.jpg", "/93.jpg", "/22.jpg", "/35.jpg"]
  },
    {
    id: 5,
    marca: "Nissan",
    modelo: "Kick",
    año: 2020,
    precio: "$7.490.000",
    kilometraje: "67 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/65.jpg", "/37.jpg", "/114.jpg", "/29.jpg", "/10.jpg"]
  },
  {
    id: 6,
    marca: "Kia",
    modelo: "Morning",
    año: 2019,
    precio: "$5.990.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/74.jpg", "/59.jpg", "/30.jpg", "/88.jpg", "/62.jpg"]
  },
  {
    id: 7,
    marca: "Mg",
    modelo: "Zs",
    año: 2019,
    precio: "$5.490.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/104.jpg", "/105.jpg", "/106.jpg", "/18.jpg", "/13.jpg"]
  },
    {
    id: 8,
    marca: "Chery",
    modelo: "Tiggo 2 Pro",
    año: 2024,
    precio: "$5.490.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/80.jpg""/86.jpg", "/45.jpg", "/46.jpg", "/103.jpg"]
  },
   {
    id: 9,
    marca: "Ford",
    modelo: "Territory",
    año: 2021,
    precio: "$8.990.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/Buggy4.jpg", "/Buggy3.jpg", "/Buggy2.jpg", "/Buggy1.jpg"]
  },
  {
    id: 10,
    marca: "Suzuki",
    modelo: "Grand Vitara Glx Sport",
    año: 2015,
    precio: "$4.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/8.jpg", "/9.jpg", "/33.jpg", "/49.jpg"]
  },
   {
    id: 11,
    marca: "Subaru",
    modelo: "Impreza sport",
    año: 2020,
    precio: "$6.990.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/81.jpg", "/82.jpg", "/27.jpg", "/28.jpg"]
  },
 {
    id: 12,
     marca: "Mazda",
    modelo: "Cx3",
    año: 2019,
    precio: "$7.990.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/58.jpg", "/107.jpg", "/92.jpg", "/76.jpg"]
  },
  {
    id: 13,
    marca: "Mercedes",
    modelo: "C180",
    año: 2014,
    precio: "$6.590.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/31.jpg", "/32.jpg", "/19.jpg", "/84.jpg", "/120.jpg"]
  },
  {
    id: 14,
    marca: "Chevrolet",
    modelo: "Ónix",
    año: 2018,
    precio: "$4.690.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/21.jpg",  "/1.jpg", "/108.jpg", "/109.jpg"]
  },
  {
    id: 15,
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
    id: 16,
    marca: "Chevrolet",
    modelo: "Groove premier",
    año: 2021,
    precio: "$6.290.000",
    kilometraje: "94 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/24.jpg", "/50.jpg", "/51.jpg", "/52.jpg", "/91.jpg"]
  },

  

  
]
