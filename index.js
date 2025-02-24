import { header } from "./componentes/header/header.js";
import { cargarTareas } from "./componentes/tarea/tarea.js"; // Ruta corregida
import { cargarFormulario } from "./componentes/formulario/formulario.js";

let DOM = document.querySelector("#root");

function CargarDOM() {
    DOM.appendChild(header());
    DOM.appendChild(cargarTareas());
    DOM.appendChild(cargarFormulario());
}

CargarDOM();