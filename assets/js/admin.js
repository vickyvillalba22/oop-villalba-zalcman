import { obrasData, peliculasData, recitalesData } from "./data-base.js";
import { cartelera, botones_mostrar, mostrarModal } from "./app.js";

//la lógica está, solo quedaria mostrarlo con el dom. 

let contNuevos = document.getElementById("eventos-agregados");

const eventosNuevos = [];

function cargarEvento (arrayData){

    const objetoNuevo = {};

    let inputs = document.querySelectorAll("input");

    inputs.forEach((input)=>{
        
        let propiedad = input.id;
        let valor = input.value;
        objetoNuevo[propiedad] = valor;

    });

    //log del array antes, tiene 6 
    console.log(arrayData);
    //agrego el objeto creado a la data original
    arrayData.push(objetoNuevo);
    //agrego el evento nuevo a un array de eventos nuevos
    eventosNuevos.push(objetoNuevo);
    contNuevos.innerHTML = "";
    cartelera(contNuevos, eventosNuevos, "fondoVioleta");
    //log del array despues, tiene 7
    console.log(eventosNuevos);

    botones_mostrar(eventosNuevos);
    mostrarModal(objetoNuevo, arrayData, arrayData[objetoNuevo])
}

//este es el container del form específico con los botones que muestran sus respectivos forms
let cajaElegido = document.getElementById("formElegido");
cajaElegido.classList.add("mt1")

let botonPelicula = document.getElementById("botonPelicula");
let botonTeatro = document.getElementById("botonTeatro");
let botonRecital = document.getElementById("botonRecital");

botonPelicula.addEventListener('click', (event)=>{

    event.preventDefault();

    //sale el form de pelicula

    cajaElegido.innerHTML = `
        <label class="blanco mt1" for="generoCine">Género</label>
        <input type="text" name="generoCine" id="generoCine" class=" mt1">
        <label class="blanco mt1" for="directorCine">Director</label>
        <input type="text" name="directorCine" id="directorCine" class=" mt1">
        <label class="blanco mt1" for="dondeCine">Cine</label>
        <input type="text" name="dondeCine" id="dondeCine" class=" mt1">
    `

    cargarPelicula.classList.remove("invisible");
    cargarTeatro.classList.add("invisible");
    cargarRecital.classList.add("invisible");

});

botonTeatro.addEventListener('click', (event)=>{

    event.preventDefault();

    cajaElegido.innerHTML = `
        <label class="blanco mt1" for="elenco">Elenco</label>
        <input type="text" for="elenco" name="elenco" class=" mt1">
        <label class="blanco mt1" for="directorTeatro">Director/a</label>
        <input type="text" for="directorTeatro" name="directorTeatro" class=" mt1">
        <label class="blanco mt1" for="tipoObra">Tipo de obra</label>
        <input type="text" for="tipoObra" name="tipoObra" class=" mt1">
        <label class="blanco mt1" for="teatro">Teatro</label>
        <input type="text" for="teatro" name="teatro" class=" mt1">
    `
    cargarTeatro.classList.remove("invisible");
    cargarPelicula.classList.add("invisible");
    cargarRecital.classList.add("invisible");
});

botonRecital.addEventListener('click', (event)=>{

    event.preventDefault();

    cajaElegido.innerHTML = `
        <label class="blanco mt1" for="artista">Nombre del artista/banda</label>
        <input type="text" for="artista" name="artista" class=" mt1">
        <label class="blanco mt1" for="generoMusical">Género Musical</label>
        <input type="text" for="generoMusical" name="generoMusical" class=" mt1">
        <label class="blanco mt1" for="nombreAlbum">Nombre del álbum/tour</label>
        <input type="text" for="nombreAlbum" name="nombreAlbum" class=" mt1">
    `

    cargarRecital.classList.remove("invisible");
    cargarTeatro.classList.add("invisible");
    cargarPelicula.classList.add("invisible");
})

//estos son los botones que deben cargar el evento en sus respectivos arrays
let cargarPelicula = document.getElementById("carga-pelicula");
let cargarTeatro = document.getElementById("carga-teatro");
let cargarRecital = document.getElementById("carga-recital");

cargarPelicula.addEventListener('click', (event)=>{

    event.preventDefault();

    cargarEvento(peliculasData);

});

cargarTeatro.addEventListener('click', (event)=>{

    event.preventDefault();

    cargarEvento(obrasData);

});

cargarRecital.addEventListener('click', (event)=>{

    event.preventDefault();

    cargarEvento(recitalesData);

});



