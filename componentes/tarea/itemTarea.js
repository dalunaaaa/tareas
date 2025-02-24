import { marcarTarea, desmarcarTarea } from './funcionTarea.js';
function tarea(texto) {
    let contenedorTarea = document.createElement('div');
    contenedorTarea.className = "tarea";

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            marcarTarea(contenedorTarea);
        } else {
            desmarcarTarea(contenedorTarea);
        }
    });

    let label = document.createElement('label');
    label.textContent = texto;

    contenedorTarea.appendChild(checkbox);
    contenedorTarea.appendChild(label);

    return contenedorTarea;
}

export { tarea };