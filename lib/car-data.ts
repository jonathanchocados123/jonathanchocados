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
    marca: "Mercedes",
    modelo: "benz C 180",
    año: 2018,
    precio:"$11.990.000",
    kilometraje: "80 mil km",
    transmision: "(Automática)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 18 millones al dueño.",
    nuevo: true,
    imagenes: ["/25.jpg", "/24.jpg", "/26.jpg", "/27.jpg", "/28.jpg"]
  },
 {
    id: 2,
    marca: "Hyundai",
    modelo: "venue",
    año: 2025,
    precio: "$7.990.000",
    kilometraje: "10 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/29.jpg", "/35.jpg", "/36.jpg"]
  },
{
    id: 3,
    marca: "Jeep",
    modelo: "Renegade",
    año: 2020,
    precio:"$6.490.000",
    kilometraje: "80 mil km",
     transmision: "(Manual)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 10 millones al dueño.",
    nuevo: true,
    imagenes: ["/37.jpg", "/38.jpg", "/80.jpg", "/81.jpg", "/82.jpg"]
  },
 {
    id: 4,
    marca: "Hyundai",
    modelo: "verna",
    año: 2022,
    precio: "$4.990.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/83.jpg", "/73.jpg", "/70.jpg", "/71.jpg"]
  },
{
    id: 5,
    marca: "Renault",
    modelo: "Sandero Stepway",
    año: 2011,
    precio: "$2.490.000",
    kilometraje: "140 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 6 millones.",
    nuevo: true,
    imagenes: ["/72.jpg", "/74.jpg", "/SubaruXv2.jpg", "/SubaruXv1.jpg"]
  },
  {
    id: 6,
    marca: "Nissan",
    modelo: "Qashqai",
    año: 2017,
    precio:"$6.990.000",
    kilometraje: "90 mil km",
    transmision: "(Manual)",
    estado: "Se va andando, Poco daño",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 11 millones al dueño.",
    nuevo: true,
    imagenes: ["/SubaruXv.jpg", "/84.jpg", "/85.jpg", "/86.jpg", "/87.jpg"]
  },
 {
    id: 7,
    marca: "Kia",
    modelo: "Rio 5",
    año: 2018,
    precio: "$4.990.000",
    kilometraje: "90mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/34.jpg", "/30.jpg", "/31.jpg"]
  },
{
    id: 8,
    marca: "Chevrolet",
    modelo: "traverse",
    año: 2014,
    precio: "$7.490.000",
    kilometraje: "149 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/32.jpg", "/33.jpg", "/3.jpg", "/1.jpg", "/2.jpg"]
  },
{
    id: 9,
    marca: "Haval",
    modelo: "Jolion",
    año: 2021,
    precio: "$6.490.000",
    kilometraje: "40 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/4.jpg", "/10.jpg", "/100.jpg", "/101.jpg"]
  },
  {
    id: 10,
    marca: "Renault",
    modelo: "symbol",
    año: 2020,
    precio: "$4.490.000",
    kilometraje: "67 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7.5 millones.",
    nuevo: true,
    imagenes: ["/102.jpg", "/103.jpg", "/104.jpg", "/105.jpg"]
  },
  {
    id: 11,
    marca: "RAM",
    modelo: "Van 1000",
    año: 2023,
    precio: "$5.490.000",
    kilometraje: "75 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/106.jpg", "/107.jpg", "/108.jpg", "/109.jpg"]
  },
  {
    id: 12,
    marca: "Hyundai",
    modelo: "Tucson",
    año: 2021,
    precio: "$7.490.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/110.jpg", "/111.jpg", "/112.jpg", "/113.jpg"]
  },
  {
    id: 13,
    marca: "Mercedes",
    modelo: "C180",
    año: 2005,
    precio: "$3.490.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/114.jpg", "/115.jpg", "/116.jpg", "/117.jpg", "/118.jpg"]
  },
  {
    id: 14,
    marca: "Ssangyong",
    modelo: "korando",
    año: 2013,
    precio: "$3.990.000",
    kilometraje: "240 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/119.jpg", "/120.jpg", "/121.jpg", "/122.jpg"]
  },
   {
    id: 15,
    marca: "Chevrolet",
    modelo: "Groove Premier",
    año: 2013,
    precio: "$7.490.000",
    kilometraje: "29mil kilómetros",
    estado: "Se va andando",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/12.jpg", "/11.jpg", "/13.jpg", "/14.jpg", "/15.jpg", "/16.jpg"]
  },
  {
    id: 16,
    marca: "Jaguar",
    modelo: "F-Pace 20D(DIESEL)",
    año: 2018,
    precio: "$16.490.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 28 millones.",
    nuevo: true,
    imagenes: ["/39.jpg", "/40.jpg", "/41.jpg", "/42.jpg", "/43.jpg", "/44.jpg"]
  },
  {
    id: 17,
    marca: "Chrysler",
    modelo: "200",
    año: 2014,
    precio: "$4.390.000",
    kilometraje: "70 mil km",
    transmision: "Automático",
    estado: "Se va andando",
    airbag: "No informado",
    descripcion: "Recuperado de robo. Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/c200-3.jpg", "/c200-1.jpg", "/c200-2.jpg", "/c200-4.jpg"]
  },
  {
    id: 18,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$4.390.000",
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
    precio: "$19.990.000",
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
    precio: "$2.890.000",
    kilometraje: "220 mil km",
    transmision: "Automática",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7.5 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg","/9.jpg"]
  },

 
   
]
