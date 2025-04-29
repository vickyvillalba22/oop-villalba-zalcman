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
      asiento: "Fila 7, Asiento 12",
      imagen: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
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
      asiento: "Fila 4, Asiento 5",
      imagen: "https://i.pinimg.com/474x/5b/80/2a/5b802a212478e2c73571f9395f84efd5.jpg"
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
      asiento: "Fila 9, Asiento 8",
      imagen: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png"
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
      asiento: "Fila 2, Asiento 10",
      imagen: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png"
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
      asiento: "Fila 6, Asiento 6",
      imagen: "https://www.blogartesvisuales.net/wp-content/uploads/2014/05/grand-budapest-hotel-poster.jpg"
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
      asiento: "Fila 5, Asiento 3",
      imagen: "https://pics.filmaffinity.com/La_Red_Social-547593334-large.jpg"
  }
];


export const obrasData = [
  {
    nombre: "La Casa de Bernarda Alba",
    fecha: "2025-05-10",
    horario: "20:30",
    duracion: 2,
    precio: 3500,
    capacidad: 150,
    elenco: ["Ana López", "María González", "Carla Suárez"],
    directorTeatro: "Lucía Fernández",
    tipoObra: "Drama",
    sectorTeatro: "Sala Principal",
    butaca: "Platea",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kHIrYxj89bomDnKjXYAwIuKNqAvIIoU9yQ&s"
  },
  {
    nombre: "Sueño de una noche de verano",
    fecha: "2025-05-15",
    horario: "21:00",
    duracion: 1.6,
    precio: 3000,
    capacidad: 200,
    elenco: ["Julián Rivas", "Camila Blanco", "Fernando Torres"],
    directorTeatro: "Marcelo Gómez",
    tipoObra: "Comedia",
    sectorTeatro: "Sala 2",
    butaca: "General",
    imagen: "https://www.teatronacional.go.cr/repositorio/detail/58-1679_sueo.jpg"
  },
  {
    nombre: "Esperando la carroza",
    fecha: "2025-06-01",
    horario: "19:00",
    duracion: 1.5,
    precio: 2800,
    capacidad: 120,
    elenco: ["Laura Medina", "Carlos Pinto", "Nora Vega"],
    directorTeatro: "Federico Ledesma",
    tipoObra: "Comedia negra",
    sectorTeatro: "Sala Principal",
    butaca: "Palco",
    imagen: "https://www.ciudad.com.ar/resizer/v2/esperando-la-carroza-llega-al-teatro-cuando-y-como-comprar-las-entradas-WZ5QNRI3S5ANFO2AIFB4OF2ZJA.jpg?auth=57ddc457f1eae9bf9f1c46e48d83b82d244a18b34c39604c65845489e644aa1c&width=1440"
  },
  {
    nombre: "El zoo de cristal",
    fecha: "2025-06-10",
    horario: "20:00",
    duracion: 1.8,
    precio: 3200,
    capacidad: 100,
    elenco: ["Luciana Castro", "Pedro Almada", "Juana Rojas"],
    directorTeatro: "Silvia Barreto",
    tipoObra: "Drama psicológico",
    sectorTeatro: "Sala 3",
    butaca: "Platea",
    imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/c6/38/c63889a3b2da312f06f3131c2e70f09b.jpg"
  },
  {
    nombre: "Hamlet",
    fecha: "2025-06-20",
    horario: "21:00",
    duracion: 1.9,
    precio: 4000,
    capacidad: 250,
    elenco: ["Iván Herrera", "Claudia Ramos", "Esteban Salinas"],
    directorTeatro: "Ramiro Escudero",
    tipoObra: "Tragedia",
    sectorTeatro: "Auditorio Principal",
    butaca: "Preferencial",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7JzUmJj35RXbOCiiTGIS9kJko4UQMTg03A&s"
  },
  {
    nombre: "Toc Toc",
    fecha: "2025-06-25",
    horario: "20:30",
    duracion: 1.5,
    precio: 3100,
    capacidad: 180,
    elenco: ["Martín Pérez", "Agustina Díaz", "Sofía Herrera", "Diego Romero"],
    directorTeatro: "Gabriela Sosa",
    tipoObra: "Comedia",
    sectorTeatro: "Sala 1",
    butaca: "General",
    imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/10/toc-toc_4.jpg?tf=2048x"
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
    tamano: "mediano",
    imagen: "https://png.pngtree.com/png-vector/20240613/ourmid/pngtree-a-colorful-jelly-beans-png-image_12735990.png"
  },
  {
    nombre: "Combo Popcorn + Coca",
    precio: 2500,
    cant_disp: 15,
    tipo: "combo cine",
    dulce: true,
    bebida: true,
    tamano: "grande",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIutcf_XpMs2iK2yeuWd25lE8HkQwemDbRA&s"
  },
  {
    nombre: "Nachos con queso",
    precio: 1800,
    cant_disp: 10,
    tipo: "snack salado",
    dulce: false,
    bebida: false,
    tamano: "chico",
    imagen: "https://png.pngtree.com/png-clipart/20231124/original/pngtree-nachos-with-cheese-sauce-and-jalapeno-on-white-background-png-image_13700394.png"
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
    tipo_vaso: "vaso largo",
    imagen: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-a-full-glass-of-cola-and-foam-png-image_5824124.jpg"
  },
  {
    nombre: "Mojito",
    precio: 2500,
    cant_disp: 20,
    tipo: "cocktail",
    alcoholico: true,
    graduacion: "25%",
    tipo_vaso: "vaso corto",
    imagen: "https://png.pngtree.com/png-clipart/20231020/original/pngtree-mojitos-summer-cocktail-png-image_13377315.png"
  },
  {
    nombre: "Limonada",
    precio: 1200,
    cant_disp: 25,
    tipo: "sin alcohol",
    alcoholico: false,
    graduacion: "0%",
    tipo_vaso: "vaso largo",
    imagen: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-mexican-cocktail-lemonade-png-image_10255941.png"
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

