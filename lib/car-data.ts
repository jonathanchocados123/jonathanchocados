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
    marca: "Bmw",
    modelo: "X1 SDrive20i Luxury",
    año: 2018,
    precio: "$8.990.000",
    kilometraje: "79 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 18 millones.",
    nuevo: true,
    imagenes: ["/15.jpg", "/20.jpg", "/25.jpg", "/26.jpg", "/27.jpg", "/28.jpg"]
  },
  {
    id: 2,
    marca: "Jetour",
    modelo: "Dashing",
    año: 2026,
    precio: "$8.490.000",
    kilometraje: "2 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 17 millones.",
    nuevo: true,
    imagenes: ["/4.jpg", "/11.jpg", "/14.jpg", "/34.jpg", "/39.jpg"]
  },
  {
    id: 3,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2013,
    precio: "$4.990.000",
    kilometraje: "96 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/Buggy4.jpg", "/Buggy3.jpg", "/Buggy2.jpg", "/Buggy1.jpg"]
  },
  {
    id: 4,
    marca: "Nissan",
    modelo: "March Sport",
    año: 2018,
    precio: "$4.990.000",
    kilometraje: "34 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/40.jpg", "/41.jpg", "/42.jpg", "/48.jpg"]
  },
  {
    id: 5,
    marca: "Nissan",
    modelo: "Tiida",
    año: 2013,
    precio: "$3.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/53.jpg", "/55.jpg", "/61.jpg", "/64.jpg"]
  },
  {
    id: 6,
    marca: "Chery",
    modelo: "Tiggo 2 Pro Max",
    año: 2026,
    precio: "$5.490.000",
    kilometraje: "4 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/77.jpg", "/78.jpg", "/79.jpg", "/80.jpg"]
  },
  {
    id: 7,
    marca: "Bajaj",
    modelo: "Pulsar 200 Ns",
    año: 2022,
    precio: "$890.000",
    kilometraje: "40 mil kilómetros",
    estado: "Se va andando",
    descripcion: "Seguro pagó 2 millones.",
    nuevo: true,
    imagenes: ["/81.jpg", "/82.jpg"]
  },
  {
    id: 8,
    marca: "Ford",
    modelo: "F150",
    año: 2024,
    precio: "$19.990.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 37 millones.",
    nuevo: true,
    imagenes: ["/87.jpg", "/89.jpg", "/90.jpg", "/94.jpg", "/95.jpg"]
  },
  {
    id: 9,
    marca: "Lexus",
    modelo: "Ux300H Premium (Hrybrido)",
    año: 2026,
    precio: "$19.990.000",
    kilometraje: "8 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 36 millones.",
    nuevo: true,
    imagenes: ["/96.jpg", "/97.jpg", "/98.jpg", "/99.jpg", "/102.jpg"]
  },
  {
    id: 10,
    marca: "Volkswagen",
    modelo: "Touareg Tdi",
    año: 2016,
    precio: "$10.990.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 23 millones.",
    nuevo: true,
    imagenes: ["/103.jpg", "/104.jpg", "/105.jpg", "/106.jpg", "/110.jpg"]
  },
   {
    id: 11,
    marca: "RAM",
    modelo: "700 BigHorn",
    año: 2021,
    precio: "$8.490.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de asiento",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/23.jpg", "/56.jpg", "/57.jpg", "/36.jpg"]
  },
  {
    id: 12,
    marca: "Kia",
    modelo: "Sonet",
    año: 2022,
    precio: "$7.990.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/8.jpg", "/9.jpg", "/33.jpg", "/49.jpg"]
  },
    {
    id: 13,
    marca: "Suzuki",
    modelo: "Dzire Glx",
    año: 2023,
    precio: "$5.990.000",
    kilometraje: "30 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/111.jpg", "/112.jpg"]
  },
  {
    id: 14,
    marca: "Bmw",
    modelo: "530D Premium (Diesel)",
    año: 2014,
    precio: "$8.590.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/71.jpg", "/83.jpg", "/73.jpg", "/67.jpg", "/66.jpg", "/7.jpg"]
  },
{
    id: 15,
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
    id: 16,
    marca: "Renault",
    modelo: "Clio RS",
    año: 2016,
    precio: "$8.990.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/100.jpg", "/101.jpg", "/85.jpg"]
  },
    {
    id: 17,
    marca: "Mitsubishi",
    modelo: "Outlander Glx (4x4)",
    año: 2020,
    precio: "$8.990.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/74.jpg", "/59.jpg", "/30.jpg", "/88.jpg", "/72.jpg"]
  },
    {
    id: 18,
    marca: "Suzuki",
    modelo: "Swift Glx",
    año: 2019,
    precio: "$5.990.000",
    kilometraje: "78 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/65.jpg", "/37.jpg", "/114.jpg", "/29.jpg"]
  },
  {
    id: 19,
    marca: "Mercedes",
    modelo: "C180",
    año: 2014,
    precio: "$6.990.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/31.jpg", "/32.jpg", "/19.jpg", "/84.jpg", "/120.jpg"]
  },
 {
    id: 20,
    marca: "Furgón Chevrolet",
    modelo: "N300",
    año: 2017,
    precio: "$1.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 6 millones.",
    nuevo: true,
    imagenes: ["/43.jpg", "/44.jpg", "/16.jpg"]
  },
  {
    id: 21,
     marca: "Peugeot",
    modelo: "3008",
    año: 2014,
    precio: "$3.990.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/22.jpg", "/35.jpg", "/12.jpg"]
  },
  {
    id: 22,
    marca: "Citroen",
    modelo: "C3",
    año: 2020,
    precio: "$3.990.000",
    kilometraje: "108 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/18.jpg", "/13.jpg", "/62.jpg", "/10.jpg", "/Buggy5.jpg"]
  },

  {
    id: 23,
    marca: "Peugeot",
    modelo: "2008",
    año: 2025,
    precio: "$13.990.000",
    kilometraje: "77 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 28 millones.",
    nuevo: true,
    imagenes: ["/86.jpg", "/45.jpg", "/46.jpg", "/47.jpg", "/38.jpg"]
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
    id: 27,
    marca: "Chevrolet",
    modelo: "Groove Ltz",
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
