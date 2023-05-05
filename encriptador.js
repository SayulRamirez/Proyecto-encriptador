var textoEngtrada;

function extraertexto (){
    textoEngtrada = document.getElementById("ingreso").value; //Selecciona los datos de del textarea
    document.getElementById("ingreso").value = ""; //Déspues de seleccionar los datos "resetea" el campo
}

var botonEncriptar = document.getElementById("encriptar"); //Seleccionamos el boton
botonEncriptar.onclick = codificar; //Lo asociamos con un evento "onclick"

var botonCopiar = document.getElementById("copiar");
var imagen = document.getElementById("ocultar");

function codificar (evento){

    extraertexto();
    var cadenaCodificada = textoEngtrada.replaceAll("e", "enter");
    cadenaCodificada = cadenaCodificada.replaceAll("i", "imes");
    cadenaCodificada = cadenaCodificada.replaceAll("a", "ai");
    cadenaCodificada = cadenaCodificada.replaceAll("o", "ober");
    cadenaCodificada = cadenaCodificada.replaceAll("u", "ufat");

    document.getElementById("salida").value = cadenaCodificada;
    botonCopiar.style.visibility = "visible";
    imagen.style.visibility = "hidden";
}

