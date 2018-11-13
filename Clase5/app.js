window.onload = function(){

    dia = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    var fechaDeHoy = new Date;
    var fechaActual = fechaDeHoy.getDate();
    var mesActual = fechaDeHoy.getMonth();
    var diaActual = fechaDeHoy.getDay();
    var anioActual = fechaDeHoy.getFullYear();
    var horaActual = fechaDeHoy.getHours();
    var minutosActual = fechaDeHoy.getMinutes();
    var segundosActual = fechaDeHoy.getSeconds();

    var mostrarFecha = "Hoy es " + dia[diaActual] + " " + fechaActual + " de " + mes[mesActual] + " de " + anioActual + ", y la hora actual es " + horaActual + ":" + minutosActual + ":" + segundosActual
    console.log(mostrarFecha);
    // mostrarFecha.toString();
    
    //mostrar la variable en el html
    document.getElementById("contenido").innerHTML = mostrarFecha;
    
    var navidad = new Date("24/12/2018");
    var hoy = new Date();
    var falta = navidad - hoy;
}