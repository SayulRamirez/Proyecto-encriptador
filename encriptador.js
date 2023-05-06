
var textoEntrada;

function extraertexto() {
    textoEntrada = document.getElementById("ingreso").value; //Selecciona los datos de del textarea
    document.getElementById("ingreso").value = ""; //Déspues de seleccionar los datos "resetea" el campo
}

function estaEnMinusculas(cadena) {
    return cadena === cadena.toLowerCase();
}

var botonEncriptar = document.getElementById("encriptar"); //Seleccionamos el boton
botonEncriptar.onclick = codificar; //Lo asociamos con un evento "onclick"

var botonCopiar = document.getElementById("copiar");
var imagen = document.getElementById("ocultar");

function codificar() {
    extraertexto();

    if (estaEnMinusculas(textoEntrada)) {

        const regex = /^[a-zA-Z0-9_\s]*$/;
        var tieneTildes = !regex.test(textoEntrada);

        if (tieneTildes == false) {
            var cadenaCodificada = textoEntrada.replaceAll("e", "enter");
            cadenaCodificada = cadenaCodificada.replaceAll("i", "imes");
            cadenaCodificada = cadenaCodificada.replaceAll("a", "ai");
            cadenaCodificada = cadenaCodificada.replaceAll("o", "ober");
            cadenaCodificada = cadenaCodificada.replaceAll("u", "ufat");

            document.getElementById("salida").value = cadenaCodificada;
            botonCopiar.style.visibility = "visible";
            imagen.style.visibility = "hidden";
        } else {
            alert("Ingresa letras sin caracteres especiales.")
        }
    } else {
        alert("Introduce solo minusculas");
    }

    cadenaCodificada = "";
}

var botonDesEncriptar = document.getElementById("desEncriptar");
botonDesEncriptar.onclick = decodificar;

var areaSalida = document.getElementById("salida");

function decodificar() {

    extraertexto();
    if (estaEnMinusculas(textoEntrada)) {

        const regex = /^[a-zA-Z0-9_\s]*$/;
        var tieneTildes = !regex.test(textoEntrada);

        if (tieneTildes == false) {

            var cadenaDecodificada = textoEntrada.replaceAll("ufat", "u");
            cadenaDecodificada = cadenaDecodificada.replaceAll("ober", "o");
            cadenaDecodificada = cadenaDecodificada.replaceAll("ai", "a");
            cadenaDecodificada = cadenaDecodificada.replaceAll("imes", "i");
            cadenaDecodificada = cadenaDecodificada.replaceAll("enter", "e");

            document.getElementById("salida").value = cadenaDecodificada;
            botonCopiar.style.visibility = "visible";
            imagen.style.visibility = "hidden";
        } else {
            alert("Ingresa letras sin caracteres especiales.")
        }
    } else {
        alert("Introduce solo minusculas");
    }

    cadenaDecodificada = "";
}

var textoCopiado;

function copiar() {
    textoCopiado = document.getElementById("salida");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textoCopiado.value);

    document.getElementById("salida").value = "";
}

botonCopiar.onclick = copiar;