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