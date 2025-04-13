import { obrasData } from "./data-base.js"
import { cartelera, botones_mostrar } from "./cine.js"
import { instanciasObras } from "./script.js";

let cajaObras = document.getElementById("contObras");

cartelera(cajaObras, obrasData);
botones_mostrar(instanciasObras);


