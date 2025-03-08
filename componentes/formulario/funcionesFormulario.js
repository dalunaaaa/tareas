import { tarea } from '../tarea/itemTarea.js';

function agregarTarea(texto) {
       

    let tareaFormulario = document.querySelector(".entrada-formulario").value;

    fetch('http://localhost:3000/agregar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre_tarea: tareaFormulario,
            estado: 'FALSO'
        })
    })
    .then(response => response.json())
    .then(data => console.log('Tarea agregada:', data))
    .catch(error => console.error('Error:', error));

    // Cargar DOM
    document.querySelector("#root").innerHTML = "";
    cargarDOM();
}

export { agregarTarea };