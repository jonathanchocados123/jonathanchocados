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
    modelo: "X5",
    año: 2014,
    precio:"$9.990.000",
    kilometraje: "170 mil km",
    transmision: "(Automático)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 22 millones al dueño.",
    nuevo: true,
    imagenes: ["/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg"]
  },
 {
    id: 2,
    marca: "Mercedes",
    modelo: "Gla200",
    año: 2016,
    precio:"$7.990.000",
    kilometraje: "150 mil km",
    transmision: "(Automático)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 16 millones al dueño.",
    nuevo: true,
    imagenes: ["/24.jpg", "/25.jpg", "/26.jpg", "/27.jpg", "/28.jpg", "/29.jpg"]
  },
   {
    id: 3,
    marca: "Mazda",
    modelo: "3GT",
    año: 2017,
    precio:"$7.990.000",
    kilometraje: "220 mil km",
    transmision: "(Manual)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 13 millones al dueño.",
    nuevo: true,
    imagenes: ["/84.jpg", "/85.jpg", "/86.jpg", "/87.jpg", "/88.jpg"]
  },
  {
    id: 4,
    marca: "Nissan",
    modelo: "Np300 XE",
    año: 2016,
    precio:"$7.990.000",
    kilometraje: "90 mil km",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 13,5 millones al dueño.",
    nuevo: true,
    imagenes: ["/30.jpg", "/31.jpg", "/32.jpg", "/33.jpg"]
  },
   {
    id: 5,
    marca: "Toyota",
    modelo: "yaris Sport",
    año: 2015,
    precio:"$4.690.000",
    kilometraje: "60 mil km",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "La compañía de seguros pagó 8,5 millones al dueño.",
    nuevo: true,
    imagenes: ["/34.jpg", "/35.jpg", "/36.jpg", "/37.jpg"]
  },
   {
    id: 6,
    marca: "Suzuki",
    modelo: "Grand Nomade",
    año: 2019,
    precio:"$6.990.000",
    kilometraje: "180 mil km",
     transmision: "(Manual)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 10,5 millones al dueño.",
    nuevo: true,
    imagenes: ["/38.jpg", "/39.jpg", "/40.jpg", "/41.jpg","/42.jpg"]
  },
   {
    id: 7,
    marca: "Hyundai",
    modelo: "Accent",
    año: 2012,
    precio:"$2.990.000",
    kilometraje: "120 mil km",
     transmision: "(Automático)",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "La compañía de seguros pagó 6,5 millones al dueño.",
    nuevo: true,
    imagenes: ["/43.jpg", "/44.jpg", "/45.jpg", "/46.jpg"]
  },
   {
    id: 8,
    marca: "Suzuki",
    modelo: "Sx4",
    año: 2010,
    precio:"$2.990.000",
    kilometraje: "220 mil km",
     transmision: "(Manual)",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "La compañía de seguros pagó 5,5 millones al dueño.",
    nuevo: true,
    imagenes: ["/47.jpg", "/48.jpg", "/49.jpg", "/50.jpg"]
  },
   {
    id: 9,
    marca: "Great",
    modelo: "wall 3",
    año: 2019,
    precio:"$3.990.000",
    kilometraje: "80 mil km",
     transmision: "(Manual)",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 8 millones al dueño.",
    nuevo: true,
    imagenes: ["/80.jpg", "/81.jpg", "/82.jpg", "/83.jpg"]
  },
  {
    id: 10,
    marca: "Peugeot",
    modelo: "5008",
    año: 2019,
    precio:"$9.190.000",
    kilometraje: "130 mil km",
    transmision: "(Automático)",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "La compañía de seguros pagó 18millones al dueño.",
    nuevo: true,
    imagenes: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"]
  },
  {
    id: 11,
    marca: "Volvo",
    modelo: " S60 D5 ",
    año: 2019,
    precio: "$8.590.000",
    kilometraje: "93 mil km",
    transmision: "Automático (4x4)",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "La compañía de seguros pagó 21millones al dueño.",
    nuevo: true,
    imagenes: ["/10.jpg", "/11.jpg","/12.jpg","/13.jpg"]
  },
 
  {
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    marca: "Mazda",
    modelo: "2 sedan",
    año: 2016,
    precio: "$4.690.000",
    kilometraje: "160mil kilómetros",
    transmision: "(Automático)",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. La compañía de seguros pagó 9,5millones al dueño.",
    nuevo: true,
    imagenes: ["/54.jpg","/55.jpg","/56.jpg","/57.jpg","/58.jpg"]
  },
   {
    id: 16,
    marca: "Ford",
    modelo: "F-150 Platinum",
    año: 2015,
    precio: "$14.390.000",
    kilometraje: "210mil kilómetros ",
    transmision: "(Automático) (4x4)",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full,cuero,techo. Vehículo de particular (Ojo vehículo sin pérdida) (Se recibe vehículo solo por esta unidad) Valor comercial 20millones ",
    nuevo: true,
    imagenes: ["/59.jpg","/60.jpg","/61.jpg", "/62.jpg","/63.jpg"]
   },
    {
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
