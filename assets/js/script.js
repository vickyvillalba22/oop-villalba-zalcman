import { eventos, reservas, peliculasData } from "./data-base.js"

class Evento {

    #nombre;
    #fecha;
    #horario;
    #duracion;
    #precio;
    #capacidad;

    constructor(nombre, fecha, horario, duracion, precio, capacidad){
        this.#nombre = nombre;
        this.#fecha = fecha;
        this.#horario = horario;
        this.#duracion = duracion;
        this.#precio = precio;
        this.#capacidad = capacidad;
    }

    //set

    get nombre() {
        return this.#nombre;
      }
    
    get fecha() {
        return this.#fecha;
      }
    
    get horario() {
        return this.#horario;
      }
    
    get duracion() {
        return this.#duracion;
      }
    
    get precio() {
        return this.#precio;
      }
    
    get capacidad() {
        return this.#capacidad;
      }

    //setters: cuando la persona toca el boton descuento
    set ponerDescuento (porcentaje){

        if (porcentaje > 0 && porcentaje < 100) {
            this.#precio = this.#precio - (this.#precio * porcentaje / 100);
        }

    }

    //agrega un objeto class Evento al array reservas
    reservarEvento(reserva){

        reservas.push(reserva);
        //console.log(reservas);

        //le aviso al usuario que la reserva fue realizada
        return `Reserva realizada para el evento: ${this.titulo}`;
        
    };

    //elimina un objeto del array reservas
    cancelarEvento(posCancelado){

        reservas.splice(posCancelado, 1);

        return `Tu reserva fue cancelada` 

    };
    
    //devuelvo toda la info del evento
    verInfoEvento(){

        return `Título: ${this.titulo} \n Descripción: ${this.descripcion} \n Fecha: ${this.fecha} \n Lugar ${this.lugar} \n Costo: ($${this.precio})`;
 
    };
}

export class Cine extends Evento {

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

        console.log("entro");

        //devuelve un objeto con todos los datos
        return {
            nombre: this.nombre, 
            fecha: this.fecha,
            horario: this.horario,
            duracion: this.duracion,
            precio: this.precio,
            capacidad: this.capacidad,
            genero: this.genero,
            directorCine: this.directorCine,
            dondeCine: this.dondeCine,
            asiento: this.asiento
        };

    }

}

export const instanciasPeliculas = [];

//creamos diferentes instancias con la informacion del array de peliculas. Y llenamos un array de instancias para utilizarlo despues
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
    );

    instanciasPeliculas.push(nuevaPelicula);
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
