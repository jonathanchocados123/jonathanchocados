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
    modelo: "Xtrail 7p",
    año: 2024,
    precio: "$15.990.000",
    kilometraje: "26 mil kilómetros",
    estado: "Se va andando",
    descripcion: "Seguro pagó 31 millones.",
    nuevo: true,
    imagenes: ["/58.jpg", "/102.jpg", "/79.jpg", "/49.jpg", "/55.jpg"]
  },
 {
    id: 2,
    marca: "Mitsubishi",
    modelo: "L200 Dakar (4x4)",
    año: 2020,
    precio: "$14.990.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 27 millones.",
    nuevo: true,
    imagenes: ["/25.jpg", "/26.jpg", "/27.jpg", "/37.jpg", "/124.jpg"]
  },
  {
    id: 3,
    marca: "Mazda",
    modelo: "Cx5 Gt",
    año: 2016,
    precio: "$7.990.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/89.jpg", "/90.jpg", "/86.jpg", "/103.jpg", "/30.jpg"]
  },
    {
    id: 4,
    marca: "Mazda",
    modelo: "Cx5",
    año: 2026,
    precio: "$12.990.000",
    kilometraje: "6 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 26 millones.",
    nuevo: true,
    imagenes: ["/83.jpg", "/73.jpg", "/70.jpg", "/71.jpg", "/95.jpg"]
  },
 {
    id: 5,
    marca: "Mercedes Benz",
    modelo: "A200 Look Amg",
    año: 2014,
    precio: "$7.990.000",
    kilometraje: "137 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/16.jpg", "/17.jpg", "/18.jpg", "/19.jpg", "/94.jpg"]
  },
   {
    id: 6,
    marca: "Suzuki",
    modelo: "Grand Nomade Glx",
    año: 2015,
    precio: "$6.990.000",
    kilometraje: "137 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/50.jpg", "/51.jpg", "/52.jpg"]
  },
    {
    id: 7,
    marca: "Volkswagen",
    modelo: "Voyage HighLine",
    año: 2020,
    precio: "$4.990.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/118.jpg", "/119.jpg", "/120.jpg", "/23.jpg", "/24.jpg"]
  },
    {
    id: 7,
    marca: "Toyota",
    modelo: "Yaris Spor",
    año: 2019,
    precio: "$6.990.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/11.jpg", "/64.jpg", "/65.jpg", "/66.jpg"]
  },
    {
    id: 7,
    marca: "Renault",
    modelo: "Clio",
    año: 2017,
    precio: "$5.590.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/14.jpg", "/15.jpg", "/59.jpg", "/60.jpg", "/61.jpg"]
  },
   {
    id: 10,
    marca: "Kia",
    modelo: "Seltos",
    año: 2023,
    precio: "$5.990.000",
    kilometraje: "44 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/1.jpg", "/2.jpg", "/3.jpg"]
  },
  {
    id: 11,
    marca: "Chevrolet",
    modelo: "Captiva",
    año: 2018,
    precio: "$4.490.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/41.jpg", "/42.jpg", "/44.jpg"]
  },
{
    id: 12,
    marca: "Ram",
    modelo: "Van 700 Rapid",
    año: 2021,
    precio: "$2.590.000",
    kilometraje: "220 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg"]
  },
 {
    id: 13,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$4.290.000",
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
    precio: "$19.890.000",
    kilometraje: "59 mil km",
     estado: "Se va andando",
    descripcion: "Extensiones de puertas.",
    nuevo: true,
    imagenes: ["/Buggy5.jpg", "/Buggy4.jpg", "/Buggy3.jpg","/Buggy2.jpg", "/Buggy1.jpg", "/Buggy.jpg"]
  },
 {
    id: 15,
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
