function header (){
    let header = document.createElement ('header');
    header.className = "header"
     //contenido
     let logo = document.createElement('img');
     logo.src = "https://cdn-icons-png.flaticon.com/512/1005/1005141.png";
     logo.alt = "logo";
     header.appendChild(logo);

     let h1 =document.createElement('h1');
     h1.textContent = "todo-List";
     header.appendChild(h1);





    return header;
}



export {header}