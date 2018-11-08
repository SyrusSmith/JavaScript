window.onload = function(){

    // EJ 1

    // a)
    var body = document.querySelector("body");
    var titulo = document.createElement("h1");
    titulo.innerHTML = "<h1>TÍTULO</h1>";
    body.appendChild(titulo);

    // b)
    var bodyP = document.querySelector("body");

    for (i=1; i<=10; i++){
        
        var parrafo = document.createElement("p");
        parrafo.innerHTML = "<p>Ésto es el párrafo N°" + i + "</p>";
        bodyP.appendChild(parrafo);
    }

    // c)
    var bodyC = document.querySelector("body");
    var lista = document.createElement("ul");
    lista.innerHTML = "<ul></ul>";
    body.appendChild(lista);

    for (i=1; i<=7; i++){
        var lista1 = document.querySelector("ul");
        var item = document.createElement("li");
        item.innerHTML = "<li>Celda N° " + i + "</li>";
        lista1.append(item);
    }

    // EJ 2
}