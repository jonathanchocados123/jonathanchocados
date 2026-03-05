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
    marca: "Bmw 316i",
    modelo: "(TwinPowerTurbo)",
    año: 2015,
    precio: "$9.990.000",
    kilometraje: "120 mil km",
    transmision: "(Automático)",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "Full cuero. La compañía de seguros pagó 13,5millones al dueño..",
    nuevo: true,
    imagenes: ["/1.jpg", "/2.jpg", "/3.jpg, "/4.jpg", "/5.jpg"]
  },
  {
    id: 2,
    marca: "Nissan",
    modelo: " Pahtfinder Exclusive ",
    año: 2016,
    precio: "$6.990.000",
    kilometraje: "140 mil km",
    transmision: "Automático (4x4)",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "Full,cuero,techo. La compañía de seguros pagó 12millones al dueño.",
    nuevo: true,
    imagenes: ["/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg"]
  },
  {
    id: 3,
    marca: "Toyota",
    modelo: "4Runner",
    año: 2007,
    precio: "$6.490.000",
    kilometraje: "250mil km",
    transmision: "Automático",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "La compañía de seguros pagó 11millones al dueño.",
    nuevo: true,
    imagenes: ["/10.jpg", "/11.jpg", "/12.jpg", "/13.jpg"]
  },
  {
    id: 4,
    marca: "Jaguar",
    modelo: "F-Pace 20D(DIESEL)",
    año: 2018,
    precio: "$18.990.000",
    kilometraje: "80mil kilómetros",
    transmision: "(Automática) (4x4)",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "La compañía de seguros pagó 28millones al dueño..",
    nuevo: true,
    imagenes: ["/14.jpg","/15.jpg","/16.jpg", "/17.jpg", "/18.jpg"]
  },
  {
    id: 5,
    marca: "Ssangyong",
    modelo: "Rexton",
    año: 2017,
    precio: "$4.990.000",
    kilometraje: "190mil kilómetros ",
    transmision: "Automático (DIESEL)",
    estado: "Funcionando",
    airbag: "No activo airbag",
    descripcion: "Full, La compañía de seguros pagó 9millones al dueño.",
    nuevo: true,
    imagenes: ["/19.jpg","/20.jpg","/21.jpg", "/22.jpg"]
  },
  {
    id: 6,
    marca: "Jeep",
    modelo: "Compass",
    año: 2021,
    precio: "$7.490.000",
    kilometraje: "70mil kilómetros ",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "Full. La compañía de seguros pagó 15millones al dueño.",
    nuevo: true,
    imagenes: ["/23.jpg","/24.jpg","/25.jpg", "/26.jpg"]
  },
  {
    id: 7,
    marca: "Suzuki",
    modelo: "VGran Nomade",
    año: 2023,
    precio: "$3.990.000",
    kilometraje: "135mil kilómetros",
    transmision: "Manual",
    estado: "Funcionando",
    airbag: "No activo airbag",
    descripcion: "Full. La compañía de seguros pagó 8.5millones al dueño.",
    nuevo: true,
    imagenes: ["/27.jpg", "/28.jpg", "/29.jpg", "/30.jpg", "/31.jpg"]
  },
  {
    id: 8,
    marca: "Honda",
    modelo: "civic",
    año: 2017,
    precio: "$7.990.000",
    kilometraje: "100mil kilómetros",
    transmision: "Automático",
    estado: "Funcionando",
    airbag: "Activo solo airbag de copiloto",
    descripcion: "Full. La compañía de seguros pagó 13millones al dueño.",
    nuevo: true,
    imagenes: ["/32.jpg","/33.jpg","/34.jpg", "/35.jpg", "/36.jpg"]
  },
  {
    id: 9,
    marca: "Peugeot",
    modelo: "2008",
    año: 2019,
    precio: "$5.490.000",
    kilometraje: "130mil kilómetros ",
    transmision: "-",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "Full (DIESEL). La compañía de seguros pagó 9,5millones al dueño.",
    nuevo: true,
    imagenes: ["/37.jpg", "/38.jpg","/39.jpg","/40.jpg", "/41.jpg"]
  },
  {
    id: 10,
    marca: "Nissan",
    modelo: "Qashqai",
    año: 2016,
    precio: "$5.490.000",
    kilometraje: "100mil kilómetros ",
    transmision: "(Manual)",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full. La compañía de seguros pagó 10millones al dueño.",
    nuevo: true,
    imagenes: ["/42.jpg","/43.jpg","/44.jpg", "/45.jpg"]
  },
  {
    id: 11,
    marca: "Jac",
    modelo: "Js4",
    año: 2022,
    precio: "$4.390.000",
    kilometraje: "60mil kilómetros ",
    estado: "Funcionando",
    airbag: "Activo airbag",
    descripcion: "Full. La compañía de seguros pagó 10millones al dueño.",
    nuevo: true,
    imagenes: ["/46.jpg","/47.jpg","/48.jpg", "/49.jpg"]
  },
   {
    id: 12,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$4.890.000",
    kilometraje: "80mil kilómetros",
    transmision: "(Automático)",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. La compañía de seguros pagó 9millones al dueño.",
    nuevo: true,
    imagenes: ["/50.jpg","/51.jpg","/52.jpg", "/53.jpg"]
  },
   {
    id: 13,
    marca: "Mazda",
    modelo: "2 sedan",
    año: 2016,
    precio: "$4.990.000",
    kilometraje: "160mil kilómetros",
    transmision: "(Automático)",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. La compañía de seguros pagó 9,5millones al dueño.",
    nuevo: true,
    imagenes: ["/45.jpg","/46.jpg","/47.jpg", "/48.jpg"]
  },
   {
    id: 14,
    marca: "Ford",
    modelo: "F-150 Platinum",
    año: 2015,
    precio: "$14.790.000",
    kilometraje: "210mil kilómetros ",
    transmision: "(Automático) (4x4)",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full,cuero,techo. Vehículo de particular (Ojo vehículo sin pérdida) (Se recibe vehículo solo por esta unidad) Valor comercial 20millones ",
    nuevo: true,
    imagenes: ["/59.jpg","/60.jpg","/61.jpg", "/62.jpg", "/63.jpg"]
  }
  

]





