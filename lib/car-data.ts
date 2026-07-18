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
    marca: "Ford",
    modelo: "Explorer",
    año: 2016,
    precio: "$6.990.000",
    kilometraje: "136 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 14  millones.",
    nuevo: true,
    imagenes: ["/93.jpg", "/29.jpg", "/31.jpg", "/32.jpg"]
  },
   {
    id: 2,
    marca: "Toyota",
    modelo: "Rav 4",
    año: 2020,
    precio: "$8.990.000",
    kilometraje: "110 mil kilómetros",
    estado: "Se va andando",
     airbag: "No activo airbag",
    descripcion: "Seguro pagó 19 millones.",
    nuevo: true,
    imagenes: ["/58.jpg", "/102.jpg", "/79.jpg", "/49.jpg"]
  },
      {
    id: 3,
    marca: "Volkswagen",
    modelo: "Virtus",
    año: 2023,
    precio: "$6.990.000",
    kilometraje: "57 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de asiento",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/36.jpg", "/38.jpg", "/39.jpg", "/40.jpg"]
  },
      {
    id: 4,
    marca: "Chevrolet",
    modelo: "Sail",
    año: 2019,
    precio: "$3.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/89.jpg", "/90.jpg", "/86.jpg", "/103.jpg"]
  },
      {
    id: 5,
    marca: "Changan",
    modelo: "Cs15 Luxury",
    año: 2022,
    precio: "$3.990.000",
    kilometraje: "40 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/94.jpg", "/95.jpg", "/4.jpg", "/30.jpg"]
  },
        {
    id: 6,
    marca: "Hyundai",
    modelo: "Accent",
    año: 2021,
    precio: "$7.890.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/12.jpg", "/13.jpg", "/62.jpg", "/10.jpg", "/20.jpg"]
  },
        {
    id: 7,
    marca: "Kia",
    modelo: "Rio 5",
    año: 2016,
    precio: "$5.390.000",
    kilometraje: "117 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/83.jpg", "/73.jpg", "/70.jpg", "/71.jpg", "/87.jpg"]
  },
  {
    id: 8,
    marca: "Chevrolet",
    modelo: "Sail",
    año: 2025,
    precio: "$6.890.000",
    kilometraje: "24 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/55.jpg", "/110.jpg", "/113.jpg", "/115.jpg", "/116.jpg"]
  },

  {
    id: 9,
    marca: "Mazda",
    modelo: "6 GT",
    año: 2016,
    precio: "$4.890.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/78.jpg", "/81.jpg",  "/82.jpg", "/85.jpg"]
  },
    {
    id: 10,
    marca: "Nissan",
    modelo: "Qashqai",
    año: 2016,
    precio: "$6.390.000",
    kilometraje: "110 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/118.jpg", "/119.jpg", "/120.jpg", "/23.jpg", "/24.jpg"]
  },
    {
    id: 11,
    marca: "Chevrolet",
    modelo: "Spark",
    año: 2020,
    precio: "$3.890.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/16.jpg", "/17.jpg", "/18.jpg", "/19.jpg"]
  },
   {
    id: 12,
    marca: "Volvo",
    modelo: "Xc60",
    año: 2016,
    precio: "$5.890.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    descripcion: "Seguro pagó 13 millones.",
    airbag: "Activo airbag",
    nuevo: true,
    imagenes: ["/67.jpg", "/68.jpg", "/121.jpg", "/122.jpg"]
  },

  {
    id: 13,
    marca: "Ford",
    modelo: "Territory Titanium",
    año: 2022,
    precio: "$7.890.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/45.jpg", "/46.jpg", "/47.jpg", "/48.jpg", "/80.jpg"]
  },

 {
    id: 14,
    marca: "Toyota",
    modelo: "Yaris Sport",
    año: 2013,
    precio: "$3.890.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/25.jpg", "/26.jpg", "/27.jpg", "/37.jpg", "/124.jpg"]
  },
  {
    id: 15,
    marca: "Mazda",
    modelo: "5",
    año: 2014,
    precio: "$4.790.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando, poco daño",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/14.jpg", "/15.jpg", "/59.jpg", "/60.jpg", "/61.jpg"]
  },
{
    id: 16,
    marca: "Suzuki",
    modelo: "Swift Glx",
    año: 2022,
    precio: "$5.590.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg"]
  },

  {
    id: 17,
    marca: "Renault",
    modelo: "Clio V",
    año: 2022,
    precio: "$6.890.000",
    kilometraje: "50 mil kilómetros",
    estado: "Se va andando",
    airbag: "Np activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/104.jpg", "/105.jpg", "/106.jpg", "/28.jpg", "/35.jpg"]
  },
   {
    id: 18,
    marca: "Suzuki",
    modelo: "Grand Nomade Glx",
    año: 2015,
    precio: "$5.890.000",
    kilometraje: "137 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/50.jpg", "/51.jpg", "/52.jpg"]
  },
  {
    id: 19,
    marca: "Toyota",
    modelo: "Yaris Spor",
    año: 2019,
    precio: "$5.890.000",
    kilometraje: "180 mil kilómetros",
    estado: "Se va andando",
    airbag: "No Activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/11.jpg", "/64.jpg", "/65.jpg", "/66.jpg"]
  },
  
   {
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
