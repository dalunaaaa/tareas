

function crearSeccion() { 
    let seccion = document.createElement('div');
    seccion.className = "seccion-general";
    
    for (let i = 1; i <= 13; i++) {
        let caja = document.createElement('div');

        if (i === 13) {
            caja.className = "caja-especial";
            caja.textContent = "Añadir Tarea";
        } else {
            caja.className = `caja-${i}`;
            caja.textContent = `Tarea ${i}`;
        }
        
        let cajaInterna = document.createElement('div');
        cajaInterna.className = `caja-interna-${i}`;
        caja.appendChild(cajaInterna);
        
        seccion.appendChild(caja);
    }
    
    return seccion;
}

export { crearSeccion };




function iniciaContenedor() {
    let contenedor = document.createElement("section");
    contenedor.className = "contenedor-general";

    let seccion = crearSeccion();
    contenedor.appendChild(seccion);

    return contenedor;
}

export { iniciaContenedor };