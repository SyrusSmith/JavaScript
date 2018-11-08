window.onload = function(){
    
    var entrar = true;
    while (entrar==true){
        
        do {
            var nombre = prompt("¿Cuál es tu nombre?");
            if(nombre == null || nombre == ""){
                alert("El campo no puede estar vacío.")
            };
        } while (nombre == null || nombre == "");

        do {
            var sueldo = parseFloat(prompt("¿Cuál es tu sueldo?"));
        } while (isNaN(sueldo) || sueldo<=0);

        var porcentaje = parseInt(prompt("Indicá el porcentaje de aumento deseado"));
        var nvoSueldo = (sueldo*porcentaje)/100+sueldo;
        alert(nombre + ", tu nuevo sueldo es de $" + nvoSueldo);
        entrar = confirm("¿Desea continuar?");
    }

    location.href = "https:// ";
}