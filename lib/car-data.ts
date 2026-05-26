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
    modelo: "Sail",
    año: 2025,
    precio: "$6.990.000",
    kilometraje: "12 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/83.jpg", "/73.jpg", "/70.jpg", "/71.jpg", "/91.jpg"]
  },
    {
    id: 2,
    marca: "Nissan",
    modelo: "Versa",
    año: 2023,
    precio: "$7.490.000",
    kilometraje: "40 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/94.jpg", "/95.jpg", "30.jpg"]
  },
 {
    id: 3,
    marca: "Suzuki",
    modelo: "Swift",
    año: 2016,
    precio: "$3.990.000",
    kilometraje: "170 mil kilómetros",
    estado: "Se va andando, Poco daño",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 6.5 millones.",
    nuevo: true,
    imagenes: ["/38.jpg", "/49.jpg", "/44.jpg", "24.jpg"]
  },
   {
    id: 4,
    marca: "Great Wall",
    modelo: "Florid",
    año: 2012,
    precio: "$2.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 6 millones.",
    nuevo: true,
    imagenes: ["/11.jpg", "/12.jpg", "/13.jpg", "/14.jpg", "/15.jpg"]
  },
{
    id: 5,
    marca: "Ford",
    modelo: "Territory Titanium",
    año: 2023,
    precio: "$7.990.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/45.jpg", "/46.jpg", "/47.jpg", "48.jpg"]
  },
 {
    id: 6,
    marca: "Chevrolet",
    modelo: "Groove premier",
    año: 2024,
    precio: "$6.990.000",
    kilometraje: "30 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["59.jpg", "/60.jpg", "/61.jpg", "/62.jpg"]
  },
  {
    id: 7,
    marca: "Chevrolet",
    modelo: "Captiva Premier 1.5Turbo",
    año: 2022,
    precio: "$7.990.000",
    kilometraje: "50 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["31.jpg", "/34.jpg", "/37.jpg", "/43.jpg"]
  },
     
     
      {
    id: 8,
    marca: "Subaru",
    modelo: "Impreza",
    año: 2021,
    precio: "$8.990.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/16.jpg", "/17.jpg", "/18.jpg", "/19.jpg", "/28.jpg"]
  },
      

  {
    id: 9,
    marca: "Peugeot",
    modelo: "208",
    año: 2019,
    precio: "$5.490.000",
    kilometraje: "200 mil km",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/72.jpg", "/74.jpg", "/SubaruXv2.jpg", "/SubaruXv1.jpg"]
  },

   {
    id: 10,
    marca: "RAM",
    modelo: "Van 700",
    año: 2022,
    precio: "$4.990.000",
    kilometraje: "290 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg"]
  },
  {
    id: 11,
    marca: "Nissan",
    modelo: "Qashqai",
    año: 2016,
    precio: "$6.390.000",
    kilometraje: "105 mil kilómetros",
    estado: "Se va andando",
    transmision: "Manual",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/110.jpg", "/111.jpg", "/112.jpg", "/113.jpg"]
  },
 {
    id: 12,
    marca: "Chevrolet",
    modelo: "Orlando",
    año: 2015,
    precio: "$3.790.000",
    kilometraje: "170 mil kilómetros",
    transmision: "Manual-Diesel",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/4.jpg", "/10.jpg", "/100.jpg", "/101.jpg"]
  },
 {
    id: 13,
    marca: "Changan",
    modelo: "Cx70 Elite 1.5T",
    año: 2022,
    precio: "$6.790.000",
    transmision: "Manual", 
    kilometraje: "42 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["24.jpg", "/25.jpg", "/26.jpg", "/27.jpg"]
  },
  {
    id: 14,
    marca: "Nissan",
    modelo: "Murano",
    año: 2013,
    precio: "$4.290.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/96.jpg", "/97.jpg", "/98.jpg", "/99.jpg"]
  },
  {
    id: 15,
    marca: "Honda",
    modelo: "Hrv",
    año: 2018,
    precio: "$6.490.000",
    kilometraje: "110 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/64.jpg", "/65.jpg", "/66.jpg", "/67.jpg", "/68.jpg"]
  },
  {
    id: 16,
    marca: "Volvo",
    modelo: "S60 T3",
    año: 2019,
    precio: "$7.390.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/29.jpg", "/35.jpg", "/36.jpg", "126.jpg"]
  },
  {
    id: 17,
    marca: "Chevrolet",
    modelo: "traverse",
    año: 2014,
    precio: "$6.590.000",
    kilometraje: "149 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/32.jpg", "/33.jpg", "/3.jpg", "/1.jpg", "/2.jpg"]
  },
  {
    id: 18,
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
    id: 19,
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
    id: 20,
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
