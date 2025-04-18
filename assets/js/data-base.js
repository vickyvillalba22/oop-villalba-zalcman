//aca se pueden agregar eventos. Este en realidad es general pero si el admin agrega, se deberian agregar a los data de cada tipo de evento. 
export const eventos = [];

export const peliculasData = [
    {
        nombre: "Interstellar",
        fecha: "2025-05-01",
        horario: "20:00",
        duracion: 2.49,
        precio: 1500,
        capacidad: 100,
        genero: "Ciencia ficción",
        directorCine: "Christopher Nolan",
        dondeCine: "Cine Hoyts Abasto",
        asiento: "Fila 7, Asiento 12"
    },
    {
        nombre: "Inception",
        fecha: "2025-05-03",
        horario: "22:00",
        duracion: 2.28,
        precio: 1600,
        capacidad: 90,
        genero: "Thriller",
        directorCine: "Christopher Nolan",
        dondeCine: "Cinemark Palermo",
        asiento: "Fila 4, Asiento 5"
    },
    {
        nombre: "La La Land",
        fecha: "2025-05-05",
        horario: "19:30",
        duracion: 2.08,
        precio: 1400,
        capacidad: 120,
        genero: "Musical",
        directorCine: "Damien Chazelle",
        dondeCine: "Cine Gaumont",
        asiento: "Fila 9, Asiento 8"
    },
    {
        nombre: "Parasite",
        fecha: "2025-05-07",
        horario: "21:00",
        duracion: 2.12,
        precio: 1700,
        capacidad: 85,
        genero: "Drama",
        directorCine: "Bong Joon-ho",
        dondeCine: "Village Recoleta",
        asiento: "Fila 2, Asiento 10"
    },
    {
        nombre: "The Grand Budapest Hotel",
        fecha: "2025-05-09",
        horario: "20:45",
        duracion: 1.39,
        precio: 1500,
        capacidad: 95,
        genero: "Comedia",
        directorCine: "Wes Anderson",
        dondeCine: "Multiplex Belgrano",
        asiento: "Fila 6, Asiento 6"
    },
    {
        nombre: "The Social Network",
        fecha: "2025-05-14",
        horario: "20:00",
        duracion: 2.00,
        precio: 1500,
        capacidad: 85,
        genero: "Biografía",
        directorCine: "David Fincher",
        dondeCine: "Atlas Nordelta",
        asiento: "Fila 5, Asiento 3"
    }
];

export const obrasData = [
    {
      nombre: "La Casa de Bernarda Alba",
      fecha: "2025-05-10",
      horario: "20:30",
      duracion: 120,
      precio: 3500,
      capacidad: 150,
      elenco: ["Ana López", "María González", "Carla Suárez"],
      directorTeatro: "Lucía Fernández",
      tipoObra: "Drama",
      sectorTeatro: "Sala Principal",
      butaca: "Platea"
    },
    {
      nombre: "Sueño de una noche de verano",
      fecha: "2025-05-15",
      horario: "21:00",
      duracion: 100,
      precio: 3000,
      capacidad: 200,
      elenco: ["Julián Rivas", "Camila Blanco", "Fernando Torres"],
      directorTeatro: "Marcelo Gómez",
      tipoObra: "Comedia",
      sectorTeatro: "Sala 2",
      butaca: "General"
    },
    {
      nombre: "Esperando la carroza",
      fecha: "2025-06-01",
      horario: "19:00",
      duracion: 90,
      precio: 2800,
      capacidad: 120,
      elenco: ["Laura Medina", "Carlos Pinto", "Nora Vega"],
      directorTeatro: "Federico Ledesma",
      tipoObra: "Comedia negra",
      sectorTeatro: "Sala Principal",
      butaca: "Palco"
    },
    {
      nombre: "El zoo de cristal",
      fecha: "2025-06-10",
      horario: "20:00",
      duracion: 110,
      precio: 3200,
      capacidad: 100,
      elenco: ["Luciana Castro", "Pedro Almada", "Juana Rojas"],
      directorTeatro: "Silvia Barreto",
      tipoObra: "Drama psicológico",
      sectorTeatro: "Sala 3",
      butaca: "Platea"
    },
    {
      nombre: "Hamlet",
      fecha: "2025-06-20",
      horario: "21:00",
      duracion: 150,
      precio: 4000,
      capacidad: 250,
      elenco: ["Iván Herrera", "Claudia Ramos", "Esteban Salinas"],
      directorTeatro: "Ramiro Escudero",
      tipoObra: "Tragedia",
      sectorTeatro: "Auditorio Principal",
      butaca: "Preferencial"
    },
    {
        nombre: "Toc Toc",
        fecha: "2025-06-25",
        horario: "20:30",
        duracion: 105,
        precio: 3100,
        capacidad: 180,
        elenco: ["Martín Pérez", "Agustina Díaz", "Sofía Herrera", "Diego Romero"],
        directorTeatro: "Gabriela Sosa",
        tipoObra: "Comedia",
        sectorTeatro: "Sala 1",
        butaca: "General"
      }
];

