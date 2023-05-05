var texto;

function extraertexto (){
    texto = document.getElementById("ingreso").value;
    document.getElementById("ingreso").value = "";
    
}

var botonEncriptar = document.getElementById("encriptar");
botonEncriptar.onclick = codificar;

function codificar (evento){
    extraertexto();

    console.log(texto);

}

