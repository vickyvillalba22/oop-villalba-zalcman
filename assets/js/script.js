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

    reservarEvento(){};
    cancelarEvento(){};
    verInfoEvento(){};
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