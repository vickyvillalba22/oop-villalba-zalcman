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

//le asigno al boton el event listener solo si existe en el archivo
if (botonReservar){

    botonReservar.addEventListener('click', ()=>{

        eventoSeleccionado.reservarEvento(reservasNuevas);

        console.log("reserva guardada");
        console.log(reservasNuevas);

        menuLateral.classList.remove("invisible");
        mostrarReservas(cajaReservas, reservasNuevas);

    });

}

let cajaComida = document.getElementById("dialog-comida");
let divComida = document.getElementById("contenedorComida");

let cerrarComida = document.getElementById("cerrar-comida");
cerrarComida.addEventListener('click', ()=>{
    cajaComida.close();
});

/* RESERVAS NUEVAS */

let menuLateral = document.getElementById("caja-reservas");

//agregarle la funcion de cerrar al boton, y asignarle al boton "mis reservas que abra el lateral"
let abrirLateral = document.querySelector("header button");
let cerrarLateral = document.getElementById("close-lateral");

cerrarLateral.addEventListener('click', ()=>{
    menuLateral.classList.add("invisible");
});

abrirLateral.addEventListener("click", ()=>{
    menuLateral.classList.remove("invisible");
})

//traigo el contenedor donde van las reservas nuevas
let cajaReservas = document.getElementById("cont-reservas");

//esta funcion será la que muestra el menu lateral con las reservas
export function mostrarReservas(container, datos) {
    //limpio el contenedor de reservas antes de agregar nuevas
    container.innerHTML = '';

    //recorro el array de reservas y muestro cada una
    for (let i = 0; i < datos.length; i++) {

        let cajita = document.createElement("div");
        cajita.classList.add("w100", "mb3", "mt1");

        
        cajita.innerHTML = `
            <div class="w100 df centerX centerY spaceb bordeRojo vh25">
              
                    <img class="w20 objCover w100" src="assets/imgs/cine-categoria.png" alt="">

                    <div class="df columna spacee">
                        <h3>${datos[i].nombre}</h3>
                        <p>Fecha: ${datos[i].fecha}</p>
                        <p>Horario: ${datos[i].horario}</p> 
                    </div>

                    <button pos="${i}" class="mostrar-comida sinBorde botonCeleste blanco ajuste-boton">Agregar comida</button>

                    <p>${datos[i].precio}</p>
         
            </div>
        `;

        container.appendChild(cajita);

        //Calculo del precio total
        let totalPrecio = Evento.calcularPrecioTotal(datos); 
        
        //verifico si existe el div con la clase totalPrecio para que no se vaya duplicando
        let totalDiv = container.querySelector('.totalPrecio');

        if (!totalDiv) {
            totalDiv = document.createElement("div");
            totalDiv.classList.add("w100", "totalPrecio"); // Agrego la clase totalPrecio
            container.appendChild(totalDiv);
        }

        //Actualizo su contenido
        totalDiv.innerHTML = `<h3>Total: $${totalPrecio}</h3>`;

        container.appendChild(totalDiv);

    }

    //esto va acá para que cada vez que se ejecute la funcion se agarren los botones
    const botonesComida = document.querySelectorAll(".mostrar-comida");

    console.log(botonesComida);

    botonesComida.forEach((boton)=>{
    boton.addEventListener('click', ()=>{
        
        //al container le puse un atribute que se llama categoria y dependiendo de que cateogria sea, es el array que va a aagarrar para mostrar los combos disponibles
        let categoria = cajaComida.getAttribute("categoria");

        if (categoria === "cine"){
            divComida.innerHTML = "";
            mostrarMenu(divComida, candies);
        }

        if (categoria === "teatro"){
            divComida.innerHTML = "";
            mostrarMenu(divComida, tragos);
        }

        if (categoria === "recital"){
            divComida.innerHTML="";
            mostrarMenu(divComida, hamburguesas);
        }

        cajaComida.showModal();

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
                        <h3 class="mt1">${datos[i].nombre}</h3>   
                        <button pos="${i}" class="reservar-comida mt1 sinBorde botonCeleste ajuste-boton w100">Agregar a mi reserva</button>
       
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


//Descuento (comentario: funciona :) pero tira error la consola por otro tema)
//creo un objeto con códigos de descuento
const codigosDescuento = {
    '1234': 20,
    '5678': 30,
  };
  

  //creo la funcion
  export function aplicarDescuentoPorCodigo(codigo, reservasNuevas) {
    //verifico que el codigo sea válido
    if (codigo in codigosDescuento) {
      const porcentaje = codigosDescuento[codigo];
  
      //recorro el array de reservas para aplicar el descuento (comentario: podría aplicarle el descuento directamente al precio total, pero lo hice de esta forma para poder usar el set)
      for (let evento of reservasNuevas) {
        evento.ponerDescuento = porcentaje; //uso el set para aplicarle el porcentaje de descuento a cada reserva
      }
  
      console.log(`Se aplicó un ${porcentaje}% de descuento`);
  
      //vuelvo a calcular el precio total
      const totalConDescuento = Evento.calcularPrecioTotal(reservasNuevas);
      console.log(`Precio con descuento: $${totalConDescuento}`);
    } else {
      console.log("Código inválido. No se aplicó ningún descuento.");
    }
  }


  document.getElementById("aplicarDescuento").addEventListener('click', () => {
    const codigo = document.getElementById("codigoDescuento").value.trim(); //trim elimina espacios
  
    if (codigo !== "") {
      aplicarDescuentoPorCodigo(codigo, reservasNuevas); 
      mostrarReservas(document.getElementById("menuLateral"), reservasNuevas); 
    }
  });