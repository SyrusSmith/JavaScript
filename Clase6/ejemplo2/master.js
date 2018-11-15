(function(){

// window.onload=function(){

    //VALIDACIÓN PARA DNI
    // var miFormulario = document.forms[0];

    // miFormulario.onsubmit = function(evento){
    //     evento.preventDefault();
    //     var dni = document.getElementById("dni");
    //     // if(dni.value.length<1){
    //     //     swal("Error", "El campo NO puede estar vacío", "error");
    //     //     return false;
    //     // }

    //     //OTRA VALIDACIÓN
    //     if(dni.value == ""){
    //         swal("Error", "El campo NO puede estar vacío", "error");
    //         return false;
    //     }
    // }
    
    // OTRA FORMA
    var miFormulario = document.formulario;

    var dniRegex = (/^\d{8,}$/);
    // "\d" es para que sólo acepte dígitos numéricos
    // "{8}" es para que sólo acepte 8 dígitos

    var emailRegex = (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    
    document.formulario.dni.focus();
    // miFormulario.dni.focus();
    // document.getElementById("dni").focus();

    miFormulario.onsubmit = function(evento){
        evento.preventDefault();
        
        var dni = document.getElementById("dni");
        
        if(dni.value.length<1){
            swal("¡Guarda!", "El campo DNI NO puede estar vacío", "error");
            return false;
        }
        // if(dni.value == ""){
        //     swal("Error", "El campo NO puede estar vacío", "error");
        //     return false;
        // }

        //VALIDAR EXPRESIÓN REGULAR DNI
        if(dniRegex.test(dni.value)!=true){
            swal("¡Guarda!", "El campo DNI DEBE tener 8 dígitos", "warning");
            return false;
        }

        // VALIDAR EXPRESIÓN REGULAR EMAIL
        if(emailRegex.test(email.value)!=true){
            swal("¡Guarda!", "El campo email es inválido", "error");
            return false;
        }
        // if(emailRegex.test(document.getElementById("email").value)!=true){
        //     swal("¡Guarda!", "El campo email es inválido", "error");
        //     return false;
        // }

        // VALIDAR EL CHECK DE TÉRMINOS
        var terminos = miFormulario.terminos;
        if(terminos.checked != true){
            swal("¡Guarda!", "DEBÉS aceptar los términos y condiciones", "error");
            return false;
        }

    }

}())