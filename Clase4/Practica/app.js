window.addEventListener('load', agregarTareas);

    function agregarTareas(){
        do {
           var tareas = parseInt(prompt("¿Cuántas tareas te gustaría agregar?"));

           if (isNaN(tareas) || tareas < 3){
            alert("Ingresa un número mayor o igual a 3");
            
            }

            var confirma = confirm("¿Seguro que querés ingresar " + tareas + " tareas?");

        } while (isNaN(tareas) || tareas < 3 || !confirma)

        var listadoTareas = [];

        for (i = 0; i<tareas; i++){

            do{
                listadoTareas = prompt("Agregá una tarea");
            } while (i<tareas)

            var listado = document.getElementById(listado);
            listado.innerHTML = "<li>" + listadoTareas[i] + "</li>";
        }
    }