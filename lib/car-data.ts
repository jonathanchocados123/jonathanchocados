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
    modelo: "Bronco Sport WildTrack",
    año: 2022,
    precio: "$12.690.000",
    kilometraje: "70 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 23 millones.",
    nuevo: true,
    imagenes: [ "/115.jpg", "/61.jpg", "/111.jpg", "/112.jpg", "/42.jpg"]
  },
 {
    id: 2,
    marca: "Mercedes",
    modelo: "B200",
    año: 2019,
    precio: "$8.990.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 19 millones.",
    nuevo: true,
    imagenes: ["/Buggy.jpg", "/55.jpg", "/110.jpg", "/113.jpg", "/41.jpg"]
  },
   {
    id: 3,
    marca: "Hyundai",
    modelo: "Gran i10",
    año: 2019,
    precio: "$4.990.000",
    kilometraje: "80 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 8 millones.",
    nuevo: true,
    imagenes: ["/48.jpg", "/118.jpg", "/119.jpg", "/120.jpg", "/74.jpg"]
  },
   {
    id: 4,
    marca: "Suzuki",
    modelo: "Swift",
    año: 2019,
    precio: "$3.490.000",
    kilometraje: "120 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/23.jpg", "/56.jpg", "/57.jpg", "/72.jpg", "/29.jpg"]
  },
    {
    id: 5,
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
  {
    id: 6,
    marca: "Suzuki",
    modelo: "Swift",
    año: 2015,
    precio: "$4.990.000",
    kilometraje: "122 mil kilómetros",
    estado: "Se va andando",
    descripcion: "Seguro pagó 7 millones.",
    nuevo: true,
    imagenes: ["/122.jpg", "/90.jpg", "/36.jpg", "/38.jpg", "/88.jpg"]
  },
   {
    id: 7,
    marca: "Volvo",
    modelo: "S60 D4 Cross Country",
    año: 2019,
    precio: "$15.990.000",
    kilometraje: "96 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 21 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg", "/60.jpg"]
  },
  {
    id: 8,
    marca: "Kia",
    modelo: "Sportage",
    año: 2024,
    precio: "$9.990.000",
    kilometraje: "60 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 24 millones.",
    nuevo: true,
    imagenes: ["/43.jpg", "/44.jpg", "/16.jpg", "/92.jpg"]
  },
  {
    id: 9,
    marca: "Chevrolet",
    modelo: "Groove Ltz",
    año: 2021,
    precio: "$6.990.000",
    kilometraje: "94 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/24.jpg", "/50.jpg", "/51.jpg", "/52.jpg", "/91.jpg"]
  },
   {
    id: 10,
    marca: "Ford",
    modelo: "Explorer",
    año: 2015,
    precio: "$7.990.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "Recuperada de robo",
    descripcion: "Seguro pagó 14 millones.",
    nuevo: true,
    imagenes: ["/33.jpg", "/49.jpg", "/58.jpg", "/68.jpg", "/121.jpg"]
  },
  {
    id: 11,
    marca: "Chevrolet",
    modelo: "Traverse lll",
    año: 2013,
    precio: "$4.990.000",
    kilometraje: "110 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 10 millones.",
    nuevo: true,
    imagenes: ["/64.jpg", "/65.jpg", "/66.jpg", "/67.jpg", "/30.jpg", "/87.jpg"]
  },
  {
    id: 12,
    marca: "Volvo",
    modelo: "S60 Lmted",
    año: 2015,
    precio: "$6.990.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/100.jpg", "/101.jpg", "/107.jpg"]
  },
{
    id: 13,
    marca: "Nissan",
    modelo: "versa",
    año: 2023,
    precio: "$5.990.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/103.jpg", "/25.jpg", "/26.jpg", "/20.jpg", "/53.jpg"]
  },
   {
    id: 14,
    marca: "Suzuki",
    modelo: "Baleno",
    año: 2018,
    precio: "$4.990.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/31.jpg", "/32.jpg", "/19.jpg", "/84.jpg"]
  },
  {
    id: 15,
    marca: "Skoda",
    modelo: "Rapid SpaceBack",
    año: 2015,
    precio: "$3.990.000",
    kilometraje: "190 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/39.jpg", "/40.jpg", "/80.jpg", "/81.jpg", "/116.jpg"]
  },
  {
    id: 16,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2019,
    precio: "$6.490.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/21.jpg",  "/1.jpg", "/108.jpg", "/109.jpg", "/37.jpg"]
  },
   {
    id: 17,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$3.890.000",
    kilometraje: "80 mil kilómetros",
    transmision: "(Automático)",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. La compañía de seguros pagó 9millones al dueño.",
    nuevo: true,
    imagenes: ["/cherytigo2-4.jpg","/cherytigo2-3.jpg","/cherytigo2-2.jpg","/cherytigo2-1.jpg"]
  },
  

  
]
