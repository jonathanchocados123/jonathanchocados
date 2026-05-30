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
    marca: "Mercedes Benz",
    modelo: "ML 350",
    año: 2012,
    precio: "$7.990.000",
    kilometraje: "220 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["59.jpg", "/60.jpg", "/61.jpg", "/62.jpg"]
  },
   {
    id: 2,
    marca: "Jaguar",
    modelo: "F-Pace 20D",
    año: 2018,
    precio: "$15.590.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 28 millones.",
    nuevo: true,
    imagenes: ["55.jpg", "/56.jpg", "/57.jpg", "/58.jpg"]
  },
  {
    id: 3,
    marca: "Kia",
    modelo: "K3 Cross At",
    año: 2025,
    precio: "$7.990.000",
    kilometraje: "19 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/94.jpg", "/95.jpg", "30.jpg"]
  },
  {
    id: 4,
    marca: "Renault",
    modelo: "Clio IV",
    año: 2018,
    precio: "$3.990.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/78.jpg", "/79.jpg", "/80.jpg", "81.jpg"]
  },
  {
    id: 5,
    marca: "Ford",
    modelo: "Explorer (4x4)",
    año: 2000,
    precio: "$2.490.000",
    kilometraje: "200 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 4.5 millones.",
    nuevo: true,
    imagenes: ["/82.jpg", "/84.jpg", "/85.jpg", "86.jpg"]
  },
  {
    id: 6,
    marca: "Nissan",
    modelo: "Kick Advance",
    año: 2020,
    precio: "$6.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "Np Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/87.jpg", "/88.jpg", "/89.jpg", "90.jpg"]
  },
  {
    id: 7,
    marca: "Nissan",
    modelo: "Tiida S",
    año: 2011,
    precio: "$3.590.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 6.5 millones.",
    nuevo: true,
    imagenes: ["/102.jpg", "/103.jpg", "/104.jpg", "105.jpg"]
  },
{
    id: 8,
    marca: "Volvo",
    modelo: "V40 T4 R Design",
    año: 2018,
    precio: "$8.490.000",
    kilometraje: "130 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/83.jpg", "/73.jpg", "/70.jpg", "/71.jpg", "/91.jpg"]
  },
 {
    id: 9,
    marca: "Kia",
    modelo: "Cerato Ex",
    año: 2019,
    precio: "$6.990.000",
    kilometraje: "220 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true, 
    imagenes: ["/38.jpg", "/49.jpg", "/44.jpg", "24.jpg", "/92.jpg"]
  },

 {
    id: 10,
    marca: "Mitsubishi",
    modelo: "Asx Glx",
    año: 2014,
    precio: "$5.990.000",
    kilometraje: "66 mil kilómetros",
    estado: "Se va andando poco daño",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["39.jpg", "/40.jpg", "/41.jpg", "/42.jpg", "/76.jpg"]
  },
   {
    id: 11,
    marca: "Volvo",
    modelo: "S 60",
    año: 2016,
    precio: "$4.990.000",
    kilometraje: "189 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["54.jpg", "/63.jpg", "/69.jpg", "/75.jpg", "/77.jpg"]
  },
  {
    id: 12,
    marca: "Volkswagen",
    modelo: "Saveiro",
    año: 2025,
    precio: "$6.490.000",
    kilometraje: "39 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["50.jpg", "/51.jpg", "/52.jpg", "/53.jpg"]
  },
   {
    id: 13,
    marca: "Great Wall",
    modelo: "Florid",
    año: 2012,
    precio: "$1.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 6 millones.",
    nuevo: true,
    imagenes: ["/11.jpg", "/12.jpg", "/13.jpg", "/14.jpg", "/15.jpg"]
  },
{
    id: 14,
    marca: "Ford",
    modelo: "Territory Titanium",
    año: 2023,
    precio: "$7.490.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/45.jpg", "/46.jpg", "/47.jpg", "48.jpg"]
  },
  {
    id: 15,
    marca: "Chevrolet",
    modelo: "Captiva Premier 1.5Turbo",
    año: 2022,
    precio: "$6.990.000",
    kilometraje: "50 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["31.jpg", "/34.jpg", "/37.jpg", "/43.jpg"]
  },
  {
    id: 16,
    marca: "Subaru",
    modelo: "Impreza",
    año: 2021,
    precio: "$7.590.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/16.jpg", "/17.jpg", "/18.jpg", "/19.jpg", "/28.jpg"]
  },
  {
    id: 17,
    marca: "Peugeot",
    modelo: "208",
    año: 2019,
    precio: "$4.990.000",
    kilometraje: "200 mil km",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/72.jpg", "/74.jpg", "/SubaruXv2.jpg", "/SubaruXv1.jpg"]
  },
   {
    id: 18,
    marca: "RAM",
    modelo: "Van 700",
    año: 2022,
    precio: "$3.990.000",
    kilometraje: "290 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg"]
  },
  {
    id: 19,
    marca: "Nissan",
    modelo: "Qashqai",
    año: 2016,
    precio: "$5.990.000",
    kilometraje: "105 mil kilómetros",
    estado: "Se va andando",
    transmision: "Manual",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/110.jpg", "/111.jpg", "/112.jpg", "/113.jpg"]
  },
 {
    id: 20,
    marca: "Chevrolet",
    modelo: "Orlando",
    año: 2015,
    precio: "$3.290.000",
    kilometraje: "170 mil kilómetros",
    transmision: "Manual-Diesel",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/4.jpg", "/10.jpg", "/100.jpg", "/101.jpg"]
  },
 {
    id: 21,
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
    id: 22,
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
    id: 23,
    marca: "Honda",
    modelo: "Hrv",
    año: 2018,
    precio: "$6.290.000",
    kilometraje: "110 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/64.jpg", "/65.jpg", "/66.jpg", "/67.jpg", "/68.jpg"]
  },
  {
    id: 24,
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
    id: 25,
    marca: "Chevrolet",
    modelo: "traverse",
    año: 2014,
    precio: "$6.490.000",
    kilometraje: "149 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/32.jpg", "/33.jpg", "/3.jpg", "/1.jpg", "/2.jpg"]
  },
  {
    id: 26,
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
    id: 27,
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
    id: 28,
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
