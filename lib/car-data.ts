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
    marca: "Suzuki",
    modelo: "Vitara ",
    año: 2018,
    precio: "$5.990.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/94.jpg", "/95.jpg", "/96.jpg"]
  },
   {
    id: 2,
    marca: "Mitsubishi",
    modelo: "mirage",
    año: 2017,
    precio: "$1.990.000",
    kilometraje: "90 mil kilómetros",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 6.5 millones.",
    nuevo: true,
    imagenes: ["/100.jpg", "/101.jpg", "/102.jpg", "/103.jpg", "/1.jpg", "/2.jpg"]
  },
   {
    id: 3,
    marca: "Peugeot",
    modelo: "3008",
    año: 2020,
    precio:"$7.990.000",
    kilometraje: "70 mil km",
    transmision: "(Automática)",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "La compañía de seguros pagó 13.5 millones al dueño.",
    nuevo: true,
    imagenes: ["/84.jpg", "/85.jpg", "/86.jpg", "/87.jpg"]
  },
 {
    id: 4,
    marca: "Toyota",
    modelo: "Rav 4",
    año: 2015,
    precio:"$5.490.000",
    kilometraje: "110 mil km",
    transmision: "(Manual)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 10 millones al dueño.",
    nuevo: true,
    imagenes: ["/24.jpg", "/25.jpg", "/26.jpg", "/27.jpg", "/28.jpg", "/29.jpg"]
  },
   {
    id: 5,
    marca: "Great",
    modelo: "wall 3",
    año: 2019,
    precio:"$3.790.000",
    kilometraje: "80 mil km",
     transmision: "(Manual)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 8 millones al dueño.",
    nuevo: true,
    imagenes: ["/80.jpg", "/81.jpg", "/82.jpg", "/83.jpg"]
  },

  {
    id: 6,
    marca: "Jaguar",
    modelo: "F-Pace 20D(DIESEL)",
    año: 2018,
    precio: "$16.890.000",
    kilometraje: "80mil kilómetros",
    transmision: "(Automática) (4x4)",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "La compañía de seguros pagó 28millones al dueño..",
    nuevo: true,
    imagenes: ["/14.jpg","/15.jpg","/16.jpg", "/17.jpg", "/18.jpg"]
  },
  {
    id: 7,
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
    imagenes: ["/c200-1.jpg", "/c200-2.jpg", "/c200-3.jpg","/c200-4.jpg"]
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
{
    id: 12,
    marca: "Mazda",
    modelo: "2 sedan",
    año: 2011,
    precio: "$2.490.000",
    kilometraje: "200mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 6 millones.",
    nuevo: true,
    imagenes: ["/70.jpg", "/71.jpg", "/72.jpg", "/73.jpg"]
  },
 
   
]
