function somar() {
  const numero1 = parseFloat(document.getElementById("numero1Soma").value);
  const numero2 = parseFloat(document.getElementById("numero2Soma").value);

  const resultadoSoma = numero1 + numero2;

  
  document.getElementById("resultadoSoma").innerHTML = resultadoSoma;
}

function subtrair() {
  const numero1 = parseFloat(document.getElementById("numero1Sub").value);
  const numero2 = parseFloat(document.getElementById("numero2Sub").value);
 

  const resultadoSub =  numero1 - numero2
  
  document.getElementById("resultadoSub").innerHTML = resultadoSub;
}

function multiplicar() {
  const numero1 = parseFloat(document.getElementById("numero1Mult").value);
  const numero2 = parseFloat(document.getElementById("numero2Mult").value);
 

  const resultadoMult = numero1 * numero2
 
  document.getElementById("resultadoMult").innerHTML = resultadoMult;
}

function dividir() {
  const numero1 = parseFloat(document.getElementById("numero1Div").value);
  const numero2 = parseFloat(document.getElementById("numero2Div").value);
  

  const resultadoDiv = numero1 / numero2
 
  document.getElementById("resultadoDiv").innerHTML = resultadoDiv;
}

function raiz() {
 const raiz1 = parseInt (document.getElementById("raiz1").value);

 const resultadoraiz = Math.sqrt(raiz1);

document.getElementById("resultadoraiz").innerHTML = resultadoraiz;

}

function log() {
  const log1 = parseInt (document.getElementById("log1").value);
 
  const resultadolog = Math.log(log1);
 
 document.getElementById("resultadolog").innerHTML = resultadolog;
 
 }

 function Tan() {
  const Tan = parseInt (document.getElementById("Tan").value);
 
  const resultadotangente = Math.tan(Tan);
 
 document.getElementById("resultadotangente").innerHTML = resultadotangente;
 
 }

 function limpar(){
  limparcampo()
  document.getElementById("resultadoSoma").innerHTML = " ";
  document.getElementById("resultadoSub").innerHTML = " ";
  document.getElementById("resultadoMult").innerHTML = " ";
  document.getElementById("resultadoDiv").innerHTML = " ";
  document.getElementById("resultadolog").innerHTML = " ";
  document.getElementById("resultadotangente").innerHTML = " ";
  document.getElementById("resultadoraiz").innerHTML = " ";
 }

 function limparcampo(){
  document.getElementById("numero1Soma").value = " ";
  document.getElementById("numero2Soma").value = " ";
  document.getElementById("numero1Sub").value = " ";
  document.getElementById("numero2Sub").value = " ";
  document.getElementById("numero1Mult").value = " ";
  document.getElementById("numero2Mult").value = " ";
  document.getElementById("numero1Div").value = " ";
  document.getElementById("numero2Div").value = " ";
  document.getElementById("raiz1").value = " ";
  document.getElementById("log1").value = " ";
  document.getElementById("Tan").value = " ";
 }