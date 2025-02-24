
function header() {
    let header = document.createElement('header');
    header.className = "header";

    let h1 = document.createElement('h1');
    h1.textContent = "danibu";
    header.appendChild(h1);

    return header;
}

export { header };