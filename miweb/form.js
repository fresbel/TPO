(function(){
    var formulario = document.getElementsByName('formulario')[0]             
    var validarNombre=(e) => {
        if (formulario.nombre.value == 0) {
            alert("Completa el campo nombre");
            e.preventDefault();
        }
        var validarEmail = function (e) {
            if (formulario.Email.value == 0) {
                alert("Completa el campo Mail");
                e.preventDefault();
                var validarComentario = function (e) {
                    if (formulario.Comentario.value == 0) {
                        alert("Completa el campo Comentario");
                        e.preventDefault();
                    }
                };
            };
            var validar = function (e) {
                validarNombre(e);
                validarEmail(e);
                validarComentario(e);
            };
            formulario.addEventListener("submit", validar);
        } ();
    }})