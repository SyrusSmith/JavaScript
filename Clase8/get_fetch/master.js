window.onload = function(){

    var btn = document.getElementById("boton")
    btn.addEventListener("click", mostrarDatos)

    var contenido = document.getElementById("contenido")

    function mostrarDatos(){
        fetch("datos.txt")

        .then(function(resultado){
            return resultado.text()
        })

        .then(function(data){
            contenido.innerHTML = `<h2 class="text-center text-primary">${data}</h2>`
            //con las `` se le puede dar estilos
        })

        //CON ECMA SCRIPT 6
        // .then(resultado => resultado.text())
        // .then(data => {contenido.innerHTML = `<h2 class="text-center text-primary">${data}</h2>`})
    }

}