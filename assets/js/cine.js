import { Cine } from "./script.js";
import { instanciasPeliculas } from "./script.js";
import { peliculasData, obrasData } from "./data-base.js";

//generar galeria
let cajaPelis = document.getElementById("container");

export function cartelera (container, datos){

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
    botones_mostrar(instanciasPeliculas)
} else {
    console.warn("no esta la caja de cine");
}


//para mostrar la informacion de la pelicula en un modal
export function mostrarModal (evento){

    console.log(evento);

    let modal = document.getElementById("muestra-info");
    modal.classList.add("modalInfo")
    modal.addEventListener('click', ()=>{
        modal.close();
    })

    //le agrego los datos
    modal.innerHTML = `
    
        <h3>${evento.nombre}</h3>
        <img src="" alt="">
        <p>Fecha: ${evento.fecha}</p>
        <p>Horario: ${evento.horario}</p>
        <p>Duración: ${evento.duracion}</p>
        <p>Precio: ${evento.precio}</p>
        <p>Capacidad:${evento.capacidad}</p>
        <p>Género: ${evento.genero}</p>
        <p>Director: ${evento.directorCine}</p>
        <p>Cine: ${evento.dondeCine}</p>
        <p>Asiento: ${evento.asiento}</p>

    `

    modal.showModal();

}

//traemos los botones mostrar
export function botones_mostrar (datos){

    const botones = document.querySelectorAll(".boton-mostrar");

    botones.forEach(boton1 => {
    
        boton1.addEventListener('click', ()=>{
    
            //tomamos la posicion asignada al boton correspondiente
            let posicion = boton1.getAttribute("pos");
            console.log("Posicion:" + posicion);

            console.log("Datos:" + datos);
        
            //asignamos el metodo a la instancia correspondiente a esa posicion
            let evento = datos[posicion].verInfoEvento();
    
            //se la paso como parametro
            mostrarModal(evento);
        
        });
    
    });

}

