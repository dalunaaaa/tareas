//importar los componentes principales
import { header } from "./componentes/header/header.js";
import { formulario } from "./componentes/formulario/formulario.js";
import { crearSeccion } from "./componentes/tarea/tarea.js";
let DOM = document.querySelector("#root");




DOM.appendChild(header());
DOM.appendChild(crearSeccion());




