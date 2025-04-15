let botonPelicula = document.getElementById("botonPelicula");
let botonTeatro = document.getElementById("botonTeatro");
let botonRecital = document.getElementById("botonRecital");

let cajaElegido = document.getElementById("formElegido");

botonPelicula.addEventListener('click', (event)=>{

    event.preventDefault();

    //sale el form de pelicula

    cajaElegido.innerHTML = `
        <label class="blanco" for="generoCine">Género</label>
        <input type="text" for="generoCine">
        <label class="blanco" for="directorCine">Director</label>
        <input type="text" for="directorCine">
        <label class="blanco" for="dondeCine">Cine</label>
        <input type="text" for="dondeCine">
    `

});

botonTeatro.addEventListener('click', (event)=>{

    event.preventDefault();

    cajaElegido.innerHTML = `
        <label class="blanco" for="elenco">Elenco</label>
        <input type="text" for="elenco">
        <label class="blanco" for="directorTeatro">Director/a</label>
        <input type="text" for="directorTeatro">
        <label class="blanco" for="tipoObra">Tipo de obra</label>
        <input type="text" for="tipoObra">
        <label class="blanco" for="teatro">Teatro</label>
        <input type="text" for="teatro">
    `
});

botonRecital.addEventListener('click', (event)=>{

    event.preventDefault();

    cajaElegido.innerHTML = `
        <label class="blanco" for="artista">Nombre del artista/banda</label>
        <input type="text" for="artista">
        <label class="blanco" for="generoMusical">Género Musical</label>
        <input type="text" for="generoMusical">
        <label class="blanco" for="nombreAlbum">Nombre del álbum/tour</label>
        <input type="text" for="nombreAlbum">
    `
})