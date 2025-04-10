import { eventos, reservas, peliculasData } from "./data-base.js"

class Evento {

    nombre;
    fecha;
    horario;
    duracion;
    precio;
    capacidad;

    constructor(nombre, fecha, horario, duracion, precio, capacidad){
        this.nombre = nombre;
        this.fecha = fecha;
        this.horario = horario;
        this.duracion = duracion;
        this.precio = precio;
        this.capacidad = capacidad;
    }

    //agrega un objeto class Evento al array reservas
    reservarEvento(){

        //cuando el usuario elige el evento, se crea el objeto
        //reservas.push({});

        let titulo = prompt ("ingrese el nombre del evento"); //yo haria que sea un boton desde el evento elegido en lugar de ingresar nombre
        reservas.push(titulo);
        console.log(reservas);

        //le aviso al usuario que la reserva fue realizada
        return `Reserva realizada para el evento: ${this.titulo}`;
        
    };

    //elimina un objeto del array reservas
    cancelarEvento(){};
    //muestra la info de un objeto del array reservas
    
    //muestro toda la informacion del evento
    verInfoEvento(){

        return `Título: ${this.titulo} \n Descripción: ${this.descripcion} \n Fecha: ${this.fecha} \n Lugar ${this.lugar} \n Costo: ($${this.precio})`;
 
    };
}

class Cine extends Evento {
    genero;
    directorCine;
    dondeCine;
    asiento;

    constructor(nombre, fecha, horario, duracion, precio, capacidad, genero, directorCine, dondeCine, asiento){
        super(nombre, fecha, horario, duracion, precio, capacidad);

        this.genero = genero;
        this.directorCine = directorCine;
        this.dondeCine = dondeCine;
        this.asiento = asiento;
    }

    verInfoEvento(){
        return `Título: ${this.titulo} \n Descripción: ${this.descripcion} \n Fecha: ${this.fecha} \n Lugar ${this.lugar} \n Costo: ($${this.precio}) \n Capacidad: (${this.capacidad}) \n Genero: (${this.genero}) \n Director: (${this.directorCine}) \n Cine: (${this.dondeCine}) \n Asiento: (${this.asiento})`;
    }

}


//creamos diferentes instancias con la informacion del array de peliculas
for (let pelicula of peliculasData){

    let nuevaPelicula = new Cine (
        pelicula.nombre,
        pelicula.fecha,
        pelicula.horario,
        pelicula.duracion,
        pelicula.precio,
        pelicula.capacidad,
        pelicula.genero,
        pelicula.directorCine,
        pelicula.dondeCine,
        pelicula.asiento
    ) 
    console.log(nuevaPelicula)
}



class Teatro extends Evento {
    elenco;
    directorTeatro;
    tipoObra;
    sectorTeatro;
    butaca;

    constructor(nombre, fecha, horario, duracion, precio, capacidad, elenco, directorTeatro, tipoObra, sectorTeatro, butaca){
        super(nombre, fecha, horario, duracion, precio, capacidad);

        this.elenco = elenco;
        this.directorTeatro = directorTeatro;
        this.tipoObra = tipoObra;
        this.sectorTeatro = sectorTeatro;
        this.butaca = butaca;
    }

}

class Recital extends Evento {
    artista;
    generoMusical;
    nombreAlbum;
    sectorRecital;

    constructor(nombre, fecha, horario, duracion, precio, capacidad, artista, generoMusical,nombreAlbum, sectorRecital){
        super(nombre, fecha, horario, duracion, precio, capacidad);

        this.artista = artista;
        this.generoMusical = generoMusical;
        this.nombreAlbum = nombreAlbum;
        this.sectorRecital = sectorRecital;
    }

}




class Comida {

    //props
    nombre;
    precio;
    cant_disp;
    tipo;

    constructor (nombre, precio, cant_disp, tipo){

        this.nombre = nombre;
        this.precio = precio;
        this.cant_disp = cant_disp;
        this.tipo = tipo;

    }

    //methods
    vender(){

    }
    reponer_stock(){

    }
    mostrar_info(){

    }
    descuento(){

    }

}

class Candy_cine extends Comida {

    dulce; //boolean
    bebida; //boolean
    tamano;

    constructor(dulce, bebida, tamano){
        super(nombre, precio, cant_disp, tipo);

        this.dulce = dulce;
        this.bebida = bebida;
        this.tamano = tamano;
    }

    cambiar_tamano(){
        //pregunta al usuario que tamaño quiere
    }

}

class Tragos extends Comida {

    alcoholico; //boolean
    graduacion; 
    tipo_vaso;

    constructor(alcoholico, graduacion, tipo_vaso){
        super(nombre, precio, cant_disp, tipo);

        this.alcoholico = alcoholico;
        this.graduacion = graduacion;
        this.tipo_vaso = tipo_vaso;
    }

    cambiar_tamano(){
        
    }

}

class Hamburguesas extends Comida {

    tipo_carne; //vacuna, pollo, veggie
    acompanamiento; //papas o nachos
    tamano; // simple o doble 

    constructor(tipo_carne, acompanamiento, tamano){
        super(nombre, precio, cant_disp, tipo);

        this.tipo_carne = tipo_carne;
        this.acompanamiento = acompanamiento;
        this.tamano = tamano;
    }

    cambiar_tamano(){
        
    }

}


//prueba
/*const reserva1 = new Evento();
reserva1.reservarEvento();*/