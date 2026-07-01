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
    marca: "Hyundai",
    modelo: "Tucson",
    año: 2025,
    precio: "$10.990.000",
    kilometraje: "21 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 21 millones.",
    nuevo: true,
    imagenes: ["/58.jpg", "/102.jpg", "/79.jpg", "/80.jpg", "/4.jpg"]
  },
   {
    id: 2,
    marca: "Ford",
    modelo: "Territory",
    año: 2021,
    precio: "$8.490.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/10.jpg", "/11.jpg", "/64.jpg", "/65.jpg", "/66.jpg"]
  },
  {
    id: 3,
    marca: "Volkswagen",
    modelo: "Gol",
    año: 2022,
    precio: "$4.990.000",
    kilometraje: "40 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/29.jpg", "/31.jpg", "/32.jpg", "/33.jpg", "/34.jpg"]
  },
  {
    id: 4,
    marca: "Kia",
    modelo: "Cerato",
    año: 2019,
    precio: "$4.990.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/121.jpg", "/122.jpg", "/123.jpg"]
  },
    {
    id: 5,
    marca: "Suzuki",
    modelo: "Swift Glx",
    año: 2020,
    precio: "$6.990.000",
    kilometaje: "39 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10.5 millones.",
    nuevo: true,
    imagenes: ["/43.jpg", "/94.jpg", "/95.jpg", "/30.jpg", "/124.jpg"]
  },
  {
    id: 6,
    marca: "BMW",
    modelo: "X3 SDrive",
    año: 2017,
    precio: "$8.990.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 18 millones.",
    nuevo: true,
    imagenes: ["/59.jpg", "/60.jpg", "/61.jpg", "/62.jpg"]
  },
  {
    id: 7,
    marca: "Kia",
    modelo: "Seltos",
    año: 2023,
    precio: "$6.990.000",
    kilometraje: "44 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/1.jpg", "/2.jpg", "/3.jpg"]
  },
  {
    id: 8,
    marca: "Mitsubishi",
    modelo: "Outlander",
    año: 2021,
    precio: "$6.590.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/12.jpg", "/13.jpg", "/14.jpg", "/15.jpg"]
  },
   {
    id: 9,
    marca: "Ford",
    modelo: "FOCUS",
    año: 2015,
    precio: "$3.990.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/89.jpg", "/90.jpg", "/86.jpg", "/103.jpg"]
  },
  {
    id: 10,
    marca: "Subaru",
    modelo: "Xv",
    año: 2018,
    precio: "$7.990.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/83.jpg", "/73.jpg", "/70.jpg", "/71.jpg"]
  },
   {
    id: 11,
    marca: "Ford",
    modelo: "Ranger 3.2 4x4",
    año: 2020,
    precio: "$8.990.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 19 millones.",
    nuevo: true,
    imagenes: ["/16.jpg", "/17.jpg", "/18.jpg", "/19.jpg"]
  },
   {
    id: 12,
    marca: "Haval",
    modelo: "Jolion",
    año: 2025,
    precio: "$8.590.000",
    kilometraje: "2 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg"]
  },
   
     {
    id: 13,
    marca: "Geely",
    modelo: "Coolray",
    año: 2025,
    precio: "$6.990.000",
    kilometraje: "4 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/35.jpg", "/36.jpg", "/38.jpg", "/39.jpg", "/40.jpg"]
  },
     {
    id: 14,
    marca: "Chevrolet",
    modelo: "Captiva",
    año: 2018,
    precio: "$4.590.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/41.jpg", "/42.jpg", "/44.jpg", "/49.jpg", "/55.jpg"]
  },

 {
    id: 15,
    marca: "Kia",
    modelo: "Sportage Ex (4x4)",
    año: 2023,
    precio: "$11.990.000",
    kilometraje: "85 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 25 millones.",
    nuevo: true,
    imagenes: ["/25.jpg", "/26.jpg", "/27.jpg", "/37.jpg"]
  },
  {
    id: 16,
    marca: "Audi",
    modelo: "A1 SportBack",
    año: 2022,
    precio: "$8.990.000",
    kilometraje: "30 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 18 millones.",
    nuevo: true,
    imagenes: ["/50.jpg", "/51.jpg", "/52.jpg", "/53.jpg"]
  },
  {
    id: 17,
    marca: "Moto BMW",
    modelo: "G310",
    año: 2026,
    precio: "$4.490.000",
    kilometraje: "800 kilómetros, nueva",
    estado: "Se va andando",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/104.jpg", "/105.jpg", "/106.jpg", "/28.jpg"]
  },
{
    id: 18,
    marca: "Mazda",
    modelo: "CX9 GT",
    año: 2014,
    precio: "$3.990.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    transmision: "Automatica",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/110.jpg", "/113.jpg", "/115.jpg", "/116.jpg", "/117.jpg"]
  },
 {
    id: 19
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
    id: 20,
    marca: "Renault",
    modelo: "Dokker",
    año: 2018,
    precio: "$3.590.000",
    kilometraje: "130 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 7.5 millones.",
    nuevo: true,
    imagenes: ["/118.jpg", "/119.jpg", "/120.jpg"]
  },
 {
    id: 21,
    marca: "Volkswagen",
    modelo: "Amarok Highline",
    año: 2019,
    precio: "$12.890.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 22 millones.",
    nuevo: true,
    imagenes: ["/78.jpg", "/81.jpg",  "/82.jpg", "/85.jpg", "/87.jpg"]
  },
  {
    id: 22,
    marca: "Nissan",
    modelo: "Murano",
    año: 2013,
    precio: "$4.290.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/96.jpg", "/97.jpg", "/98.jpg", "/99.jpg"]
  },
 {
    id: 23,
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
    id: 24,
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
    id: 25,
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
