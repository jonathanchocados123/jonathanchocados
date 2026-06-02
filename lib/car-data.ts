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
    marca: "Jac",
    modelo: "S2",
    año: 2018,
    precio: "$2.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["55.jpg", "/56.jpg", "/57.jpg", "/58.jpg", "/102.jpg"]
  },
   {
    id: 2,
    marca: "Mercedes Benz",
    modelo: "ML 350",
    año: 2012,
    precio: "$6.990.000",
    kilometraje: "220 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["59.jpg", "/60.jpg", "/61.jpg", "/62.jpg"]
  },
  {
    id: 3,
    marca: "Kia",
    modelo: "K3 Cross At",
    año: 2025,
    precio: "$7.490.000",
    kilometraje: "19 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/94.jpg", "/95.jpg", "/30.jpg"]
  },
{
    id: 4,
    marca: "Kia",
    modelo: "Cerato Ex",
    año: 2019,
    precio: "$6.490.000",
    kilometraje: "220 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true, 
    imagenes: ["/38.jpg", "/49.jpg", "/44.jpg", "24.jpg", "/92.jpg"]
  },
   {
    id: 5,
    marca: "Volvo",
    modelo: "S 60",
    año: 2016,
    precio: "$4.590.000",
    kilometraje: "189 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["54.jpg", "/63.jpg", "/69.jpg", "/75.jpg", "/77.jpg"]
  },
  {
    id: 6,
    marca: "Volkswagen",
    modelo: "Saveiro",
    año: 2025,
    precio: "$5.690.000",
    kilometraje: "39 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["50.jpg", "/51.jpg", "/52.jpg", "/53.jpg"]
  },

{
    id: 7,
    marca: "Ford",
    modelo: "Territory Titanium",
    año: 2023,
    precio: "$6.990.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/45.jpg", "/46.jpg", "/47.jpg", "48.jpg"]
  },
  {
    id: 8,
    marca: "Chevrolet",
    modelo: "Captiva Premier 1.5Turbo",
    año: 2022,
    precio: "$5.990.000",
    kilometraje: "50 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["31.jpg", "/34.jpg", "/37.jpg", "/43.jpg"]
  },
  {
    id: 9,
    marca: "Subaru",
    modelo: "Impreza",
    año: 2021,
    precio: "$7.490.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/16.jpg", "/17.jpg", "/18.jpg", "/19.jpg", "/28.jpg"]
  },

   {
    id: 10,
    marca: "RAM",
    modelo: "Van 700",
    año: 2022,
    precio: "$3.690.000",
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
    precio: "$5.590.000",
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
    marca: "Changan",
    modelo: "Cx70 Elite 1.5T",
    año: 2022,
    precio: "$5.990.000",
    transmision: "Manual", 
    kilometraje: "42 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["24.jpg", "/25.jpg", "/26.jpg", "/27.jpg"]
  },
  {
    id: 13,
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
    id: 14,
    marca: "Honda",
    modelo: "Hrv",
    año: 2018,
    precio: "$5.990.000",
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
    precio: "$6.990.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/29.jpg", "/35.jpg", "/36.jpg", "126.jpg"]
  },
  {
    id: 16,
    marca: "Chevrolet",
    modelo: "traverse",
    año: 2014,
    precio: "$5.990.000",
    kilometraje: "149 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/32.jpg", "/33.jpg", "/3.jpg", "/1.jpg", "/2.jpg"]
  },
  {
    id: 17,
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
    id: 18,
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
    id: 19,
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
