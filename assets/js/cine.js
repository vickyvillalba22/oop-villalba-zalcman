import { Cine } from "./script.js";
import { instanciasPeliculas } from "./script.js";
import { peliculasData } from "./data-base.js";

//generar galeria
let cajaPelis = document.getElementById("container");

function cartelera (){

    for (let i=0; i<peliculasData.length; i++){

        let cajita = document.createElement("div");
        cajita.classList.add("w30", "mb3");
    
        //mostramos la imagen y el titulo
        //le asignamos al boton la posicion para usar despues
        cajita.innerHTML = `
    
                <div id="card" class="w100">
    
                        <img class="vh30 objCover" src="assets/imgs/cine-categoria.png" alt="">
                        <h3 class="blanco mt1">${peliculasData[i].nombre}</h3>   
                        <button pos="${i}" class="mt1 boton-mostrar sinBorde botonCeleste blanco ajuste-boton w100">Mas información</button>
       
                </div>
        ` 
        cajaPelis.appendChild(cajita);
    }

}

cartelera();

//para mostrar la informacion de la pelicula
function mostrarModal (pelicula){

    console.log(pelicula);

    let modal = document.getElementById("muestra-info");
    modal.classList.add("modalInfo")
    modal.addEventListener('click', ()=>{
        modal.close();
    })

    //le agrego los datos
    modal.innerHTML = `
    
        <h3>${pelicula.nombre}</h3>
        <img src="" alt="">
        <p>Fecha: ${pelicula.fecha}</p>
        <p>Horario: ${pelicula.horario}</p>
        <p>Duración: ${pelicula.duracion}</p>
        <p>Precio: ${pelicula.precio}</p>
        <p>${pelicula.capacidad}</p>
        <p>Género: ${pelicula.genero}</p>
        <p>Director: ${pelicula.directorCine}</p>
        <p>Cine: ${pelicula.dondeCine}</p>
        <p>Asiento: ${pelicula.asiento}</p>

    `

    modal.showModal();

}

//traemos los botones mostrar
const botones = document.querySelectorAll(".boton-mostrar");

botones.forEach(boton1 => {
    
    boton1.addEventListener('click', ()=>{

        //tomamos la posicion asignada al boton correspondiente
        let posicion = boton1.getAttribute("pos");
        console.log(posicion);
    
        //asignamos el metodo a la instancia correspondiente a esa posicion
        let peli = instanciasPeliculas[posicion].verInfoEvento();

        //se la paso como parametro
        mostrarModal(peli);
    
    });

});