function marcarTarea(tarea) {
    tarea.classList.add('completada');
}

function desmarcarTarea(tarea) {
    tarea.classList.remove('completada');
}

export { marcarTarea, desmarcarTarea };