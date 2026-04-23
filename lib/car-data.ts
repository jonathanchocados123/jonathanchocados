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
    marca: "Toyota",
    modelo: "Fortuner",
    año: 2022,
    precio:"$16.990.000",
    kilometraje: "70 mil km",
    transmision: "(Automática)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 32 millones al dueño.",
    nuevo: true,
    imagenes: ["/25.jpg", "/24.jpg", "/26.jpg", "/27.jpg", "/28.jpg", "/29.jpg"]
  },
  {
    id: 2,
    marca: "Suzuki",
    modelo: "Fronx (HYBRYD)",
    año: 2024,
    precio: "$9.490.000",
    kilometraje: "40 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 17 millones.",
    nuevo: true,
    imagenes: ["/73.jpg", "/70.jpg", "/71.jpg", "/72.jpg", "/74.jpg"]
  },
{
    id: 3,
    marca: "Jeep",
    modelo: "Grand Cherokee Limited",
    año: 2011,
    precio: "$7.990.000",
    kilometraje: "149 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/3.jpg", "/1.jpg", "/2.jpg", "/4.jpg", "/10.jpg"]
  },
  {
    id: 4,
    marca: "Chevrolet",
    modelo: "Groove Premier",
    año: 2013,
    precio: "$7.990.000",
    kilometraje: "29mil kilómetros",
    estado: "Se va andando",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/12.jpg", "/11.jpg", "/13.jpg", "/14.jpg", "/15.jpg", "/16.jpg"]
  },
  {
    id: 5,
    marca: "BMW",
    modelo: "118i",
    año: 2018,
    precio: "$7.590.000",
    kilometraje: "70mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/34.jpg", "/30.jpg", "/31.jpg", "/32.jpg", "/33.jpg"]
  },
  {
    id: 6,
    marca: "Chevrolet",
    modelo: "Spin Premier",
    año: 2020,
    precio: "$6.990.000",
    kilometraje: "86 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10.5 millones.",
    nuevo: true,
    imagenes: ["/35.jpg", "/36.jpg", "/37.jpg", "/38.jpg"]
  },
  {
    id: 7,
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
    id: 1,
    marca: "Peugeot",
    modelo: "3008",
    año: 2020,
    precio:"$6.990.000",
    kilometraje: "70 mil km",
    transmision: "(Automática)",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "La compañía de seguros pagó 13.5 millones al dueño.",
    nuevo: true,
    imagenes: ["/84.jpg", "/85.jpg", "/86.jpg", "/87.jpg"]
  },

   {
    id: 3,
    marca: "Great",
    modelo: "wall 3",
    año: 2019,
    precio:"$2.990.000",
    kilometraje: "80 mil km",
     transmision: "(Manual)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 8 millones al dueño.",
    nuevo: true,
    imagenes: ["/80.jpg", "/81.jpg", "/82.jpg", "/83.jpg"]
  },

  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    marca: "Subaru",
    modelo: "Xv AWD",
    año: 2016,
    precio: "$6.590.000",
    kilometraje: "99 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/SubaruXv2.jpg", "/SubaruXv1.jpg", "/SubaruXv.jpg"]
  },
{
    id: 8,
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
