window.onload = function(){

    var data = document.getElementById("datos");
    var btn = document.getElementById("boton");
    btn.addEventListener("click", enviar);

    function enviar(){
        var name = document.getElementById("nombre").value;
        var lastName = document.getElementById("apellido").value;
        var datosCapturados = new FormData();
        datosCapturados.append("nombre", name);
        datosCapturados.append("apellido", lastName);
        var url = "procesarDatos.php";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                data.innerHTML = xhr.responseText;
            }
        }
        xhr.open("POST", url, true);
        xhr.send(datosCapturados);
    }
}