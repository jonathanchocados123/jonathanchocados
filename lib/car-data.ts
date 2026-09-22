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
    marca: "Mazda",
    modelo: "Bt-50 (4x4)",
    año: 2019,
    precio: "$9.990.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 19 millones.",
    nuevo: true,
    imagenes: ["/48.jpg", "/118.jpg", "/119.jpg", "/120.jpg"]
  },
 {
    id: 2,
    marca: "Nissan",
    modelo: "X Trail 7P",
    año: 2024,
    precio: "$11.690.000",
    kilometraje: "38 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 26 millones.",
    nuevo: true,
    imagenes: ["/54.jpg", "/63.jpg", "/69.jpg", "/75.jpg", "/60.jpg"]
  },
  {
    id: 3,
    marca: "Volvo",
    modelo: "S60 Lmted",
    año: 2015,
    precio: "$7.590.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 16 millones.",
    nuevo: true,
    imagenes: ["/5.jpg", "/6.jpg", "/100.jpg", "/101.jpg", "/107.jpg"]
  },
  {
    id: 4,
    marca: "Citroen",
    modelo: "Ds4",
    año: 2016,
    precio: "$5.990.000",
    kilometraje: "150 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/24.jpg", "/50.jpg", "/51.jpg", "/52.jpg"]
  },
    {
    id: 5,
    marca: "Nissan",
    modelo: "X trail Advance",
    año: 2021,
    precio: "$7.490.000",
    kilometraje: "54 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag de cortina y asiento",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/23.jpg", "/56.jpg", "/57.jpg", "/72.jpg"]
  },
 {
    id: 6,
    marca: "Nissan",
    modelo: "versa",
    año: 2023,
    precio: "$6.990.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "Activo airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/103.jpg", "/25.jpg", "/26.jpg", "/20.jpg", "/53.jpg"]
  },
  {
    id: 7,
    marca: "Jaguar",
    modelo: "F Pace R Sport",
    año: 2018,
    precio: "$15.990.000",
    kilometraje: "86 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 32 millones.",
    nuevo: true,
    imagenes: ["/64.jpg", "/65.jpg", "/66.jpg", "/67.jpg", "/30.jpg"]
  },
   {
    id: 8,
    marca: "BMW",
    modelo: "118D M Sport",
    año: 2019,
    precio: "$12.990.000",
    kilometraje: "67 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 20 millones.",
    nuevo: true,
    imagenes: ["/33.jpg", "/49.jpg", "/58.jpg", "/68.jpg", "/121.jpg"]
  },
   {
    id: 9,
    marca: "Hyundai",
    modelo: "Creta",
    año: 2024,
    precio: "$9.990.000",
    kilometraje: "48 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 17 millones.",
    nuevo: true,
    imagenes: ["/17.jpg", "/2.jpg", "/3.jpg", "/124.jpg", "/87.jpg"]
  },
  {
    id: 10,
    marca: "New moto BMW",
    modelo: "G310 R",
    año: 2026,
    precio: "$3.990.000",
    kilometraje: "9 mil kilómetros",
    estado: "Se va andando",
    descripcion: "Seguro pagó 7.5 millones.",
    nuevo: true,
    imagenes: ["/122.jpg", "/90.jpg"]
  },
   {
    id: 11,
    marca: "Suzuki",
    modelo: "Baleno",
    año: 2018,
    precio: "$5.990.000",
    kilometraje: "160 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 9 millones.",
    nuevo: true,
    imagenes: ["/31.jpg", "/32.jpg", "/19.jpg", "/84.jpg"]
  },
  {
    id: 12,
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
    id: 13,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2019,
    precio: "$6.990.000",
    kilometraje: "90 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/21.jpg",  "/1.jpg", "/108.jpg", "/109.jpg", "/37.jpg"]
  },
   {
    id: 14,
    marca: "Omoda",
    modelo: "Cs 1.5",
    año: 2025,
    precio: "$7.590.000",
    kilometraje: "4 mil kilómetros",
    estado: "Se va andando",
    airbag: "No activo airbag",
    descripcion: "Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/4.jpg", "/11.jpg", "/27.jpg", "/28.jpg", "/123.jpg"]
  },
  {
    id: 15,
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
