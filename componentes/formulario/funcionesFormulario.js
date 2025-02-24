import { tarea } from '../tarea/itemTarea.js';

function agregarTarea(texto) {
    if (texto.trim() === "") return;

    let seccionTareas = document.querySelector('.tareas');
    seccionTareas.appendChild(tarea(texto));
}

export { agregarTarea };