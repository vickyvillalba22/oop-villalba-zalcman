import { Cine, instanciasRecitales, instanciasObras } from "./script.js";
import { instanciasPeliculas } from "./script.js";
import { Evento } from "./script.js";
import { peliculasData, obrasData, recitalesData,candies, tragos, hamburguesas } from "./data-base.js";

//generar galeria
let cajaPelis = document.getElementById("container");

let cajaRecitales = document.getElementById("caja-concert");

let cajaObras = document.getElementById("contObras");


export function cartelera (container, datos){

    console.log(datos);
    

    for (let i=0; i<datos.length; i++){

        let cajita = document.createElement("div");
        cajita.classList.add("w30", "mb3");
    
        //mostramos la imagen y el titulo
        //le asignamos al boton la posicion para usar despues
        cajita.innerHTML = `
    
                <div id="card" class="w100">
    
                        <img class="vh30 objCover" src="assets/imgs/cine-categoria.png" alt="">
                        <h3 class="blanco mt1">${datos[i].nombre}</h3>   
                        <button pos="${i}" class="mt1 boton-mostrar sinBorde botonCeleste blanco ajuste-boton w100">Mas información</button>
       
                </div>
        ` 
        container.appendChild(cajita);
    }

}

if (cajaPelis){
    cartelera(cajaPelis, peliculasData);
    botones_mostrar(instanciasPeliculas);
}
if (cajaRecitales){
    cartelera(cajaRecitales, recitalesData);
    botones_mostrar(instanciasRecitales);
} 
if (cajaObras){
    cartelera(cajaObras, obrasData);
    botones_mostrar(instanciasObras);
} 


let dialogInfo = document.getElementById("modalInfo");

let eventoSeleccionado;

//para mostrar la informacion de la pelicula
export function mostrarModal (evento){
    
    //console.log(evento);
    eventoSeleccionado = evento;

    let modal = document.getElementById("muestra-info");

    modal.classList.add("modalInfo")
    dialogInfo.addEventListener('click', ()=>{
        dialogInfo.close();
    })

    //le agrego los datos
    modal.innerHTML = evento.verInfoEvento();
    dialogInfo.appendChild(modal);
    dialogInfo.showModal();

}

//traemos los botones mostrar
export function botones_mostrar (datos){

    const botones = document.querySelectorAll(".boton-mostrar");

    botones.forEach(boton1 => {
    
        boton1.addEventListener('click', ()=>{
    
            //tomamos la posicion asignada al boton correspondiente
            let posicion = boton1.getAttribute("pos");
            //console.log(posicion);

            //console.log(datos);
        
            //asignamos el metodo a la instancia correspondiente a esa posicion
            let evento = datos[posicion];
    
            //se la paso como parametro
            mostrarModal(evento);
        
        });
    
    });

}


//RESERVAS: lo armé de nuevo de manera más general, que el mismo boton con el mismo id (lo mismo para los div contenedores), sirvan para las diferentes paginas segun que categoria sea. y asi ahorramos mucho código repetido.

//creo un array vacio para las reservas
let reservasNuevas = [];

//traigo el boton para reservar
let botonReservar = document.getElementById("boton-reservar");

//traigo el contenedor donde van las reservas nuevas
let cajaReservas = document.getElementById("caja-reservas");

//le asigno al boton el event listener solo si existe en el archivo
if (botonReservar){

    botonReservar.addEventListener('click', ()=>{

        eventoSeleccionado.reservarEvento(reservasNuevas);

        console.log("reserva guardada");
        console.log(reservasNuevas);

        mostrarReservas(cajaReservas, reservasNuevas);

    });

}

let cajaComida = document.getElementById("contenedorComida");

export function mostrarReservas(container, datos) {
    //limpio el contenedor de reservas antes de agregar nuevas
    container.innerHTML = '';

    let titulo = document.createElement("h2");
    titulo.innerHTML = "Mis reservas";
    titulo.classList.add("blanco");
    container.appendChild(titulo)

    //recorro el array de reservas y muestro cada una
    for (let i = 0; i < datos.length; i++) {
        let cajita = document.createElement("div");
        cajita.classList.add("w30", "mb3");

        
        cajita.innerHTML = `
            <div id="card" class="w100">
                <img class="vh30 objCover w100" src="assets/imgs/cine-categoria.png" alt="">
                <h3 class="blanco mt1">${datos[i].nombre}</h3>   
                <button pos="${i}" class="mostrar-comida mt1 sinBorde botonCeleste blanco ajuste-boton w100">Agregar comida</button>
            </div>
        `;

        container.appendChild(cajita);
    }

    //esto va acá para que cada vez que se ejecute la funcion se agarren los botones
    const botonesComida = document.querySelectorAll(".mostrar-comida");

    console.log(botonesComida);

    botonesComida.forEach((boton)=>{
    boton.addEventListener('click', ()=>{
        
        //al container le puse un atribute que se llama categoria y dependiendo de que cateogria sea, es el array que va a aagarrar para mostrar los combos disponibles
        let categoria = cajaComida.getAttribute("categoria");

        if (categoria === "cine"){
            cajaComida.innerHTML = "";
            mostrarMenu(cajaComida, candies);
        }

        if (categoria === "teatro"){
            cajaComida.innerHTML = "";
            mostrarMenu(cajaComida, tragos);
        }

        if (categoria === "recital"){
            cajaComida.innerHTML="";
            mostrarMenu(cajaComida, hamburguesas);
        }

    })
})
}

//funcion para MOSTRAR LAS OPCIONES DE COMIDA, aca también se le asignan los listeners que agregan la comida a mis reservas, habria que ver como hacer para que se agreguen sin el boton agregar comida o si hacemos otra caja para las reservas de comida, pero por lo pronto se agregan a reservas que es lo básico.
export function mostrarMenu (container, datos){
    
    for (let i=0; i<datos.length; i++){

        let cajita = document.createElement("div");
        cajita.classList.add("w30", "mb3");
    
        //mostramos la imagen y el titulo
        //le asignamos al boton la posicion para usar despues
        cajita.innerHTML = `
    
                <div id="card" class="w100">
    
                        <img class="vh30 objCover" src="assets/imgs/cine-categoria.png" alt="">
                        <h3 class="blanco mt1">${datos[i].nombre}</h3>   
                        <button pos="${i}" class="reservar-comida mt1 sinBorde botonCeleste blanco ajuste-boton w100">Agregar a mi reserva</button>
       
                </div>
        ` 
        container.appendChild(cajita);
    }

    const reservanComida = document.querySelectorAll(".reservar-comida");

    reservanComida.forEach((reservador)=>{
        reservador.addEventListener('click', ()=>{

            let index = reservador.getAttribute("pos");
            reservasNuevas.push(datos[index]);
            mostrarReservas(cajaReservas, reservasNuevas);

        })
        
        
    });

}

