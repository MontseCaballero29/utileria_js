let formularioRegistro = document.getElementById("formularioRegistro");

formularioRegistro.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correoRegistro").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Validar null
    if (
        nombre === "" ||
        correo === "" ||
        telefono === "" ||
        fechaNacimiento === ""
    ) { alert("Completa todos los campos");
        return;
    }

    // Validar nombre
    if (!soloLetras(nombre)) {
        alert("El nombre solo debe contener letras");
        return;
    }

    // Validar correo
    if (!validarCorreo(correo)) {
        alert("El correo electrónico no es válido");
        return;
    }

    // Validar teléfono
    if (!validarTelefono(telefono)) {
        alert("El teléfono debe tener exactamente 10 dígitos");
        return;
    }

    // Calcular edad
    let edad = calcularEdad(fechaNacimiento);

    // Validar mayoría de edad
    if (!esMayorDeEdad(fechaNacimiento)) {
        alert( "No puedes registrarte porque eres menor de edad. Tu edad es de " + edad + " años");
        return;
    }

    // Mostrar edad en el modal
    document.getElementById("mensajeEdad").textContent ="Tu edad es de " + edad + " años";

    // Mostrar modal
    document.getElementById("modalEdad").style.display = "flex";
});

function cerrarModal() {document.getElementById("modalEdad").style.display = "none";}

function volverLogin() { window.location.href = "login.html";}
function irRegistro() { window.location.href = "index.html";}

