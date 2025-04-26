import { Cine, instanciasRecitales, instanciasObras } from "./script.js";
import { instanciasPeliculas } from "./script.js";
import { Evento } from "./script.js";
import { peliculasData, obrasData, recitalesData,candies, tragos, hamburguesas } from "./data-base.js";

//generar galeria
let cajaPelis = document.getElementById("container");

let cajaRecitales = document.getElementById("caja-concert");

let cajaObras = document.getElementById("contObras");


export function cartelera (container, datos, colorBoton){
    
    for (let i=0; i<datos.length; i++){

        let cajita = document.createElement("div");
        cajita.classList.add("w30", "mb3");
    
        //mostramos la imagen y el titulo
        //le asignamos al boton la posicion para usar despues
        cajita.innerHTML = `
    
            <div id="card-evento" class="bordeRedondo df centerX centerY">
                <div id="info-evento" class="h100 w100 bordeRedondo df centerX">
                    <div class="df columna fEnd h90 w80">
                        <h2>${datos[i].nombre}</h2>
                        <span class="mt1">${datos[i].fecha} · ${datos[i].directorCine}</span>
                        <span class="mt1">Duracion: ${datos[i].duracion} hs</span>
                        <button class="ajuste-boton fitContent sinBorde ${colorBoton} blanco mt1 boton-mostrar" pos="${i}">Mas informacion</button>
                    </div>
                </div>
            </div>
        ` 
        container.appendChild(cajita);
    }

}

