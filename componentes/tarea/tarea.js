import { tarea } from './itemTarea.js'; 
import { tareas } from './data.js';   

function cargarTareas() {
    let seccion = document.createElement('section');
    seccion.className = "tareas";

    tareas.forEach((tareaTexto) => {
        seccion.appendChild(tarea(tareaTexto));
    });

    return seccion;
}

export { cargarTareas };