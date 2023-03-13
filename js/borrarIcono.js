const borrarIcono = () => {
    const i =  document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    //i.addEventListener("click", borrarTicket);

    return i;
}

const  borrarTicket = (event) => {
    //Acceder al elemento padre (la lista que forma la tarjeta "li").
    //console.log(event.target.parentElement);
    const parent = event.target.parentElement;
    
    //Eliminar el elemento padre. 
    parent.remove();
}

export default borrarIcono;