if (cajaPelis){
    cartelera(cajaPelis, peliculasData, "fondoRojo");
    botones_mostrar(instanciasPeliculas);
}
if (cajaRecitales){
    cartelera(cajaRecitales, recitalesData, "fondoCeleste");
    botones_mostrar(instanciasRecitales);
} 
if (cajaObras){
    cartelera(cajaObras, obrasData, "fondoVioleta");
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
    dialogInfo.append(modal, botonReservar);
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
let reservasNuevas = []; //array de instancias

//traigo el boton para reservar
let botonReservar = document.getElementById("boton-reservar");

//le asigno al boton el event listener solo si existe en el archivo
if (botonReservar){

    botonReservar.addEventListener('click', ()=>{

        eventoSeleccionado.reservarEvento(reservasNuevas);

        //console.log("reserva guardada");
        //console.log(reservasNuevas);

        menuLateral.classList.remove("invisible");
        mostrarReservas(cajaReservas, reservasNuevas);

    });

}

let cajaComida = document.getElementById("dialog-comida");
let divComida = document.getElementById("contenedorComida"); //este trae la posicion del array reservasNuevas

let cerrarComida = document.getElementById("cerrar-comida");

if (cerrarComida){
    cerrarComida.addEventListener('click', ()=>{
        cajaComida.close();
    });
}


/* RESERVAS NUEVAS */

let menuLateral = document.getElementById("caja-reservas");

//agregarle la funcion de cerrar al boton, y asignarle al boton "mis reservas que abra el lateral"
let abrirLateral = document.querySelector("header button");
let cerrarLateral = document.getElementById("close-lateral");

if (cerrarLateral){
    cerrarLateral.addEventListener('click', ()=>{
        menuLateral.classList.add("invisible");
    });
    
    abrirLateral.addEventListener("click", ()=>{
        menuLateral.classList.remove("invisible");
    });
}



//traigo el contenedor donde van las reservas nuevas
let cajaReservas = document.getElementById("cont-reservas");
let descuentoBox = document.getElementById("descuentoBox");
let sinReservas = document.getElementById("sinReservas");

//esta funcion será la que muestra el menu lateral con las reservas
export function mostrarReservas(container, datos) {

    //limpio el contenedor de reservas antes de agregar nuevas
    container.innerHTML = '';

    //recorro el array de reservas y muestro cada una
    for (let i = 0; i < datos.length; i++) {

        let cajita = document.createElement("div");
        cajita.classList.add("w100", "mb3", "mt1");

        if (reservasNuevas.length==0){

            sinReservas.classList.remove("invisible");

        } else {

            sinReservas.classList.add("invisible");

            cajita.innerHTML = `
            <div id="evento-reservado" class="df columna spaceb centerY spaceb mt1">

                    <div class="df centerY spaceb">
                        <div class="df w45 spaceb">

                            <img src="assets/imgs/poster-peli-generic.webp" alt="" class="w50 bordeRedondo">
    
                            <div class="df columna spacee w40">
                                <h3>${datos[i].nombre}</h3>
                                <span>${datos[i].fecha}</span>
                                <span>${datos[i].horario}</span>
                            </div>
                        </div>
                        
                        
                        <div class="df columna centerX centerY spacee h100">
    
                            <button class="fondoRojo sinBorde ajuste-boton boton-eliminar" pos="${i}"><i class="fi fi-rr-trash blanco"></i></button>
    
                            <button pos="${i}" class="ajuste-boton sinBorde mostrar-comida mt1">Agregar comida</button>
    
                        </div>
    
                        <p class="df fEnd">${datos[i].precio}</p>
                    </div>

                    

                    <ul class="mt1 w100">
                        ${datos[i].comida.length > 0 
                            ? datos[i].comida.map(comida => `
                                <div class="w100 df spaceb">
                                    <li>${comida.nombre}</li>
                                    <span>${comida.precio}</span>
                                </div>
                                `)
                            : '<li>No hay comidas asignadas.</li>'
                        }
                    </ul>

                </div>
        `;

        container.appendChild(cajita);
        descuentoBox.classList.remove("invisible");

        }

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
        totalDiv.innerHTML = `<p>Total: $${totalPrecio}</p>`;

        container.appendChild(totalDiv);

    }

    //esto va acá para que cada vez que se ejecute la funcion se agarren los botones
    const botonesComida = document.querySelectorAll(".mostrar-comida");

    botonesComida.forEach((boton, index)=>{
    boton.addEventListener('click', ()=>{
        
        //al container le puse un atribute que se llama categoria y dependiendo de que cateogria sea, es el array que va a aagarrar para mostrar los combos disponibles
        let categoria = cajaComida.getAttribute("categoria");

        divComida.setAttribute("evento-posicion", index);


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

    /*ELIMINAR EVENTO DE RESERVAS*/
    const eliminadores = document.querySelectorAll(".boton-eliminar");

    eliminadores.forEach((eliminador)=>{
        eliminador.addEventListener('click', ()=>{
            let posReserva = eliminador.getAttribute("pos");
            reservasNuevas.splice(posReserva, 1);
            mostrarReservas(cajaReservas, reservasNuevas);
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

            let indexComida = reservador.getAttribute("pos");
            let indexEvento = divComida.getAttribute("evento-posicion"); //console.log(reservasNuevas);

            //accedemos al objeto de la comida elegida
            let comidaElegida = datos[indexComida];
            //console.log(comidaElegida);
            

            //accedemos a la instancia del evento reservado
            let eventoReservado = reservasNuevas[indexEvento];
            //console.log(eventoReservado);
            

            //esta linea no sabemos como se escribe
            eventoReservado.comidasAsignadas = comidaElegida;
            
            //aca hay que poner una funcion que agrege al evento las comidas elegidas
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


  let avisoDescuento = document.createElement("span");

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

      avisoDescuento.innerHTML = `Se aplicó un ${porcentaje}% de descuento`;
      descuentoBox.appendChild(avisoDescuento);
      
    } else {

      avisoDescuento.innerHTML = "Código inválido. No se aplicó ningún descuento.";
      descuentoBox.appendChild(avisoDescuento);
      
    }
  }


  let botonDescuento = document.getElementById("aplicarDescuento");

  if (botonDescuento){
    botonDescuento.addEventListener('click', () => {
        const codigo = document.getElementById("codigoDescuento").value.trim(); //trim elimina espacios
      
        if (codigo !== "") {
          aplicarDescuentoPorCodigo(codigo, reservasNuevas); 
          mostrarReservas(document.getElementById("cont-reservas"), reservasNuevas); 
        }
      });
  }

  
/*EVENTOS DESTACADOS*/
let contDestacados = document.getElementById("contDestacados");

function tres_eventos_random() {

    //saco las posiciones random. cada uno devuelve instancias
    let evento1 = instanciasPeliculas[Math.floor(Math.random() * instanciasPeliculas.length)];

    let evento2 = instanciasObras[Math.floor(Math.random() * instanciasPeliculas.length)];

    let evento3 = instanciasRecitales[Math.floor(Math.random() * instanciasPeliculas.length)];

    //armo un array con esas posiciones
    let destacados = [evento1, evento2, evento3];

    //genero las cards para el dom
    for (let i=0; i<destacados.length; i++){

        let destacado = document.createElement("a");
        destacado.classList.add("w30");

        destacado.innerHTML = `

                    <img src="assets/imgs/banner-home.png" alt="" class="w100">
                    <h3 class="blanco">${destacados[i].nombre}</h3>
                    <span class="blanco">${destacados[i].fecha}</span>

        ` 
        contDestacados.appendChild(destacado);

    }
    

}

if (contDestacados){
    tres_eventos_random();
}