export const recitalesData = [
  {
    nombre: "Noches de Rock",
    fecha: "2025-06-15",
    horario: "21:00",
    duracion: 120,
    precio: 9500,
    capacidad: 5000,
    artista: "Los Infiltrados",
    generoMusical: "Rock",
    nombreAlbum: "Caos Perfecto"
  },
  {
    nombre: "Vibraciones Urbanas",
    fecha: "2025-05-22",
    horario: "20:30",
    duracion: 90,
    precio: 8200,
    capacidad: 3000,
    artista: "La Rima Salvaje",
    generoMusical: "Hip-Hop",
    nombreAlbum: "Ritmo Real"
  },
  {
    nombre: "Electro Night",
    fecha: "2025-07-08",
    horario: "23:00",
    duracion: 180,
    precio: 12000,
    capacidad: 7000,
    artista: "DJ Nova",
    generoMusical: "Electrónica",
    nombreAlbum: "Galaxia"
  },
  {
    nombre: "Cuerdas del Alma",
    fecha: "2025-04-28",
    horario: "19:00",
    duracion: 75,
    precio: 6000,
    capacidad: 1500,
    artista: "Lucía Pérez",
    generoMusical: "Folk",
    nombreAlbum: "Raíz"
  },
  {
    nombre: "Latido Tropical",
    fecha: "2025-08-12",
    horario: "22:00",
    duracion: 100,
    precio: 7800,
    capacidad: 3500,
    artista: "Grupo Caribe",
    generoMusical: "Salsa",
    nombreAlbum: "Sabor y Ritmo"
  },
  {
    nombre: "Metal del Sur",
    fecha: "2025-09-03",
    horario: "20:00",
    duracion: 110,
    precio: 9900,
    capacidad: 4000,
    artista: "Hierro Austral",
    generoMusical: "Metal",
    nombreAlbum: "Aullido"
  }
];
  

export const candies = [
  {
      nombre: "Combo Gominolas",
      precio: 1500,
      cant_disp: 20,
      tipo: "snack dulce",
      dulce: true,
      bebida: false,
      tamano: "mediano"
  },
  {
      nombre: "Combo Popcorn + Gaseosa",
      precio: 2500,
      cant_disp: 15,
      tipo: "combo cine",
      dulce: true,
      bebida: true,
      tamano: "grande"
  },
  {
      nombre: "Nachos con queso",
      precio: 1800,
      cant_disp: 10,
      tipo: "snack salado",
      dulce: false,
      bebida: false,
      tamano: "chico"
  }
];

export const tragos = [
  {
      nombre: "Fernet con Coca",
      precio: 2200,
      cant_disp: 30,
      tipo: "bebida alcohólica",
      alcoholico: true,
      graduacion: "40%",
      tipo_vaso: "vaso largo"
  },
  {
      nombre: "Mojito",
      precio: 2500,
      cant_disp: 20,
      tipo: "cocktail",
      alcoholico: true,
      graduacion: "25%",
      tipo_vaso: "vaso corto"
  },
  {
      nombre: "Limonada",
      precio: 1200,
      cant_disp: 25,
      tipo: "sin alcohol",
      alcoholico: false,
      graduacion: "0%",
      tipo_vaso: "vaso largo"
  }
];

export const hamburguesas = [
  {
      nombre: "Hamburguesa Clásica",
      precio: 2800,
      cant_disp: 18,
      tipo: "comida rápida",
      tipo_carne: "vacuna",
      acompanamiento: "papas",
      tamano: "doble"
  },
  {
      nombre: "Hamburguesa Veggie",
      precio: 2600,
      cant_disp: 12,
      tipo: "comida vegetariana",
      tipo_carne: "veggie",
      acompanamiento: "nachos",
      tamano: "simple"
  },
  {
      nombre: "Hamburguesa Crispy",
      precio: 2900,
      cant_disp: 20,
      tipo: "comida rápida",
      tipo_carne: "pollo",
      acompanamiento: "papas",
      tamano: "doble"
  }
];

