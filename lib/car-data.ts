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
    modelo: "X Trail Advance",
    año: 2018,
    precio: "$8.990.000",
    kilometraje: "110 mil kilómetros",
    transmision: "Automática",
    estado: "Se va andando Recuperada de robo",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/16.jpg", "/119.jpg", "/120.jpg", "/121.jpg", "/122.jpg", "/75.jpg"]
  },
 {
    id: 2,
    marca: "Audi",
    modelo: "Q5 Quattro",
    año: 2016,
    precio: "$9.990.000",
    kilometraje: "117 mil kilómetros",
    transmision: "Automática",
    estado: "Se va andando, Poco daño",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 17 millones.",
    nuevo: true,
    imagenes: ["/86.jpg", "/87.jpg", "/88.jpg", "/89.jpg", "/90.jpg", "/76.jpg"]
  },
 {
    id: 3,
    marca: "Ford",
    modelo: "Edge",
    año: 2019,
    precio: "$10.990.000",
    kilometraje: "53 mil kilómetros",
    estado: "Se va andando",
    transmision: "Automática",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 17 millones.",
    nuevo: true,
    imagenes: ["/12.jpg", "/11.jpg", "/13.jpg", "/14.jpg", "/15.jpg"]
  },
  {
    id: 4,
    marca: "Nissan",
    modelo: "Qashqai",
    año: 2016,
    precio: "$6.990.000",
    kilometraje: "105 mil kilómetros",
    estado: "Se va andando",
    transmision: "Manual",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/110.jpg", "/111.jpg", "/112.jpg", "/113.jpg"]
  },
 {
    id: 5,
    marca: "Chevrolet",
    modelo: "Orlando",
    año: 2015,
    precio: "$4.690.000",
    kilometraje: "170 mil kilómetros",
    transmision: "Manual-Diesel",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/4.jpg", "/10.jpg", "/100.jpg", "/101.jpg"]
  },
 {
    id: 6,
    marca: "Changan",
    modelo: "Cx70 Elite 1.5T",
    año: 2022,
    precio: "$6.990.000",
    transmision: "Manual", 
    kilometraje: "42 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["24.jpg", "/25.jpg", "/26.jpg", "/27.jpg"]
  },
  {
    id: 7,
    marca: "Chevrolet",
    modelo: "Groove Ltz",
    año: 2021,
    precio: "$5.690.000",
    kilometraje: "50 mil kilómetros",
    estado: "Se va andando",
    transmision: "Manual",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["30.jpg", "31.jpg", "/34.jpg", "/37.jpg"]
  },
  {
    id: 8,
    marca: "Volkswagen",
    modelo: "GOL",
    año: 2016,
    precio: "$3.990.000",
    kilometraje: "115 mil kilómetros",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["45.jpg", "46.jpg", "/47.jpg", "/48.jpg"]
  },
  {
    id: 9,
    marca: "Ford",
    modelo: "Focus Titanium",
    año: 2018,
    precio: "$5.690.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["54.jpg", "/55.jpg", "/56.jpg", "/57.jpg", "/58.jpg"]
  },
 {
    id: 10,
    marca: "Kia",
    modelo: "Rio 5",
    año: 2017,
    precio: "$5.990.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/83.jpg", "/73.jpg", "/70.jpg", "/71.jpg"]
  },
{
    id: 11,
    marca: "Ford",
    modelo: "Edge",
    año: 2014,
    precio: "$4.590.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/80.jpg", "/81.jpg", "/82.jpg", "/84.jpg", "/85.jpg"]
  },
 
  {
    id: 12,
    marca: "Honda",
    modelo: "Wrv",
    año: 2022,
    precio: "$6.990.000",
    kilometraje: "67 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/91.jpg", "/92.jpg", "/93.jpg", "/94.jpg", "/95.jpg"]
  },
  {
    id: 13,
    marca: "Nissan",
    modelo: "Murano",
    año: 2013,
    precio: "$4.590.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/96.jpg", "/97.jpg", "/98.jpg", "/99.jpg"]
  },
  {
    id: 14,
    marca: "Honda",
    modelo: "Hrv",
    año: 2018,
    precio: "$6.990.000",
    kilometraje: "110 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/64.jpg", "/65.jpg", "/66.jpg", "/67.jpg", "/68.jpg"]
  },

{
    id: 15,
    marca: "Volvo",
    modelo: "S60 T3",
    año: 2019,
    precio: "$7.590.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/29.jpg", "/35.jpg", "/36.jpg", "126.jpg"]
  },
    {
    id: 16,
    marca: "Great Wall",
    modelo: "M4",
    año: 2021,
    precio: "$4.590.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "24.jpg"]
  },
   {
    id: 17,
    marca: "Kia",
    modelo: "Rio",
    año: 2017,
    precio: "$4.990.000",
    kilometraje: "200 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["28.jpg", "/50.jpg", "/51.jpg", "/52.jpg", "/53.jpg"]
  },
 {
    id: 18,
    marca: "Nissan",
    modelo: "Kick Advance",
    año: 2018,
    precio: "$6.590.000",
    kilometraje: "103 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["59.jpg", "/60.jpg", "/61.jpg", "/62.jpg", "/63.jpg"]
  },
    {
    id: 19,
    marca: "Peugeot",
    modelo: "3008",
    año: 2020,
    precio: "$6.890.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13.5 millones.",
    nuevo: true,
    imagenes: ["/106.jpg", "/107.jpg", "/108.jpg"]
  },
  {
    id: 20,
    marca: "Renault",
    modelo: "Sandero Stepway",
    año: 2011,
    precio: "$1.590.000",
    kilometraje: "140 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 6 millones.",
    nuevo: true,
    imagenes: ["/72.jpg", "/74.jpg", "/SubaruXv2.jpg", "/SubaruXv1.jpg"]
  },
{
    id: 21,
    marca: "Chevrolet",
    modelo: "traverse",
    año: 2014,
    precio: "$6.790.000",
    kilometraje: "149 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/32.jpg", "/33.jpg", "/3.jpg", "/1.jpg", "/2.jpg"]
  },
  {
    id: 22,
    marca: "Jaguar",
    modelo: "F-Pace 20D(DIESEL)",
    año: 2018,
    precio: "$16.390.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 28 millones.",
    nuevo: true,
    imagenes: ["/39.jpg", "/40.jpg", "/41.jpg", "/42.jpg", "/43.jpg", "/44.jpg"]
  },
  {
    id: 23,
    marca: "Chrysler",
    modelo: "200",
    año: 2014,
    precio: "$4.290.000",
    kilometraje: "70 mil km",
    transmision: "Automático",
    estado: "Se va andando",
    airbag: "No informado",
    descripcion: "Recuperado de robo. Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/c200-3.jpg", "/c200-1.jpg", "/c200-2.jpg", "/c200-4.jpg"]
  },
  {
    id: 24,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$4.290.000",
    kilometraje: "80mil kilómetros",
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
    precio: "$19.890.000",
    kilometraje: "5900 mil km",
     estado: "Se va andando",
    descripcion: "Extensiones de puertas.",
    nuevo: true,
    imagenes: ["/Buggy5.jpg", "/Buggy4.jpg", "/Buggy3.jpg","/Buggy2.jpg", "/Buggy1.jpg", "/Buggy.jpg"]
  },
 {
    id: 26,
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
