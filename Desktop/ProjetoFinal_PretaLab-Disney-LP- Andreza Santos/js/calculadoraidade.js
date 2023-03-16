function calculoidade () {

const anoatual= parseInt(document.getElementById("anoatual").value);
const anopassado = parseInt(document.getElementById("anopassado").value);

const idade = anoatual - anopassado;

document.getElementById("idade").innerHTML = idade;

}