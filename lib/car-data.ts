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
    marca: "Chevrolet",
    modelo: "Sail",
    año: 2025,
    precio: "$8.990.000",
    kilometraje: "20 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: [""]
  },
  {
    id: 2,
    marca: "Subaru",
    modelo: "Outback",
    año: 2016,
    precio: "$7.990.000",
    kilometraje: "200 mil km",
    transmision: "Automático",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"]
  },
  {
    id: 3,
    marca: "Toyota",
    modelo: "Raize",
    año: 2025,
    precio: "$8.990.000",
    kilometraje: "4 mil km",
    transmision: "Automático",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/9.jpg", "/10.jpg", "/11.jpg", "/12.jpg"]
  },
  {
    id: 4,
    marca: "Peugeot",
    modelo: "2008",
    año: 2021,
    precio: "$7.990.000",
    kilometraje: "120 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/9.jpg","/10.jpg","/11.jpg", "/12.jpg"]
  },
  {
    id: 5,
    marca: "BMW",
    modelo: "318i",
    año: 2018,
    precio: "$6.990.000",
    kilometraje: "140 mil km",
    transmision: "Automático",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/13.jpg","/14.jpg","/15.jpg", "/16.jpg"]
  },
  {
    id: 6,
    marca: "Nissan",
    modelo: "Versa",
    año: 2023,
    precio: "$5.990.000",
    kilometraje: "100 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/17.jpg","/18.jpg","/19.jpg", "/20.jpg"]
  },
  {
    id: 7,
    marca: "Jmc",
    modelo: "Vigus Word 4x44",
    año: 2023,
    precio: "$5.990.000",
    kilometraje: "75 mil km Full (Diésel)4x4",
    transmision: "Manual",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/21.jpg"]
  },
  {
    id: 8,
    marca: "Chery",
    modelo: "Tiggo 7 Pro",
    año: 2022,
    precio: "$8.990.000",
    kilometraje: "36 mil km",
    transmision: "Automático",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/25.jpg","/26.jpg","/27.jpg", "/28.jpg"]
  },
  {
    id: 9,
    marca: "Chevrolet",
    modelo: "ónix RS",
    año: 2023,
    precio: "$6.990.000",
    kilometraje: "100 mil km",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/29.jpg"]
  },
  {
    id: 10,
    marca: "Suzuki",
    modelo: "Baleno",
    año: 2023,
    precio: "$7.990.000",
    kilometraje: "59 mil km",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/33.jpg","/34.jpg","/35.jpg", "/36.jpg"]
  },
  {
    id: 11,
    marca: "Changan",
    modelo: "Cx70",
    año: 2020,
    precio: "$5.890.000",
    kilometraje: "64 mil km",
    estado: "Funcionando",
    airbag: "Activo airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/37.jpg","/38.jpg","/39.jpg", "/40.jpg"]
  },
   {
    id: 12,
    marca: "Subaru",
    modelo: "Outback",
    año: 2010,
    precio: "$2.990.000",
    kilometraje: "230 mil km",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/41.jpg","/42.jpg","/43.jpg", "/44.jpg"]
  },
   {
    id: 13,
    marca: "Ram",
    modelo: "1000 Big Horn",
    año: 2023,
    precio: "$8.790.000",
    kilometraje: "75 mil km",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/45.jpg","/46.jpg","/47.jpg", "/48.jpg"]
  },
   {
    id: 14,
    marca: "Nissan",
    modelo: "Qashqai",
    año: 2016,
    precio: "$5.490.000",
    kilometraje: "100 mil km",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/49.jpg","/50.jpg","/51.jpg", "/52.jpg"]
  },
   {
    id: 15,
    marca: "Jac",
    modelo: "Js4",
    año: 2022,
    precio: "$4.390.000",
    kilometraje: "60 mil km",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/53.jpg","/54.jpg","/55.jpg", "/56.jpg"]
  },
   {
    id: 16,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$4.890.000",
    kilometraje: "80 mil km",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/57.jpg","/58.jpg","/59.jpg", "/60.jpg"]
  },
   {
    id: 17,
    marca: "Mazda 2",
    modelo: "sedan",
    año: 2016,
    precio: "$4.990.000",
    kilometraje: "160 mil km",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/61.jpg","/62.jpg","/63.jpg", "/64.jpg"]
  },
   {
    id: 18,
    marca: "Peugeot",
    modelo: "3008",
    año: 2019,
    precio: "$7.490.000",
    kilometraje: "110 mil km",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/65.jpg","/66.jpg","/67.jpg"]
  },
  {
    id: 19,
    marca: "Ford",
    modelo: "F-150 Platinum",
    año: 2015,
    precio: "(Se recibe vehículo solo por esta unidad)$14.790.000",
    kilometraje: "210 mil km",
    estado: "Funcionando",
    airbag: "(Ojo vehículo sin pérdida)",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: ["/65.jpg","/66.jpg","/67.jpg"]
  },
  {
    id: 20,
    marca: "Mazda",
    modelo: "cx30",
    año: 2022,
    precio: "9.990.000",
    kilometraje: "210 mil km",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: [""]
  },
    {
    id: 21,
    marca: "Chery",
    modelo: "tiggo 2",
    año: 2017,
    precio: "2.990.000",
    kilometraje: "70 mil km",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: [""]
  },
   {
    id: 22,
    marca: "Great",
    modelo: "Wall wingle 5 (Diésel)",
    año: 2018,
    precio: "5.990.000 ",
    kilometraje: "70 mil km",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. Vehículo de compañía de seguros.",
    nuevo: true,
    imagenes: [""]
  }

]
