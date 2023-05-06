
var textoEntrada;

function extraertexto() {
    textoEntrada = document.getElementById("ingreso").value; //Selecciona los datos de del textarea
    document.getElementById("ingreso").value = ""; //Déspues de seleccionar los datos "resetea" el campo
}

function estaEnMinusculas(cadena) { //La funcion devuelve true si la cadena no contien mayusculas de lo contrario 
    return cadena === cadena.toLowerCase(); //devuelve false
}

var botonEncriptar = document.getElementById("encriptar"); //Seleccionamos el boton
botonEncriptar.onclick = codificar; //Lo asociamos con un evento "onclick"

var botonCopiar = document.getElementById("copiar");
var imagen = document.getElementById("ocultar");

function codificar() {
    extraertexto();

    if (estaEnMinusculas(textoEntrada)) {

        const regex = /^[a-zA-Z0-9_\s]*$/;  //Con ayuda de la expresion regular verificamos si la cadena tiene caracteres especiales
        var tieneTildes = !regex.test(textoEntrada);  //Devuelve false si no tiene caracteres especiales de lo contrario devuelve true

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

    textoCopiado.select();  //Selecciona lo contenido en el contenedor
    textoCopiado.setSelectionRange(0, 99999); //Rango de caracteres que puede copiar es mas para los dipositivos moviles

    navigator.clipboard.writeText(textoCopiado.value); //Guarda el texto copiado del contenedor en el portapapeles 

    document.getElementById("salida").value = "";
}

botonCopiar.onclick = copiar;