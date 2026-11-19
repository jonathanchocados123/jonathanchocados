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
    marca: "Tesla",
    modelo: "Model 3 Long Range",
    año: 2025,
    precio: "$14.990.000",
    kilometraje: "5 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag, Poco daño",
    descripcion: "Seguro pagó 40 millones.",
    nuevo: true,
    imagenes: ["/38.jpg", "/52.jpg", "/91.jpg"]
  },
     {
    id: 2,
    marca: "Suzuki",
    modelo: "Swift",
    año: 2026,
    precio: "$8.990.000",
    kilometraje: "1.300 kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 18 millones.",
    nuevo: true,
    imagenes: ["/100.jpg", "/53.jpg", "/55.jpg", "/61.jpg", "/110.jpg"]
  },
     {
    id: 3,
    marca: "Mercedes Benz",
    modelo: "E200",
    año: 2012,
    precio: "$6.990.000",
    kilometraje: "48 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/11.jpg", "/14.jpg", "/34.jpg", "/72.jpg", "/20.jpg"]
  },
     {
    id: 4,
    marca: "Kia",
    modelo: "Morning",
    año: 2022,
    precio: "$5.490.000",
    kilometraje: "48 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/111.jpg", "/112.jpg", "/64.jpg", "/39.jpg"]
  },
   {
    id: 5,
    marca: "Ford",
    modelo: "Territory Titanium",
    año: 2021,
    precio: "$8.490.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/40.jpg", "/41.jpg", "/42.jpg", "/12.jpg", "/47.jpg"]
  },
 {
    id: 6,
    marca: "Moto Bmw",
    modelo: "Gs310",
    año: 2026,
    precio: "$4.990.000",
    kilometraje: "8 mil kilómetros",
    estado: "Se va andando",
    airbag: "N/A",
    descripcion: "Seguro pagó 7.5 millones.",
    nuevo: true,
    imagenes: ["/81.jpg", "/82.jpg", "/27.jpg"]
  },
     {
    id: 7,
    marca: "Renault",
    modelo: "Doker",
    año: 2021,
    precio: "$4.990.000",
    kilometraje: "125 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/74.jpg", "/59.jpg", "/30.jpg", "/88.jpg"]
  },
  {
    id: 8,
    marca: "Ford",
    modelo: "Focus",
    año: 2019,
    precio: "$3.990.000",
    kilometraje: "46 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/101.jpg", "/85.jpg", "/96.jpg", "/97.jpg"]
  },
   {
    id: 9,
    marca: "Kia",
    modelo: "Sportage Pro",
    año: 2008,
    precio: "$2.490.000",
    kilometraje: "280 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/80.jpg", "/86.jpg", "/45.jpg", "/46.jpg"]
  },
  {
    id: 10,
    marca: "Toyota",
    modelo: "Yaris",
    año: 2022,
    precio: "$5.990.000",
    kilometraje: "200 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/87.jpg", "/89.jpg", "/90.jpg", "/94.jpg", "/95.jpg"]
  },
 {
    id: 11,
    marca: "Toyota",
    modelo: "Rav 4 Limited (4x4)",
    año: 2016,
    precio: "$8.490.000",
    kilometraje: "118 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 17 millones.",
    nuevo: true,
    imagenes: ["/43.jpg", "/44.jpg", "/16.jpg", "/25.jpg", "/26.jpg"]
  },
  {
    id: 12,
    marca: "Peugeot",
    modelo: "208",
    año: 2023,
    precio: "$7.990.000",
    kilometraje: "45 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/67.jpg", "/66.jpg", "/7.jpg", "/23.jpg"]
  },
     {
    id: 13,
    marca: "Volkswagen",
    modelo: "T Cross",
    año: 2021,
    precio: "$7.990.000",
    kilometraje: "130 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/Buggy4.jpg", "/Buggy3.jpg", "/Buggy2.jpg", "/Buggy1.jpg", "/62.jpg"]
  },
   {
    id: 14,
    marca: "Chevrolet",
    modelo: "Tracker",
    año: 2018,
    precio: "$5.990.000",
    kilometraje: "109 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/24.jpg", "/50.jpg", "/51.jpg"]
  },
   {
    id: 15,
    marca: "Range Rover",
    modelo: "Evoque Sport",
    año: 2013,
    precio: "$10.990.000",
    kilometraje: "107 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 24 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/Buggy5.jpg", "/93.jpg", "/22.jpg", "/35.jpg"]
  },
  {
    id: 16,
    marca: "Mazda",
    modelo: "3 Gt 2.5",
    año: 2025,
    precio: "$12.990.000",
    kilometraje: "15 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 29 millones.",
    nuevo: true,
    imagenes: ["/65.jpg", "/37.jpg", "/114.jpg"]
  },
    {
    id: 17,
    marca: "BYD",
    modelo: "Yuan Plus",
    año: 2024,
    precio: "$7.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 18 millones.",
    nuevo: true,
    imagenes: ["/77.jpg", "/78.jpg", "/29.jpg", "/10.jpg"]
  },
  {
    id: 18,
    marca: "Toyota",
    modelo: "Rav 4",
    año: 2013,
    precio: "$5.990.000",
    kilometraje: "13 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/98.jpg", "/99.jpg", "/102.jpg", "/79.jpg"]
  },
  {
    id: 19,
    marca: "Bmw",
    modelo: "X1 SDrive Look M",
    año: 2014,
    precio: "$5.990.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/63.jpg", "/69.jpg", "/75.jpg", "/60.jpg"]
  },
  {
    id: 20,
    marca: "Daihatsu",
    modelo: "Terios",
    año: 2013,
    precio: "$2.990.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/56.jpg", "/57.jpg", "/36.jpg"]
  },
 {
    id: 21,
    marca: "Mg",
    modelo: "Zs",
    año: 2019,
    precio: "$4.990.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/104.jpg", "/105.jpg", "/106.jpg", "/18.jpg", "/13.jpg"]
  },
   
  {
    id: 22,
    marca: "Suzuki",
    modelo: "Grand Vitara Glx Sport",
    año: 2015,
    precio: "$4.590.000",
    kilometraje: "140 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/8.jpg", "/9.jpg", "/33.jpg", "/49.jpg"]
  },
  {
    id: 23,
     marca: "Mazda",
    modelo: "Cx3",
    año: 2019,
    precio: "$7.590.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/58.jpg", "/107.jpg", "/92.jpg", "/76.jpg"]
  },
  {
    id: 24,
    marca: "Mercedes",
    modelo: "C180",
    año: 2014,
    precio: "$4.690.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/31.jpg", "/32.jpg", "/19.jpg", "/84.jpg", "/120.jpg"]
  },
  {
    id: 25,
    marca: "Chevrolet",
    modelo: "Ónix",
    año: 2018,
    precio: "$4.690.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/21.jpg",  "/1.jpg", "/108.jpg", "/109.jpg"]
  },
  {
    id: 26,
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
