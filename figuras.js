// Código del cuadrado
console.group("Cuadrados");
// let ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado (lado) { 
    return lado * 4;
}

// console.log ("El perimetro del cuadrado es: " +perimetroCuadrado + " cm");


function areaCuadrado (lado) { 
    return lado * lado;
}
//let areaCuadrado = ladoCuadrado*ladoCuadrado;
//console.log ("El area del cuadrado es: " +areaCuadrado + " cm2");

console.groupEnd("Cuadrados");


// Código del triangulo

console.group("Triangulo");

//let ladoTriangulo1 = 6;
//let ladoTriangulo2 = 6;
//let baseTriangulo = 4;

//console.log(
    //"los lados del triángulo miden: " 
    //+ ladoTriangulo1 +" cm," 
    //+ ladoTriangulo2 +" cm," 
    //+ baseTriangulo +" cm");

    //const alturaTriangulo = 5.5;
    //console.log ("La altura del triangulo es: " +alturaTriangulo + " cm");

    function perimetroTriangulo (lado1,lado2,base) { 
        return lado1 + lado2 + base;
    }

    //const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
    //console.log ("El perimetro del triangulo es: " +perimetroTriangulo + " cm");


    function areaTriangulo (base, altura) { 
        return (base * altura) / 2;
    }

    //const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
    //console.log ("El área del triangulo es: " +areaTriangulo + " cm2");

console.groupEnd("Triangulo");

   
// Código del circulo

console.group("Circulo");

// Radio
//const radioCirculo = 4;
//console.log ("El radio del circulo es: " +radioCirculo + " cm");

// Diametro

function diametroCirculo (radio) { 
    return radio * 2;
}
//const diametroCirculo =radioCirculo * 2
//console.log ("El diametro del circulo es: " +diametroCirculo + " cm");

// PI

const PI = Math.PI
//console.log ("El PI del circulo es: " +PI);

// Circunferencia

function perimetroCirculo (radio) { 
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI
//console.log ("La circunferencia del circulo es: " +perimetroCirculo + " cm");

// Área
function areaCirculo (radio) { 
    return (radio * radio) * PI;
}
//const areaCirculo = (radioCirculo * radioCirculo) * PI
//console.log ("El área del circulo es: " +areaCirculo + " cm2");

console.groupEnd("Circulo");


//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado () {
    const input = document.getElementById("input_cuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado () {
    const input = document.getElementById("input_cuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area)
}