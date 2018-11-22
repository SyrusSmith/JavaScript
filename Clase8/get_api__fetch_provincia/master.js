window.onload = function(){
    var select1 = document.getElementById("select1")
    
    select1.addEventListener("click", mostrarDatos)


    function mostrarDatos(){
        fetch("https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre")

        // .then(resultado => resultado.json())
        // .then(data => {
        //     console.log(data)
        // })

        .then(function(resultado){
            return resultado.json();
        })
        .then(function(data){
            // console.log(data.provincias);
            for (var indice of data.provincias){
                var opciones = document.createElement("option")
                opciones.value = indice.id
                opciones.innerHTML = indice.nombre
                select1.appendChild(opciones)
            }
        })


    }
}