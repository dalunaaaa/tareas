import { header } from "./componentes/header/header.js";

//import { cargarTareas, consultarTareasBackEnd } from "./componentes/tarea/tarea.js"; // Ruta corregida
import { cargarFormulario } from "./componentes/formulario/formulario.js";
import { consultarTareasBackEnd } from "./componentes/tarea/tarea.js";

let DOM = document.querySelector("#root");

function CargarDOM() {
    DOM.appendChild(header());
    consultarTareasBackEnd();
   // DOM.appendChild(cargarTareas());
    DOM.appendChild(cargarFormulario());
}

CargarDOM();
export {CargarDOM}