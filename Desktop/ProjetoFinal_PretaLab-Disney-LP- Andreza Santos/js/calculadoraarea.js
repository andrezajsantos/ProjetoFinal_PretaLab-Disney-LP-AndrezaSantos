function circulo() {
    const raio = parseFloat(document.getElementById("raio").value);

    const resultadocirculo = 3.14 * raio * raio;

    document.getElementById("resultadocirculo").innerHTML = resultadocirculo;
  }
  
  function triangulo() {
    const altura = parseFloat(document.getElementById("altura").value);
    const base = parseFloat(document.getElementById("base").value);

    const resultadotriangulo = base*altura/2;

    document.getElementById("resultadotriangulo").innerHTML = resultadotriangulo;
  }

  function retangulo() {
    const altura2 = parseFloat(document.getElementById("altura2").value);
    const base2 = parseFloat(document.getElementById("base2").value);
    const resultadoretangulo = base2 * altura2;

    document.getElementById("resultadoretangulo").innerHTML = resultadoretangulo;
  }

  function quadrado() {
    const lado = parseFloat(document.getElementById("lado").value);
    const resultadoquadrado = lado * lado;

    document.getElementById("resultadoquadrado").innerHTML = resultadoquadrado;
  }

  function trapezio() {

    const basemaior = parseFloat(document.getElementById("basemaior").value);
    const basemenor = parseFloat(document.getElementById("basemenor").value);
    const altura3 = parseFloat(document.getElementById("altura3").value);

    const resultadotrapezio = basemaior+basemenor*altura3/2;

    document.getElementById("resultadotrapezio").innerHTML = resultadotrapezio;
  }

  function losango() {

    const dmaior = parseFloat(document.getElementById("dmaior").value);
    const dmenor = parseFloat(document.getElementById("dmenor").value);
   
    const resultadolosango = dmaior*dmenor/2;

    document.getElementById("resultadolosango").innerHTML = resultadolosango;
  }