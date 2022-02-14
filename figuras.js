// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log ("El perimetro del cuadrado es: " +perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log ("El area del cuadrado es: " +areaCuadrado + " cm2");

console.groupEnd("Cuadrados");


// Código del triangulo

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "los lados del triángulo miden: " 
    + ladoTriangulo1 +" cm," 
    + ladoTriangulo2 +" cm," 
    + baseTriangulo +" cm");

    const alturaTriangulo = 5.5;
    console.log ("La altura del triangulo es: " +alturaTriangulo + " cm");

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
    console.log ("El perimetro del triangulo es: " +perimetroTriangulo + " cm");

    const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
    console.log ("El área del triangulo es: " +areaTriangulo + " cm2");

    console.groupEnd("Triangulo");

    // Código del circulo

console.group("Circulo");

// Radio
const radioCirculo = 4;
console.log ("El radio del circulo es: " +radioCirculo + " cm");

// Diametro
const diametroCirculo =radioCirculo * 2
console.log ("El diametro del circulo es: " +diametroCirculo + " cm");

// PI
const PI = Math.PI
console.log ("El PI del circulo es: " +PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log ("La circunferencia del circulo es: " +perimetroCirculo + " cm");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log ("El área del circulo es: " +areaCirculo + " cm2");

console.groupEnd("Circulo");