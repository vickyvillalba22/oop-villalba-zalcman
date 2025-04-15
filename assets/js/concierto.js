import { recitalesData } from "./data-base.js"
import { cartelera, botones_mostrar } from "./cine.js"
import { instanciasRecitales } from "./script.js";

let cajaRecitales = document.getElementById("contRecitales");

cartelera(cajaRecitales, recitalesData);
botones_mostrar(instanciasRecitales);