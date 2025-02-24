import { agregarTarea } from './funcionesFormulario.js';

function cargarFormulario() {
    let formulario = document.createElement('form');
    formulario.className = "formulario";

    let input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Añadir tarea";

    let boton = document.createElement('button');
    boton.type = "submit";
    boton.textContent = "Agregar";

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        agregarTarea(input.value);
        input.value = "";
    });

    formulario.appendChild(input);
    formulario.appendChild(boton);

    return formulario;
}

export { cargarFormulario };