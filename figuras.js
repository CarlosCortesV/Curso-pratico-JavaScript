//Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;

// console.log("Lo lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(lado){
    return lado * 4;
} 
console.log("El perímetro del cuadrado es: " + perimetroCuadrado() + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
console.log("El área del cuadrado es: " + areaCuadrado() + "cm^2");

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,ladoTriangulo3){
    
    return ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
}

console.log("El perímetro del triángulo es: " + perimetroTriangulo() + "cm");

function areaTriangulo(ladoTriangulo3, alturaTriangulo){
    return (ladoTriangulo3 * alturaTriangulo) / 2
} 

console.log("El área del triángulo es: " + areaTriangulo() + "cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculo")

//Radio
const radioCiculo = 4;

console.log("El radio del cículo es: " + radioCiculo + "cm");
//Diámetro
function driametroCirculo(radioCiculo){
    return radioCiculo * 2;
} 

console.log("El diámetro del círculo es: " + driametroCirculo(radioCiculo) + "cm");

//PI
const PI = Math.PI;

console.log("PI es: " + PI);

//Cicunferencia
function perimetroCirculo(radioCiculo){
    const diametro = driametroCirculo(radioCiculo);
    return diametro * PI;
} 

console.log("El perímetro del circulo es: " + perimetroCirculo() + "cm");

//Área
function areaCirculo(radioCiculo){
    return PI * (radioCiculo * radioCiculo);
} 

console.log("El área del circulo es: " + areaCirculo(radioCiculo) + "cm^2");

console.groupEnd();

function alturaIsosceles(lado1,lado2,base){
    if (lado1 === lado2 && lado1 != base){
        const altura =  Math.sqrt(lado1**2 - (base**2)/4);
        return altura;
    }
    else{
        alert("No es un triángulo Isosceles");
    }
}
//Interacción con el form de cuadrado

function calcularPerimetroCuadrado(){
    let inputCuadrado = document.getElementById("inputCuadrado").value;
    let resultado = document.getElementById("resultadoPerimetro");
    const perimetro = perimetroCuadrado(inputCuadrado);
    alert("El perímetro del cuadrado es: " + perimetro + "cm");
    resultado.innerHTML = perimetro;
}
function calcularAreaCuadrado(){
   let inputCuadrado = document.getElementById("inputCuadrado").value;
   let resultado = document.getElementById("resultadoArea");
    const area = areaCuadrado(inputCuadrado)
    alert("El área del cuadrado es: " + area + "cm^2");
    resultado.innerHTML = area;
}

function calcularPerimetroTriangulo(){  
    const input1 = document.getElementById("inputTriangulo").value;
    const input2 = document.getElementById("inputTriangulo1").value;
    const input3 = document.getElementById("inputTriangulo2").value;
    let resultado = document.getElementById("resultadoPerimetroTriangulo");
    const perimetro = perimetroTriangulo(parseInt(input1),parseInt(input2),parseInt(input3));
    resultado.innerHTML = perimetro;
}
function calcularAreaTriangulo(){
    const input3 = document.getElementById("inputTriangulo2").value;
    let alto = document.getElementById("alto").value;
    let resultado = document.getElementById("resultadoAreaTriangulo");
    const area = areaTriangulo(parseInt(input3),parseInt(alto));
    resultado.innerHTML = area;
}
function calcularPerimetroCirculo(){
    let radio = document.getElementById("radio").value;
    let resultado = document.getElementById("resultadoPerimetroCirculo");
    const perimetro = perimetroCirculo(radio);
    resultado.innerHTML = perimetro;
}
function calcularAreaCirculo(){
    let radio = document.getElementById("radio").value;
    let resultado = document.getElementById("resultadoAreaCirculo");
    const area = areaCirculo(radio);
    resultado.innerHTML = area;
}
function calcularAlturaIsosceles(){
    let input1 = document.getElementById("inputTrianguloIso").value;
    let input2 = document.getElementById("inputTrianguloIso1").value;
    let input3 = document.getElementById("inputTrianguloIso2").value;
    let resultado = document.getElementById("resultadoIsosceles");
    const alto = alturaIsosceles(parseInt(input1),parseInt(input2),parseInt(input3))
    resultado.innerHTML = alto;
    console.log(alto);
    
}