let formularioLogin = document.getElementById("formularioLogin");
let botonRegistro = document.getElementById("botonRegistro");

// INICIO DE SESIÓN
formularioLogin.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let correo = document.getElementById("correo").value.trim();
    let password = document.getElementById("password").value;

    // Campos null
    if (correo === "" || password === "") {
        alert("Completa todos los campos");
        return;
    }

    // Correo incorrecto
    if (!validarCorreo(correo)) {
        alert("El correo electrónico no es válido");
        return;
    }

    // Contraseña incorrecta
    if (!validarPassword(password)) {
        alert( "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial" );
        return;
    }
    alert("Inicio de sesión válido");

});

// IR AL REGISTRO
function irRegistro() { window.location.href = "index.html"; }