window.onload = function() {

    //EJ 2
    // for (i=0; (3*i)<=135; i++){
    //     var resultado;
    //     resultado = 3 * i;
    //     console.log("3 x " + i + " = " + resultado);
    // }

    // EJ 3
    // var dado = Math.ceil(Math.random() * 6);
    // console.log('Valor random: ' + dado);
    // switch(dado){
    //     case 2:
    //     case 4:
    //     case 6: console.log("El número " + dado + " es par")
    //     break;
    //     default: console.log("El número " + dado + " es impar");
    // }

    // EJ 4
    // var num = 0;
    // do {
    //     var aleatorio = Math.ceil(Math.random() * 37);
    //     num++;
    // } while (aleatorio != 19) {
    //     console.log("Salió el 19. Hubo " + num + " intentos para ello.");
    // }

    // EJ 5
    // var pares = [];

    // for (i=0; i<=100; i++){
    //     if (i%2 === 0) {
    //         pares.push(i);
    //         continue;
    //     }
    // }
    // console.log(pares);

    
    // EJERCICIOS FUNCIONES

    // EJ 1 - Convertir un objeto literal a un array
    // var estudiante = {
    //     name: "Nahuel",
    //     lastname: "Di Biase",
    //     dni: 33306761,
    //     email: "nahueldibiase@hotmail.com",
    // }

    // var objToArray = [];

    // function fromObjectToArray(obj){
    //     for (var x in obj) objToArray.push(obj[x]);
    //     return objToArray;
    // }
    // console.log(fromObjectToArray(estudiante));

    // EJ 2 - Cambiar color del Body
    
    function cambiarColor(color){
        if (color !== "green" && color !== "#0f0" && color !== "#00ff00" && color !== "#0F0" && color !== "#00FF00"){
            document.body.style.backgroundColor = color;
            return true;
        }
        return false;
    }

    console.log("Cambió el color del fondo " + cambiarColor('red'));

    // EJ 3 -
}