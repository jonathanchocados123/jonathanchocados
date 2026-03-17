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
    marca: "Peugeot",
    modelo: "5008",
    año: 2019,
    precio: "$10.990.000",
    kilometraje: "130 mil km",
    transmision: "(Automático)",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "La compañía de seguros pagó 18millones al dueño.",
    nuevo: true,
    imagenes: ["/15.GIF", "/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"]
  },
  {
    id: 2,
    marca: "Volvo",
    modelo: " S60 D5 ",
    año: 2019,
    precio: "$9.990.000",
    kilometraje: "93 mil km",
    transmision: "Automático (4x4)",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "La compañía de seguros pagó 21millones al dueño.",
    nuevo: true,
    imagenes: ["/16.GIF","/10.jpg", "/11.jpg","/12.jpg","/13.jpg"]
  },
 
  {
    id: 3,
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
    imagenes: ["/2.GIF","/14.jpg","/15.jpg","/16.jpg", "/17.jpg", "/18.jpg"]
  },
  {
    id: 4,
    marca: "Chevrolet",
    modelo: "Groove ",
    año: 2023,
    precio: "$4.990.000",
    kilometraje: "50mil kilómetros",
    transmision: "Automático",
    estado: "Funcionando",
    airbag: "Activo airbag",
    descripcion: "La compañía de seguros pagó 10millones al dueño.",
    nuevo: true,
    imagenes: ["/17.GIF","/19.jpg","/20.jpg","/21.jpg","/22.jpg"]
  },
  {
    id: 5,
    marca: "Great wall",
    modelo: "3",
    año: 2019,
    precio: "$3.990.000",
    kilometraje: "80mil kilómetros",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 9millones al dueño.",
    nuevo: true,
    imagenes: ["/18.GIF","/23.jpg","/24.jpg","/25.jpg","/26.jpg"]
  },
  {
    id: 6,
    marca: "Jmc",
    modelo: "Vigus  ",
    año: 2023,
    precio: "$5.490.000",
    kilometraje: "70mil kilómetros ",
    estado: "Funcionando",
    airbag: "Activo airbag",
    descripcion: "La compañía de seguros pagó 13millones al dueño",
    nuevo: true,
    imagenes: ["/19.GIF","/27.jpg","/28.jpg","/29.jpg","/30.jpg"]
  },
  {
    id: 7,
    marca: "Mercedes Benz",
    modelo: "C180",
    año: 2014,
    precio: "$9.990.000",
    kilometraje: "130mil kilómetros ",
    transmision: "Automático",
    estado: "Funcionando",
    airbag: "Activo solo airbag de copiloto",
    descripcion: "La compañía de seguros pagó 15millones al dueño.",
    nuevo: true,
    imagenes: ["/20.GIF","/32.jpg","/33.jpg","/34.jpg","/35.jpg","/36.jpg"]
  },
 
  {
    id: 8,
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
    imagenes: ["/3.GIF","/42.jpg","/43.jpg","/44.jpg","/45.jpg"]
  },
  {
    id: 9,
    marca: "Jac",
    modelo: "Js4",
    año: 2022,
    precio: "$4.390.000",
    kilometraje: "60mil kilómetros ",
    estado: "Funcionando",
    airbag: "Activo airbag",
    descripcion: "Full. La compañía de seguros pagó 10millones al dueño.",
    nuevo: true,
    imagenes: ["/4.GIF","/46.jpg","/47.jpg","/48.jpg","/49.jpg"]
  },
   {
    id: 10,
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
    imagenes: ["/11.GIF","/50.jpg","/51.jpg","/52.jpg","/53.jpg"]
  },
   {
    id: 11,
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
    imagenes: ["/6.GIF","/54.jpg","/55.jpg","/56.jpg","/57.jpg","/58.jpg"]
  },
   {
    id: 12,
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
    imagenes: ["/5.GIF","/59.jpg","/60.jpg","/61.jpg", "/62.jpg","/63.jpg"]
   ,
  {
    id: 13,
    marca: "Volkswagen",
    modelo: "Saveiro",
    año: 2018,
    precio: "$3.990.000",
    kilometraje: "140 mil km",
    transmision: "Manual",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/10.GIF","/vs.jpg","/vs1.jpg","/vs2.jpg","/vs3.jpg"]
  },
  {
    id: 14,
    marca: "Subaru",
    modelo: "Impreza AWD",
    año: 2018,
    precio: "$7.990.000",
    kilometraje: "150 mil km",
    transmision: "Automático 4x4",
    estado: "Se va andando (poco daño)",
    airbag: "No activó airbag",
    descripcion: "Seguro pagó 12 millones.",
    nuevo: true,
    imagenes: ["/9.GIF","/imp-1.jpg","/imp-2.jpg","/imp-3.jpg","/imp-4.jpg"]
  },
  {
    id: 15,
    marca: "Ford",
    modelo: "Fiesta",
    año: 2019,
    precio: "$4.990.000",
    kilometraje: "70 mil km",
    transmision: "Manual",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Seguro pagó 9.5 millones.",
    nuevo: true,
    imagenes: ["/8.GIF","/ford3.jpg"]
  },
  {
    id: 16,
    marca: "Mazda",
    modelo: "2 Sport",
    año: 2012,
    precio: "$3.290.000",
    kilometraje: "170 mil km",
    transmision: "Manual",
    estado: "Se va andando (poco daño)",
    airbag: "No activó airbag",
    descripcion: "Seguro pagó 6.5 millones.",
    nuevo: true,
    imagenes: ["/7.GIF","/m2sport.jpg","/m2sport1.jpg", "/m2sport2.jpg", "/m2sport3.jpg"]
  },
  {
    id: 17,
    marca: "Chevrolet",
    modelo: "N400 Max",
    año: 2020,
    precio: "$2.990.000",
    kilometraje: "80 mil km",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Seguro pagó 7.5 millones. Furgón.",
    nuevo: true,
    imagenes: ["/14.GIF","/n400.jpg","/n400-1.jpg", "/n400-2.jpg", "/n400-3.jpg","/n400-4.jpg"]
  },
  {
    id: 18,
    marca: "Chrysler",
    modelo: "200",
    año: 2014,
    precio: "$4.990.000",
    kilometraje: "70 mil km",
    transmision: "Automático",
    estado: "Se va andando",
    airbag: "No informado",
    descripcion: "Recuperado de robo. Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/13.GIF","/c200-1.jpg", "/c200-2.jpg", "/c200-3.jpg","/c200-4.jpg"]
  },
  {
    id: 19,
    marca: "Mercedes Benz",
    modelo: "C250 AMG",
    año: 2015,
    precio: "$7.990.000",
    kilometraje: "220 mil km",
    transmision: "Automático",
    estado: "Se va andando (poco daño)",
    airbag: "No activó airbag",
    descripcion: "Full cuero techo. Seguro pagó 15 millones.",
    nuevo: true,
    imagenes: ["/12.GIF","/c250-1.jpg", "/c250-2.jpg", "/c250-3.jpg"]
  },
  {
    id: 20,
    marca: "Kia",
    modelo: "Cerato",
    año: 2019,
    precio: "$6.990.000",
    kilometraje: "130 mil km",
    transmision: "Manual",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Seguro pagó 13 millones.",
    nuevo: true,
    imagenes: ["/1.GIF","/cerato.jpg","/cerato-1.jpg", "/cerato-2.jpg", "/cerato-3.jpg","/cerato-4.jpg"]
  }

  
  

]








