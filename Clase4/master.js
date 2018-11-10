window.onload=function(){

    var btn = document.getElementById("boton");
    btn.addEventListener("dblclick", mensaje);
    btn.addEventListener("click", cambiarTitulo);
    btn.addEventListener("mouseover", cambiarColorTitulo);
    btn.addEventListener("mouseout", cambiarOriginal);

    function mensaje(){
        swal("¡Hola chango!");
    }

    var titulo = document.querySelector("h1");
    function cambiarTitulo(){
        
        titulo.innerHTML = "Práctico de Eventos en JavaScript";

    }

    function cambiarColorTitulo(){
        titulo.setAttribute("class", "text-center text-danger")
    }

    function cambiarOriginal(){
        titulo.setAttribute("class", "text-center text-primary");
        titulo.innerHTML = "Clase 4 - Manejo de Eventos";
    }
}