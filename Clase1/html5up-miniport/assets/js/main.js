window.onload = function(){

    var title = document.getElementById('titular');
    title.style.display = "none";

    var owl = document.querySelector('#lechuza');
    owl.style.filter = "grayscale(100%)";

    var reg = document.querySelector('#copyright');
    console.log(reg);

    // CAMBIO DE COLOR
    var H2 = document.querySelectorAll("h2");
    console.log(H2);
    // PARA CAMBIAR SÓLO EL PRIMERO
    // H2.style.color = "red";

    // PARA CAMBIAR TODOS
    // for(var i= 0; i<=H2.length; i++){
    //     H2[i].style.color = "magenta";
    // }

    // PARA CAMBIAR UNO EN X POSICIÓN
    // H2[1].style.color = "blue";

    // OTRA FORMA PARA CAMBIAR TODOS
    // H2.forEach(function(elemento){
    //     elemento.style.color = "red";
    // })

    // FUNCIÓN PARA RECORRER TANTOS ARRAYS COMO STRINGS
    for(var elemento of H2){
        elemento.style.color = "green";
    }

    // APARECE CUANDO SE CLICKEA EL BOTÓN
    // var aparecer = document.getElementById('abracadabra');
    // aparecer.onclick = function(){
    //     title.style.display = "block";
    // }

    // ON MOUSE OVER
    var aparecer = document.getElementById('abracadabra');
    aparecer.onmouseover = function(){
        title.style.display = "block";
        owl.style.filter = "grayscale(0%)";
    }
    // ON MOUSE OUT
    aparecer.onmouseout = function(){
        title.style.display = "none";
        owl.style.filter = "grayscale(100%)";
    }
}