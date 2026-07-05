# utileria_js
Validaciones para un login usando JS

# Librería de Validaciones en JavaScript


**Tecnológico Nacional de México / Instituto Tecnológico de Oaxaca**
**Nombre:** Dalia Montserrat Caballero Silva  
**Proyecto:** Librería de validaciones en JavaScript  
**Materia:** Programación Web  
**Docente:** Adelina Martínez Nieto

### ¿Qué problema resuelve?

Esta librería permite reutilizar funciones de validación en diferentes páginas web sin tener que escribir nuevamente el mismo código.
Permite validar datos comunes de formularios como:

- Correos electrónicos.
- Nombres.
- Longitud de números.
- Fechas de nacimiento.
- Mayoría de edad.
- Contraseñas seguras.
- Números telefónicos.
- Nombres de usuario.

La librería puede utilizarse en formularios de registro, inicio de sesión y otros módulos de una aplicación web.

---

# Instalación

Para utilizar la librería se debe agregar el archivo `utileria.js` al proyecto.

Si el archivo se encuentra en la misma carpeta que el HTML:

```html
<script src="utileria.js"></script>
```

En este proyecto, el archivo se encuentra dentro de la carpeta `js`, por lo tanto se utiliza:

```html
<script src="js/utileria.js"></script>
```

La librería debe cargarse antes del archivo JavaScript que utiliza sus funciones.

---

# Uso

## 1. Validar correo electrónico

La función `validarCorreo()` recibe un correo y devuelve `true` si su formato es válido y `false` si no lo es.

```javascript
let correo = "usuario@gmail.com";

if (validarCorreo(correo)) {
    console.log("Correo válido");
} else {
    console.log("Correo no válido");
}
```

Resultado:

```text
Correo válido
```

---

## 2. Validar que un texto contenga solamente letras

La función `soloLetras()` permite validar nombres y otros textos que solamente deben contener letras y espacios.

```javascript
let nombre = "Montse Caballero";

if (soloLetras(nombre)) {
    console.log("Nombre válido");
} else {
    console.log("El nombre contiene caracteres no permitidos");
}
```

Resultado:

```text
Nombre válido
```

---

## 3. Validar la longitud de un número

La función `validarLongitud()` comprueba que el valor contenga solamente números y no supere la longitud máxima indicada.

```javascript
let numero = "123456";
let maxLongitud = 8;

console.log(validarLongitud(numero, maxLongitud));
```

Resultado:

```text
true
```

---

## 4. Calcular edad

La función `calcularEdad()` recibe una fecha de nacimiento y calcula la edad de la persona.

```javascript
let fechaNacimiento = "2004-05-20";

let edad = calcularEdad(fechaNacimiento);

console.log("Edad:", edad);
```

Resultado de ejemplo:

```text
Edad: 22
```

El resultado puede cambiar dependiendo de la fecha actual y de si la persona ya cumplió años

---

## 5. Validar mayoría de edad

La función `esMayorDeEdad()` devuelve `true` cuando la persona tiene 18 años o más.

```javascript
let fechaNacimiento = "2000-10-15";

if (esMayorDeEdad(fechaNacimiento)) {
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad");
}
```

Resultado:

```text
La persona es mayor de edad
```

---

## 6. Validar contraseña

La función `validarPassword()` comprueba que una contraseña tenga:

- Mínimo 8 caracteres.
- Una letra mayúscula.
- Una letra minúscula.
- Un número.
- Un carácter especial.

Ejemplo:

```javascript
let password = "Montse123@";

if (validarPassword(password)) {
    console.log("Contraseña válida");
} else {
    console.log("Contraseña no válida");
}
```

Resultado:

```text
Contraseña válida
```

---

## 7. Validar teléfono

La función `validarTelefono()` comprueba que un número telefónico tenga exactamente 10 dígitos.

```javascript
let telefono = "9611234567";

if (validarTelefono(telefono)) {
    console.log("Teléfono válido");
} else {
    console.log("Teléfono no válido");
}
```

Resultado:

```text
Teléfono válido
```

---

## 8. Validar nombre de usuario

La función `validarNombreUsuario()` permite letras, números y guion bajo.

```javascript
let usuario = "montse_92";

if (validarNombreUsuario(usuario)) {
    console.log("Nombre de usuario válido");
} else {
    console.log("Nombre de usuario no válido");
}
```

Resultado:

```text
Nombre de usuario válido
```

---

# Ejemplo de integración en un formulario

La librería puede utilizarse para validar los datos antes de continuar con un formulario.

```javascript
let correo = document.getElementById("correo").value.trim();

if (correo === "") {
    alert("Ingresa un correo");
    return;
}

if (!validarCorreo(correo)) {
    alert("El correo electrónico no es válido");
    return;
}

alert("Correo válido");
```

También se utiliza en el formulario de registro para calcular la edad:

```javascript
let fechaNacimiento =
    document.getElementById("fechaNacimiento").value;

let edad = calcularEdad(fechaNacimiento);

if (!esMayorDeEdad(fechaNacimiento)) {
    alert("No puedes registrarte porque eres menor de edad");
    return;
}

document.getElementById("mensajeEdad").textContent =
    "Tu edad es de " + edad + " años";
```

---

# Capturas de pantalla

## Pruebas de la librería en consola

En la siguiente captura se muestran los resultados de las funciones ejecutadas en la consola del navegador.

## Formulario de registro
<img width="1610" height="1284" alt="image" src="https://github.com/user-attachments/assets/bbffbcf7-b0f4-43f0-8831-3ac4c8ad5e44" />
<img width="1348" height="1292" alt="image" src="https://github.com/user-attachments/assets/5fc42519-4b05-4757-8a11-b726790bd327" />
<img width="1662" height="1346" alt="image" src="https://github.com/user-attachments/assets/8993480b-cbc2-4847-ad5e-8aa97bdb2199" />
<img width="1476" height="1322" alt="image" src="https://github.com/user-attachments/assets/ba62b908-a61d-44c5-b829-00d918bfcb8c" />
<img width="1338" height="1114" alt="image" src="https://github.com/user-attachments/assets/d6aecd8d-03a3-459f-aa25-f3ff3e60efc4" />
<img width="1300" height="1266" alt="image" src="https://github.com/user-attachments/assets/4579d987-ba4a-46fd-ba65-518e47b15090" />
<img width="1434" height="1240" alt="image" src="https://github.com/user-attachments/assets/47e8e531-bbc4-405a-88a6-84ec01832291" />
<img width="1658" height="1350" alt="image" src="https://github.com/user-attachments/assets/cb5bceda-a0e5-420d-a2ef-3e8c72aaae81" />


## Validación en el login
<img width="1414" height="964" alt="image" src="https://github.com/user-attachments/assets/67476ede-10e3-4255-bccd-3430ad5808b0" />
<img width="1532" height="1254" alt="image" src="https://github.com/user-attachments/assets/527a7a15-ab11-4700-a8a5-2babddcb9630" />
<img width="1490" height="1198" alt="image" src="https://github.com/user-attachments/assets/ed06db2a-4e06-4765-bd60-98dbe444aa26" />
<img width="1404" height="1138" alt="image" src="https://github.com/user-attachments/assets/030f0cb1-1ab7-422c-b448-9bb7998b0d88" />


---

**Enlace del video:** 

se está subiendo

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Expresiones regulares
- DOM
- Eventos de JavaScript

---

**Enlace de la página:** 
aún no carga

# Conclusión

Esta librería nos permite usar diferentes validaciones de uso común para evitar repetir código en cada página del proyecto, y se puede reutilizar en inicar sesión, formularios, registros.
