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
    modelo: "Territory",
    año: 2022,
    precio: "$7.990.000",
    kilometraje: "45 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/103.jpg", "/111.jpg", "/39.jpg", "/38.jpg", "/52.jpg"]
  },
    {
    id: 2,
    marca: "Honda ",
    modelo: "Wrv  ",
    año: 2022,
    precio: "$6.990.000",
    kilometraje: "56 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/12.jpg", "/47.jpg", "/6.jpg", "/28.jpg"]
  },
    {
    id: 3,
    marca: "Volkswagen ",
    modelo: "Gol ",
    año: 2022,
    precio: "$3.990.000",
    kilometraje: "75 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/88.jpg", "/40.jpg", "/41.jpg", "/42.jpg"]
  },
    {
    id: 4,
    marca: "Subaru ",
    modelo: "Xv 2.0R ",
    año: 2011,
    precio: "$4.990.000",
    kilometraje: "86 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/26.jpg", "/74.jpg", "/59.jpg", "/30.jpg"]
  },
    {
    id: 5,
    marca: "Chevrolet ",
    modelo: "Captiva  ",
    año: 2021,
    precio: "$6.990.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/62.jpg", "/43.jpg", "/44.jpg", "/16.jpg", "/25.jpg"]
  },
    {
    id: 6,
    marca: "Volvo ",
    modelo: "V40 T4 RDesign ",
    año: 2017,
    precio: "$7.990.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/Buggy4.jpg", "/Buggy3.jpg", "/Buggy2.jpg", "/Buggy1.jpg"]
  },
   {
    id: 7,
    marca: "Changan ",
    modelo: "Cs55 Plus ",
    año: 2025,
    precio: "$8.490.000",
    kilometraje: "597 kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 17 millones.",
    nuevo: true,
    imagenes: ["/132.jpg", "/133.jpg", "/134.jpg", "/135.jpg", "/136.jpg"]
  },
   {
    id: 8,
    marca: "Honda ",
    modelo: "Crv  ",
    año: 2019,
    precio: "$6.990.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/65.jpg", "/37.jpg", "/114.jpg"]
  },
 {
    id: 9,
    marca: "Nissan ",
    modelo: "Xtrail ",
    año: 2019,
    precio: "$7.990.000",
    kilometraje: "50 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/104.jpg", "/105.jpg", "/106.jpg", "/18.jpg", "/5.jpg", "/64.jpg"]
  },
   {
    id: 10,
    marca: "Nissan ",
    modelo: "Kicks  ",
    año: 2019,
    precio: "$5.990.000",
    kilometraje: "110 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/146.jpg", "/147.jpg", "/72.jpg", "/20.jpg"]
  },
 {
    id: 11,
    marca: "Chery   ",
    modelo: "Tiggo 2 pro Max ",
    año: 2026,
    precio: "$4.990.000",
    kilometraje: "14 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/73.jpg", "/48.jpg", "/14.jpg", "/34.jpg"]
  },
   {
    id: 12,
    marca: "Kia",
    modelo: "Cerato ",
    año: 2021,
    precio: "$6.990.000",
    kilometraje: "23 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,    
    imagenes: ["/11.jpg", "/129.jpg", "/130.jpg", "/131.jpg"]
  }, 
 {
    id: 13,
    marca: "Honda",
    modelo: "Crv Touring",
    año: 2022,
    precio: "$9.990.000",
    kilometraje: "50 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 24 millones.",
    nuevo: true,
    imagenes: ["/91.jpg", "/53.jpg", "/55.jpg", "/80.jpg", "/13.jpg"]
  },
   {
    id: 14,
    marca: "Haval ",
    modelo: "Dargo Deluxe ",
    año: 2023,
    precio: "$7.990.000",
    kilometraje: "50 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/77.jpg", "/78.jpg", "/29.jpg", "/10.jpg", "/15.jpg"]
  },
{
    id: 15,
    marca: "Volkswagen  ",
    modelo: "Voyage  ",
    año: 2018,
    precio: "$3.990.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/100.jpg", "/61.jpg", "/110.jpg", "/112.jpg"]
  },
  
   {
    id: 16,
    marca: "Hyundai ",
    modelo: "Tucson ",
    año: 2018,
    precio: "$7.490.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/137.jpg", "/138.jpg", "/139.jpg", "/86.jpg", "/45.jpg"]
  },
   {
    id: 17,
    marca: "Chery ",
    modelo: "Tiggo 3",
    año: 2022,
    precio: "$3.490.000",
    kilometraje: "35 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/101.jpg", "/85.jpg", "/96.jpg", "/97.jpg"]
  },
   {
    id: 18,
    marca: "Volkswagen ",
    modelo: "Gol HighLine ",
    año: 2021,
    precio: "$4.990.000",
    kilometraje: "55 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/87.jpg", "/89.jpg", "/90.jpg", "/94.jpg"]
  },
  {
    id: 19,
    marca: "Suzuki ",
    modelo: "Grand Nomade Glx",
    año: 2015,
    precio: "$6.490.000",
    kilometraje: "40 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/98.jpg", "/99.jpg", "/102.jpg", "/79.jpg"]
  },
    {
    id: 20,
    marca: "Bmw ",
    modelo: "220i Grand Coupe ",
    año: 2021,
    precio: "$12.990.000",
    kilometraje: "110 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 27 millones.",
    nuevo: true,
    imagenes: ["/24.jpg", "/50.jpg", "/51.jpg", "/71.jpg", "/83.jpg"]
  },
  {
    id: 21,
    marca: "Peugeot ",
    modelo: "2008",
    año: 2016,
    precio: "$4.990.000",
    kilometraje: "200 mil kilómetros",
    estado: "Se va andando",
    airbag: "Airbag sellados",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/56.jpg", "/57.jpg", "/36.jpg", "/46.jpg", "/95.jpg"]
  },
   
 
  {
    id: 22,
    marca: "Toyota ",
    modelo: "Corolla ",
    año: 2012,
    precio: "$2.990.000",
    kilometraje: "200 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/150.jpg", "/68.jpg", "/4.jpg"]
  },
    {
    id: 23,
    marca: "Renault ",
    modelo: "Duster",
    año: 2016,
    precio: "$3.990.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/148.jpg", "/149.jpg"]
  },
   
    {
    id: 24,
    marca: "Hyundai ",
    modelo: "Elantra ",
    año: 2022,
    precio: "$4.990.000",
    kilometraje: "300 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/143.jpg", "/144.jpg", "/145.jpg"]
  },
    {
    id: 25,
    marca: "Suzuki ",
    modelo: "Vitara AllGrip ",
    año: 2016,
    precio: "$4.690.000",
    kilometraje: "100 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/140.jpg", "/141.jpg", "/142.jpg"]
  },
 
 {
    id: 26,
    marca: "Moto Bmw",
    modelo: "Gs310",
    año: 2026,
    precio: "$4.490.000",
    kilometraje: "8 mil kilómetros",
    estado: "Se va andando",
    airbag: "N/A",
    descripcion: "Seguro pagó 7.5 millones.",
    nuevo: true,
    imagenes: ["/81.jpg", "/82.jpg", "/27.jpg"]
  },
  {
    id: 27,
    marca: "Peugeot",
    modelo: "208",
    año: 2023,
    precio: "$6.490.000",
    kilometraje: "45 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/67.jpg", "/66.jpg", "/7.jpg", "/23.jpg"]
  },
  {
    id: 28,
    marca: "Range Rover",
    modelo: "Evoque Sport",
    año: 2013,
    precio: "$9.590.000",
    kilometraje: "107 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 24 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/Buggy5.jpg", "/93.jpg", "/22.jpg", "/35.jpg"]
  },
 {
    id: 29,
    marca: "Bmw",
    modelo: "X1 SDrive Look M",
    año: 2014,
    precio: "$4.990.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/63.jpg", "/69.jpg", "/75.jpg", "/60.jpg"]
  },
  {
    id: 30,
    marca: "Suzuki",
    modelo: "Grand Vitara Glx Sport",
    año: 2015,
    precio: "$4.490.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/8.jpg", "/9.jpg", "/33.jpg", "/49.jpg"]
  },
  {
    id: 31,
     marca: "Mazda",
    modelo: "Cx3",
    año: 2019,
    precio: "$7.490.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/58.jpg", "/107.jpg", "/92.jpg", "/76.jpg"]
  },
  {
    id: 32,
    marca: "Mercedes",
    modelo: "C180",
    año: 2014,
    precio: "$6.390.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/31.jpg", "/32.jpg", "/19.jpg", "/84.jpg", "/120.jpg"]
  },
  {
    id: 33,
    marca: "Chevrolet",
    modelo: "Ónix",
    año: 2018,
    precio: "$4.490.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/21.jpg",  "/1.jpg", "/108.jpg", "/109.jpg"]
  },
  {
    id: 34,
    marca: "Volvo",
    modelo: "Xc60 ll T5 (4x4)",
    año: 2019,
    precio: "$9.990.000",
    kilometraje: "87 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 26 millones.",
    nuevo: true,
    imagenes: ["/17.jpg", "/2.jpg", "/3.jpg", "/124.jpg"]
  },


  

  
]
