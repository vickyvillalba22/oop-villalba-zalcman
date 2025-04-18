import { Cine, instanciasRecitales, instanciasObras } from "./script.js";
import { instanciasPeliculas } from "./script.js";
import { Evento } from "./script.js";
import { peliculasData, obrasData, recitalesData, reservas, candies, tragos, hamburguesas } from "./data-base.js";

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


//RESERVAS

//creo un array vacio para cada tipo de evento
let reservasCine = [];
let reservasTeatro = [];
let reservasRecital = [];

//me traigo los botones de cada tipo de evento
let botonCine = document.getElementById("botonReservarCine");
let botonTeatro = document.getElementById("botonReservarTeatro");
let botonRecital = document.getElementById("botonReservarRecital");

//me traigo los contenedores de cada tipo de evento, en el que se mostrarán las reservas
let cajaReservasCine = document.getElementById("containerReservasCine");
let cajaReservasTeatro = document.getElementById("containerReservasTeatro");
let cajaReservasRecital = document.getElementById("containerReservasRecital");

//llamo a la funcion solo si existe su contenedor y su boton
if (cajaReservasCine) {
    mostrarReservas(cajaReservasCine, reservasCine);  
}
if (cajaReservasTeatro) {
    mostrarReservas(cajaReservasTeatro, reservasTeatro);  
}
if (cajaReservasRecital) {
    mostrarReservas(cajaReservasRecital, reservasRecital);  
}


if (botonCine){

    botonCine.addEventListener("click", ()=>{

        eventoSeleccionado.reservarEvento(reservasCine); 
        console.log("reserva guardada");
        console.log(reservasCine)
    
        mostrarReservas(cajaReservasCine, reservasCine)

})
}

if (botonTeatro){

    botonTeatro.addEventListener("click", ()=>{

        eventoSeleccionado.reservarEvento(reservasTeatro); 
        console.log("reserva guardada");
        console.log(reservasTeatro)
    
        mostrarReservas(cajaReservasTeatro, reservasTeatro)

})
}

if (botonRecital){

    botonRecital.addEventListener("click", ()=>{

        eventoSeleccionado.reservarEvento(reservasRecital); 
        console.log("reserva guardada");
        console.log(reservasRecital)
    
        mostrarReservas(cajaReservasRecital, reservasRecital)

})
}

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
                <button pos="${i}" class="mt1 boton-mostrar sinBorde botonCeleste blanco ajuste-boton w100">Agregar comida</button>
            </div>
        `;

        container.appendChild(cajita);
    }
}


/*CODIGO ANTERIOR

let reservasGuardadas = [];

if (mostrarReservas){


        reservasGuardadas = JSON.parse(localStorage.getItem('misReservas')) || [];
        
        if (reservasGuardadas.length === 0) {
            console.log("No se encontraron reservas en el localStorage.");
        } else {
            cartelera(mostrarReservas, reservasGuardadas);
        }
        
        //cartelera(mostrarReservas, reservasGuardadas);
        //botones_mostrar(reservasGuardadas);

}*/




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

let cajaComida = document.getElementById("contenedorComida")

//funcion para mostrar las opciones de comida
/*export function mostrarMenu (container, datos){
    
    for (let i=0; i<datos.length; i++){

        let cajita = document.createElement("div");
        cajita.classList.add("w30", "mb3");
    
        //mostramos la imagen y el titulo
        //le asignamos al boton la posicion para usar despues
        cajita.innerHTML = `
    
                <div id="card" class="w100">
    
                        <img class="vh30 objCover" src="assets/imgs/cine-categoria.png" alt="">
                        <h3 class="blanco mt1">${datos[i].nombre}</h3>   
                        <button pos="${i}" class="mt1 sinBorde botonCeleste blanco ajuste-boton w100">Agregar a mi reserva</button>
       
                </div>
        ` 
        container.appendChild(cajita);
    }

}*/

//esto luego se lo asignamos a un evento (se va a ver cuando tocas el boton agregar comida desde el evento reservado)
/*mostrarMenu(cajaComida, candies);
mostrarMenu(cajaComida, tragos);
mostrarMenu(cajaComida, hamburguesas)*/

