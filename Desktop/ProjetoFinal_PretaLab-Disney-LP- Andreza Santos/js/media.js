function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  let mensagem = "";
  // evite mexer no código acima!

  let nota= ( nota1 + nota2 + nota3 + nota4 ) / 4

  if (nota == 0){
    mensagem = "Infelizmente você zerou a prova :("
  } 
  else if (nota >= 0.1 && nota <= 3){
    mensagem = `Caramba, deu ruim, você obteve media ${nota} ! Estude mais e tente novamente!`
  } 
  else if (nota >= 3.1 && nota <= 5.9){
    mensagem = `Você obteve media ${nota}! Falta pouco para a média.`
  } 
  else if (nota >= 6 && nota <= 7){
    mensagem = `Você está na média com ${nota}`
  } 
  else if (nota >= 7.1 && nota <= 9.9){
    mensagem = `Notão! Sua média é ${nota}!`
  } 
  else if (nota ==10){
    mensagem = `Parabéns! 10 de média`
  }
  else{
    mensagem = `Preencha com notas válidas`
  }
  
  // evite mexer na linha de código abaixo!
  document.getElementById("situacaoAluno").innerHTML = mensagem;
}
