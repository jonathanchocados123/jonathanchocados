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
    precio:"$9.290.000",
    kilometraje: "130 mil km",
    transmision: "(Automático)",
    estado: "Se va andando",
    airbag: "Activó airbag",
    descripcion: "La compañía de seguros pagó 18millones al dueño.",
    nuevo: true,
    imagenes: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"]
  },
  {
    id: 2,
    marca: "Volvo",
    modelo: " S60 D5 ",
    año: 2019,
    precio: "$8.690.000",
    kilometraje: "93 mil km",
    transmision: "Automático (4x4)",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "La compañía de seguros pagó 21millones al dueño.",
    nuevo: true,
    imagenes: ["/10.jpg", "/11.jpg","/12.jpg","/13.jpg"]
  },
 
  {
    id: 3,
    marca: "Jaguar",
    modelo: "F-Pace 20D(DIESEL)",
    año: 2018,
    precio: "$17.990.000",
    kilometraje: "80mil kilómetros",
    transmision: "(Automática) (4x4)",
    estado: "Se va andando",
    airbag: "No activó airbag",
    descripcion: "La compañía de seguros pagó 28millones al dueño..",
    nuevo: true,
    imagenes: ["/14.jpg","/15.jpg","/16.jpg", "/17.jpg", "/18.jpg"]
  },
  {
    id: 4,
    marca: "Chevrolet",
    modelo: "Groove ",
    año: 2023,
    precio: "$4.490.000",
    kilometraje: "50mil kilómetros",
    transmision: "Automático",
    estado: "Funcionando",
    airbag: "Activo airbag",
    descripcion: "La compañía de seguros pagó 10millones al dueño.",
    nuevo: true,
    imagenes: ["/19.jpg","/20.jpg","/21.jpg","/22.jpg"]
  },
  {
    id: 5,
    marca: "Mg Zs",
    modelo: "Zs",
    año: 2019,
    precio: "$4.290.000",
    kilometraje: "65mil kilómetros",
    transmision: "Manual",
    estado: "Se va andando",
    airbag: "No Activó airbag",
    descripcion: "La compañía de seguros pagó 8,5 millones al dueño.",
    nuevo: true,
    imagenes: ["/23.jpg","/24.jpg","/25.jpg","/26.jpg","/mgzs.jpg"],
  },
  {
    id: 6,
    marca: "Nissan",
    modelo: "versa",
    año: 2025,
    precio: "$7.590.000",
    kilometraje: "30 mil kilómetros ",
    estado: "Funcionando",
    airbag: "Activo airbag",
    descripcion: "La compañía de seguros pagó 14 millones al dueño",
    nuevo: true,
    imagenes: ["/27.jpg","/28.jpg","/29.jpg"]
  },
  
  {
    id: 7,
    marca: "Nissan",
    modelo: "Qashqai",
    año: 2016,
    precio: "$4.990.000",
    kilometraje: "100mil kilómetros ",
    transmision: "(Manual)",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full. La compañía de seguros pagó 10millones al dueño.",
    nuevo: true,
    imagenes: ["/42.jpg","/43.jpg","/44.jpg","/45.jpg"]
  },
  {
    id: 8,
    marca: "Jac",
    modelo: "Js4",
    año: 2022,
    precio: "$3.990.000",
    kilometraje: "60mil kilómetros ",
    estado: "Funcionando",
    airbag: "Activo airbag",
    descripcion: "Full. La compañía de seguros pagó 10millones al dueño.",
    nuevo: true,
    imagenes: ["/JacJs43.jpg","/JacJs42.jpg","/JacJs41.jpg","/JacJs4.jpg"]
  },
   {
    id: 9,
    marca: "Chery",
    modelo: "Tiggo 2",
    año: 2022,
    precio: "$4.490.000",
    kilometraje: "80mil kilómetros",
    transmision: "(Automático)",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. La compañía de seguros pagó 9millones al dueño.",
    nuevo: true,
    imagenes: ["/cherytigo2-4.jpg","/cherytigo2-3.jpg","/cherytigo2-2.jpg","/cherytigo2-1.jpg"]
  },
   {
    id: 10,
    marca: "Mazda",
    modelo: "2 sedan",
    año: 2016,
    precio: "$4.790.000",
    kilometraje: "160mil kilómetros",
    transmision: "(Automático)",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Full. La compañía de seguros pagó 9,5millones al dueño.",
    nuevo: true,
    imagenes: ["/54.jpg","/55.jpg","/56.jpg","/57.jpg","/58.jpg"]
  },
   {
    id: 11,
    marca: "Ford",
    modelo: "F-150 Platinum",
    año: 2015,
    precio: "$14.490.000",
    kilometraje: "210mil kilómetros ",
    transmision: "(Automático) (4x4)",
    estado: "Funcionando",
    airbag: "Activó airbag",
    descripcion: "Full,cuero,techo. Vehículo de particular (Ojo vehículo sin pérdida) (Se recibe vehículo solo por esta unidad) Valor comercial 20millones ",
    nuevo: true,
    imagenes: ["/59.jpg","/60.jpg","/61.jpg", "/62.jpg","/63.jpg"]
   },
  {
    id: 12,
    marca: "Volkswagen",
    modelo: "Saveiro",
    año: 2018,
    precio: "$3.690.000",
    kilometraje: "140 mil km",
    transmision: "Manual",
    estado: "Funcionando",
    airbag: "No activó airbag",
    descripcion: "Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/vs.jpg","/vs1.jpg","/vs2.jpg","/vs3.jpg"]
  },
  {
    id: 13,
    marca: "Mazda",
    modelo: "3 Sport 2.0",
    año: 2017,
    precio: "$6.990.000",
    kilometraje: "190 mil km",
    transmision: "Manual",
    estado: "Se va andando (poco daño)",
    airbag: "No activó airbag",
    descripcion: "Seguro pagó 11 millones.",
    nuevo: true,
    imagenes: ["/mazda3sport4.jpg","/mazda3sport3.jpg", "/mazda3sport1.jpg", "/mazda3sport.jpg"]
  },
   {
    id: 14,
    marca: "Chrysler",
    modelo: "200",
    año: 2014,
    precio: "$4.490.000",
    kilometraje: "70 mil km",
    transmision: "Automático",
    estado: "Se va andando",
    airbag: "No informado",
    descripcion: "Recuperado de robo. Seguro pagó 8.5 millones.",
    nuevo: true,
    imagenes: ["/c200-1.jpg", "/c200-2.jpg", "/c200-3.jpg","/c200-4.jpg"]
  }

]








