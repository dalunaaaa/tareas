

function consultarTareasBackEnd() {
    fetch('http://localhost:3000/tareas')
        .then(response => response.json()) 
        .then(data => cargarTareasDOM(data))
        .catch(error => console.error('Error:', error));
}

function cargarTareasDOM(data) { 
    let DOM = document.querySelector("#root"); 
    DOM.appendChild(renderTareas(data)); 
}     

import { tarea } from './itemTarea.js'; // Importamos la función tarea

function renderTareas(data) {
    let div = document.createElement('div');
    div.className = "tareas";

    data.forEach((e) => {
        console.log(e);
        let tareaElement = tarea(e.nombre_tarea); // Usamos la función tarea()
        div.appendChild(tareaElement);
    });

    return div;
}
// Exportar las funciones juntas
export { cargarTareasDOM, consultarTareasBackEnd };