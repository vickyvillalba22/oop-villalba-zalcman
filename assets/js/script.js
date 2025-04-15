import { eventos, reservas, peliculasData, obrasData, recitalesData } from "./data-base.js"

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

        return `<h3>${this.nombre}</h3>
        <img src="" alt="">
        <p>Fecha: ${this.fecha}</p>
        <p>Horario: ${this.horario}</p>
        <p>Duración: ${this.duracion}</p>
        <p>Precio: ${this.precio}</p>
        <p>Capacidad: ${this.capacidad}</p>`;
 
    };
}

export class Cine extends Evento {

    #genero;
    #directorCine;
    #dondeCine;

    constructor(nombre, fecha, horario, duracion, precio, capacidad, genero, directorCine, dondeCine){
        super(nombre, fecha, horario, duracion, precio, capacidad);

        this.#genero = genero;
        this.#directorCine = directorCine;
        this.#dondeCine = dondeCine;
    }

    //getters para las propiedades particulares de Cine
    get genero() {
        return this.#genero;
    }

    get directorCine() {
        return this.#directorCine;
    }

    get dondeCine() {
        return this.#dondeCine;
    }

    //metodos
    verInfoEvento(){

        //console.log("entro");

        return super.verInfoEvento() + `
        <p>Género: ${this.genero}</p>
        <p>Director: ${this.directorCine}</p>
        <p>Cine: ${this.dondeCine}</p>`

        //devuelve un objeto con todos los datos
        /*return {
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
        };*/

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

    #elenco;
    #directorTeatro;
    #tipoObra;
    #sectorTeatro;

    constructor(nombre, fecha, horario, duracion, precio, capacidad, elenco, directorTeatro, tipoObra, sectorTeatro){

        super(nombre, fecha, horario, duracion, precio, capacidad);

        this.#elenco = elenco;
        this.#directorTeatro = directorTeatro;
        this.#tipoObra = tipoObra;
        this.#sectorTeatro = sectorTeatro;
    }

    //getters para propiedades particulares de teatro
    get elenco() {
        return this.#elenco;
    }

    get directorTeatro() {
        return this.#directorTeatro;
    }

    get tipoObra() {
        return this.#tipoObra;
    }

    get sectorTeatro() {
        return this.#sectorTeatro;
    }

    verInfoEvento() {
        
        //console.log("entro");

        return super.verInfoEvento() + `
        <p>Director: ${this.directorTeatro}</p>
        <p>Elenco: ${this.elenco}</p>
        <p>Género: ${this.tipoObra}</p>
        <p>Sector teatro: ${this.sectorTeatro}</p>`
    
        /*return {
            nombre: this.nombre,
            fecha: this.fecha,
            horario: this.horario,
            duracion: this.duracion,
            precio: this.precio,
            capacidad: this.capacidad,
            elenco: this.elenco,
            directorTeatro: this.directorTeatro,
            tipoObra: this.tipoObra,
            sectorTeatro: this.sectorTeatro,
            butaca: this.butaca
        };*/
    }

}

export const instanciasObras = [];

for (let obra of obrasData){

    let nuevaObra = new Teatro (
        obra.nombre,
        obra.fecha,
        obra.horario,
        obra.duracion,
        obra.precio,
        obra.capacidad,
        obra.elenco,
        obra.directorTeatro,
        obra.tipoObra,
        obra.sectorTeatro
    )

    instanciasObras.push(nuevaObra);

}

class Recital extends Evento {

    #artista;
    #generoMusical;
    #nombreAlbum;

    constructor(nombre, fecha, horario, duracion, precio, capacidad, artista, generoMusical, nombreAlbum){

        super(nombre, fecha, horario, duracion, precio, capacidad);

        this.#artista = artista;
        this.#generoMusical = generoMusical;
        this.#nombreAlbum = nombreAlbum;
    }

    //getters para las propiedades particulares de Recital
    get artista() {
        return this.#artista;
    }

    get generoMusical() {
        return this.#generoMusical;
    }

    get nombreAlbum() {
        return this.#nombreAlbum;
    }

    verInfoEvento() {
        
        console.log("entro a verInfoEvento de Recital");
    
        return {
            nombre: this.nombre,
            fecha: this.fecha,
            horario: this.horario,
            duracion: this.duracion,
            precio: this.precio,
            capacidad: this.capacidad,
            artista: this.artista,
            generoMusical: this.generoMusical,
            nombreAlbum: this.nombreAlbum,
        };
    }

    verInfoEvento(){

        return super.verInfoEvento() + `
        <p>Artista: ${this.artista}</p>
        <p>Género: ${this.generoMusical}</p>
        <p>Álbum: ${this.nombreAlbum}</p>
        `

    }

}

//cree las instancias de recitales a partir del array de data, quedaría conectarlo al dom y generar la cartelera.
export const instanciasRecitales = [];

for (let recital of recitalesData){

    let nuevoRecital = new Recital (
        recital.nombre,
        recital.fecha,
        recital.horario,
        recital.duracion,
        recital.precio,
        recital.capacidad,
        recital.artista,
        recital.generoMusical,
        recital.nombreAlbum
    )

    instanciasRecitales.push(nuevoRecital);

}

class Comida {

    //props
    nombre;
    #precio;
    #cant_disp;
    tipo;

    constructor (nombre, precio, cant_disp, tipo){

        this.nombre = nombre;
        this.#precio = precio;
        this.#cant_disp = cant_disp;
        this.tipo = tipo;

    }

    get cant_disp (){
        return this.#cant_disp
    }

    get precio(){
        return this.#precio
    }

    //methods
    agregar_a_reserva(comidaElegida){

        //verifico que haya stock
        if (this.#cant_disp>0){
            //agrego la comida elegida a las reservas del usuario. Esto es medio general, pero es para acumular todo lo que quiera comprar el usuario
            reservas.push(comidaElegida);
            //le resto uno a la cantidad disponible de ese producto
            this.#cant_disp = this.#cant_disp-1;
            return `Reserva confirmada`;
        } else{
            return `No hay stock disponible`;
        }

    }

    mostrar_info_comida(){

        return {
            nombre: this.nombre,
            precio: this.precio,
            cant_disp: this.#cant_disp,
            tipo: this.tipo
        }

    }

    set ponerDescuento (porcentaje){

        if (porcentaje > 0 && porcentaje < 100) {
            this.#precio = this.#precio - (this.#precio * porcentaje / 100);
        }

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

