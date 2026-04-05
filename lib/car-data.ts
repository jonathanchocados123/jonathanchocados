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
    id: 2,
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
    id: 3,
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
    imagenes: ["/c200-1.jpg", "/c200-2.jpg", "/c200-3.jpg","/c200-4.jpg"]
  },
   {
    id: 5,
    marca: "Skoda",
    modelo: "Fabia 1.2 turbo",
    año: 2017,
    precio: "$3.890.000",
    kilometraje: "170mil kilómetros ",
    transmision: "(Manual)",
    estado: "Funcionando",
    airbag: "No Activó airbag",
    descripcion: "Full. La compañía de seguros pagó 8 millones al dueño.",
    nuevo: true,
    imagenes: ["/SkodaFabia3.jpg", "/SkodaFabia2.jpg", "/SkodaFabia1.jpg", "/SkodaFabia.jpg"]
  },
    {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    marca: "Subaru",
    modelo: "Forester ",
    año: 2009,
    precio: "$3.390.000",
    kilometraje: "210 mil km",
    transmision: "Automático",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/SubaruForester2.jpg", "/SubaruForester1.jpg", "/SubaruForester.jpg","/SubaruOutback3.jpg"]
  },
{
    id: 12,
    marca: "Mazda",
    modelo: "Cx5 R ",
    año: 2016,
    precio: "$5.590.000",
    kilometraje: "130 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/MazdaCx52.jpg", "/MazdaCx51.jpg", "/MazdaCx5.jpg"]
  },
{
    id: 13,
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
    id: 14,
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
