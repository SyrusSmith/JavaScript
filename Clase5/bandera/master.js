window.onload = function(){

    var colorActual
    var cargarColor = function(){
        colorActual = this.getAttribute("id");
    }

    var cambiarColor = function(){
        this.style.background = colorActual;
    }

    var rojo = document.getElementById("red");
    rojo.addEventListener("click", cargarColor);
    //Otra forma de hacer ésto es
    document.getElementById("lightblue").addEventListener("click", cargarColor);
    document.getElementById("green").addEventListener("click", cargarColor);
    document.getElementById("white").addEventListener("click", cargarColor);
    document.getElementById("yellow").addEventListener("click", cargarColor);
    document.getElementById("blue").addEventListener("click", cargarColor);
    document.getElementById("black").addEventListener("click", cargarColor);

    linea1 = document.getElementById("linea1");
    linea1.addEventListener("click", cambiarColor);
    document.getElementById("linea2").addEventListener("click", cambiarColor);
    document.getElementById("linea3").addEventListener("click", cambiarColor);
}