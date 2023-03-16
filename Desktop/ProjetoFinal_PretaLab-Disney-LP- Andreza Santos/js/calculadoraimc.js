function calcularimc(){

   
    const alt = parseFloat(document.getElementById("alt").value);
    const kg = parseFloat(document.getElementById("kg").value);
   
    let mensagem = "";
   
    const imc = kg/(alt*alt);
  
    if (imc < 18.5){
      mensagem = " Abaixo do peso"
    } 
    else if (imc >= 18.5 && imc <25){
      mensagem = `Normal, Seu IMC é: ${imc}!`
    } 
    else if (imc >= 25 && imc <= 29.9){
      mensagem = `Sobrepeso, Seu IMC é: ${imc}!.`
    } 
    else if (imc >= 30 && imc <= 34.9){
      mensagem = `Obsesidade grau I, Seu IMC é: ${imc}`
    } 
    else if (imc >= 35 && imc <= 39.9){
      mensagem = `Obesidade grau II, Seu IMC é: ${imc}!`
    } 
    else if (imc >=40){
      mensagem = `Obesidade grau III, Seu IMC é: ${imc}!`
    }
    else{
      mensagem = `Preencha com valores válidos`
    }
    document.getElementById("imc").innerHTML = mensagem;
}