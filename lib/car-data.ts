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
    marca: "Hyundai",
    modelo: "Grand i10",
    año: 2025,
    precio: "$6.990.000",
    kilometraje: "12 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/37.jpg", "/116.jpg", "/123.jpg", "/87.jpg"]
  },
{
    id: 2,
    marca: "Kia",
    modelo: "Soluto",
    año: 2020,
    precio: "$5.490.000",
    kilometraje: "128 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/92.jpg", "/100.jpg", "/101.jpg", "/107.jpg", "/60.jpg"]
  },
{
    id: 3,
    marca: "Mitsubishi",
    modelo: "Mirage",
    año: 2015,
    precio: "$3.990.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/29.jpg", "/31.jpg", "/32.jpg", "/19.jpg"]
  },
  {
    id: 4,
    marca: "Furgón Changan",
    modelo: "M201",
    año: 2023,
    precio: "$3.990.000",
    kilometraje: "54 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/108.jpg", "/109.jpg", "/111.jpg", "/112.jpg"]
  },
 {
    id: 5,
    marca: "Citroen",
    modelo: "C3",
    año: 2024,
    precio: "$6.900.000",
    kilometraje: "29 mil kilómetros",
    estado: "Se va andando",
    transmision: "Manual",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/41.jpg", "/42.jpg", "/43.jpg", "/44.jpg", "/16.jpg"]
  },
    {
    id: 6,
    marca: "Nissan",
    modelo: "Qashqai",
    año: 2015,
    precio: "$4.990.000",
    kilometraje: "200 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/36.jpg", "/38.jpg", "/39.jpg", "/40.jpg", "/80.jpg"]
  },
    {
    id: 7,
    marca: "Nissan",
    modelo: "Xtrail",
    año: 2020,
    precio: "$7.990.000",
    kilometraje: "95 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/103.jpg", "/25.jpg", "/26.jpg", "/20.jpg", "/53.jpg"]
  },
 {
    id: 8,
    marca: "Hyundai",
    modelo: "Verna",
    año: 2020,
    precio: "$5.490.000",
    kilometraje: "49 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/68.jpg", "/121.jpg", "/122.jpg", "/90.jpg"]
  },
   {
    id: 9,
    marca: "Chevrolet",
    modelo: "Ónix Rs",
    año: 2023,
    precio: "$5.990.000",
    kilometraje: "58 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/86.jpg", "/45.jpg", "/46.jpg", "/47.jpg"]
  },
   {
    id: 10,
    marca: "Mazda",
    modelo: "Cx5 R",
    año: 2019,
    precio: "$6.990.000",
    kilometraje: "89 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/2.jpg", "/3.jpg", "/124.jpg"]
  },
  {
    id: 11,
    marca: "Chevrolet",
    modelo: "Prisma Ltz",
    año: 2018,
    precio: "$2.990.000",
    kilometraje: "48 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/14.jpg", "/15.jpg", "/59.jpg"]
  },
  {
    id: 12,
    marca: "Peugeot",
    modelo: "208",
    año: 2016,
    precio: "$4.990.000",
    kilometraje: "122 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/118.jpg", "/119.jpg", "/120.jpg", "/23.jpg"]
  },
  {
    id: 13,
    marca: "Jeep",
    modelo: "Renegade",
    año: 2022,
    precio: "$4.990.000",
    kilometraje: "22 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/81.jpg", "/82.jpg", "/85.jpg", "/114.jpg"]
  },
   {
    id: 14,
    marca: "Seat",
    modelo: "Ateca",
    año: 2024,
    precio: "$6.590.000",
    kilometraje: "50 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/4.jpg", "/11.jpg", "/27.jpg", "/28.jpg"]
  },
   {
    id: 15,
    marca: "Nissan",
    modelo: "Sentra",
    año: 2012,
    precio: "$1.990.000",
    kilometraje: "99 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 6 millones.",
    nuevo: true,
    imagenes: ["/64.jpg", "/65.jpg", "/66.jpg", "/67.jpg"]
  },
  {
    id: 16,
    marca: "Hyundai",
    modelo: "Santa Fe Crdi",
    año: 2018,
    precio: "$12.990.000",
    kilometraje: "69 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 30 millones.",
    nuevo: true,
    imagenes: ["/56.jpg", "/57.jpg", "/72.jpg", "/74.jpg", "/12.jpg"]
  },
   {
    id: 17,
    marca: "BMW",
    modelo: "320D Luxury",
    año: 2014,
    precio: "$6.990.000",
    kilometraje: "280 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/55.jpg", "/110.jpg", "/113.jpg", "/115.jpg", "/61.jpg"]
  },
  {
    id: 18,
    marca: "Volvo",
    modelo: "Xc60 ll T5",
    año: 2019,
    precio: "$10.590.000",
    kilometraje: "87 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 26 millones.",
    nuevo: true,
    imagenes: ["/24.jpg", "/50.jpg", "/51.jpg", "/52.jpg"]
  },
  {
    id: 19,
    marca: "Mg",
    modelo: "Zs",
    año: 2025,
    precio: "$4.990.000",
    kilometraje: "10 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/18.jpg", "/13.jpg", "/62.jpg", "/10.jpg"]
  },
{
    id: 20,
    marca: "Mg",
    modelo: "Zx",
    año: 2026,
    precio: "$5.990.000",
    kilometraje: "2000 kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/76.jpg", "/77.jpg", "/84.jpg", "/88.jpg", "/91.jpg"]
  },
  {
    id: 21,
    marca: "Volkswagen",
    modelo: "Nivus Tsi",
    año: 2023,
    precio: "$7.790.000",
    kilometraje: "38 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    transmision: "Manual",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg", "/17.jpg"]
  },
   {
    id: 22,
    marca: "Citroen",
    modelo: "C3 Hb",
    año: 2021,
    precio: "$4.790.000",
    kilometraje: "63 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    transmision: "Manual",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/34.jpg", "/117.jpg", "/22.jpg", "/35.jpg"]
  },
  {
    id: 23,
    marca: "Hyundai",
    modelo: "venue",
    año: 2023,
    precio: "$5.690.000",
    kilometraje: "77 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg","/9.jpg"]
  },
   {
    id: 24,
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
    id: 25,
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
