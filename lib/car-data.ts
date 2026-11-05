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
    marca: "Chevrolet",
    modelo: "Captiva",
    año: 2022,
    precio: "$6.990.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/63.jpg", "/69.jpg", "/75.jpg", "/60.jpg", "/48.jpg"]
  },
   {
    id: 2,
    marca: "Honda",
    modelo: "Pilot Touring",
    año: 2018,
    precio: "$10.990.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 19 millones.",
    nuevo: true,
    imagenes: ["/43.jpg", "/44.jpg", "/16.jpg", "/25.jpg", "/26.jpg"]
  },
 {
    id: 3,
    marca: "Ford",
    modelo: "Territory",
    año: 2021,
    precio: "$8.990.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/53.jpg", "/55.jpg", "/61.jpg", "/110.jpg", "/38.jpg"]
  },
    {
    id: 4,
    marca: "Chevrolet",
    modelo: "Sail",
    año: 2021,
    precio: "$4.490.000",
    kilometraje: "87 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/103.jpg", "/104.jpg", "/105.jpg", "/106.jpg"]
  },
  {
    id: 5,
    marca: "Nissan",
    modelo: "Versa",
    año: 2023,
    precio: "$6.490.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/86.jpg", "/45.jpg", "/46.jpg", "/47.jpg"]
  },
    {
    id: 6,
    marca: "Suzuki",
    modelo: "Grand Vitara Glx Sport",
    año: 2015,
    precio: "$5.590.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/8.jpg", "/9.jpg", "/33.jpg", "/49.jpg"]
  },
    {
    id: 7,
    marca: "Renault",
    modelo: "Clio 0.9Turbo",
    año: 2019,
    precio: "$5.490.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/40.jpg", "/41.jpg", "/42.jpg"]
  },
   {
    id: 8,
    marca: "Peugeot",
    modelo: "2008(Hybrido)",
    año: 2025,
    precio: "$14.490.000",
    kilometraje: "13 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperado de robo",
    descripcion: "Seguro pagó 25 millones.",
    nuevo: true,
    imagenes: ["/54.jpg"]
  },
  {
    id: 9,
    marca: "Subaru",
    modelo: "Impreza sport",
    año: 2020,
    precio: "$7.490.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/81.jpg", "/82.jpg", "/27.jpg", "/28.jpg"]
  },
  {
    id: 10,
    marca: "Suzuki",
    modelo: "Swift Sport",
    año: 2014,
    precio: "$6.490.000",
    kilometraje: "145 mil kilómetros",
    estado: "Se va andando",
    airbag: "Airbag de cortina y asiento sellado",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/111.jpg", "/112.jpg", "/64.jpg", "/39.jpg", "/15.jpg"]
  },
   {
    id: 11,
    marca: "Chevrolet",
    modelo: "Tracker",
    año: 2018,
    precio: "$5.990.000",
    kilometraje: "109 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/74.jpg", "/59.jpg", "/30.jpg", "/88.jpg"]
  },
  {
    id: 12,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2013,
    precio: "$4.590.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/Buggy4.jpg", "/Buggy3.jpg", "/Buggy2.jpg", "/Buggy1.jpg"]
  },
  {
    id: 13,
    marca: "Chery",
    modelo: "Tiggo 2 Pro Max",
    año: 2026,
    precio: "$4.990.000",
    kilometraje: "4 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/77.jpg", "/78.jpg", "/79.jpg", "/80.jpg"]
  },
  {
    id: 14,
    marca: "Ford",
    modelo: "F150",
    año: 2024,
    precio: "$18.990.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 37 millones.",
    nuevo: true,
    imagenes: ["/87.jpg", "/89.jpg", "/90.jpg", "/94.jpg", "/95.jpg"]
  },
  {
    id: 15,
    marca: "Lexus",
    modelo: "Ux300H Premium Hrybrido",
    año: 2026,
    precio: "$18.990.000",
    kilometraje: "8 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 36 millones.",
    nuevo: true,
    imagenes: ["/96.jpg", "/97.jpg", "/98.jpg", "/99.jpg", "/102.jpg"]
  },
   {
    id: 16,
    marca: "RAM",
    modelo: "700 BigHorn",
    año: 2021,
    precio: "$7.990.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de asiento",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/23.jpg", "/56.jpg", "/57.jpg", "/36.jpg"]
  },
 {
    id: 17,
    marca: "Bmw",
    modelo: "530D Premium (Diesel)",
    año: 2014,
    precio: "$7.990.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/71.jpg", "/83.jpg", "/73.jpg", "/67.jpg", "/66.jpg", "/7.jpg"]
  },
{
    id: 18,
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
    id: 19,
    marca: "Renault",
    modelo: "Clio RS",
    año: 2016,
    precio: "$8.690.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/100.jpg", "/101.jpg", "/85.jpg"]
  },
   {
    id: 20,
    marca: "Suzuki",
    modelo: "Swift Glx",
    año: 2019,
    precio: "$5.590.000",
    kilometraje: "78 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/65.jpg", "/37.jpg", "/114.jpg", "/29.jpg"]
  },
  {
    id: 21,
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
    id: 22,
     marca: "Peugeot",
    modelo: "3008",
    año: 2014,
    precio: "$3.590.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/22.jpg", "/35.jpg", "/12.jpg"]
  },
  {
    id: 23,
    marca: "Citroen",
    modelo: "C3",
    año: 2020,
    precio: "$3.790.000",
    kilometraje: "108 mil kilómetros",
    estado: "No parte",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/18.jpg", "/13.jpg", "/62.jpg", "/10.jpg", "/Buggy5.jpg"]
  },
 {
    id: 24,
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
    id: 25,
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
    id: 26,
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
