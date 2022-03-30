//Helpers
function esPar(numero){
    return (numero % 2 === 0);
};
function calcularMediaAritmetica(lista){ //Creamos una función que recibe como parámetro un array
    const sumaLista = lista.reduce( // creamos una const sumaLista, que llama al array
    //aplica el metodo reduce() que sirve para generar operaciones con los valores que contenga el array
    //se crea una función con parametro de valor acumulado y el nuevo elemento del array
        function (valorAcumulado = 0, nuevoElemento){ 
            return valorAcumulado  + nuevoElemento; // retorna el valor acumulado + el valor del nuevo
        }
    ); // Vuleve a arrancar con cada elemento.
    const promedio = sumaLista / lista.length; // la constante promedio es = a la suma del valor acumulado / tamaño del arreglo

    return promedio; // retorna el valor de promedio
}

// Calculadora de mediana
function calcularMedianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
        
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

// Mediana general 
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
});
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = calcularMedianaSalarios(salariosColSorted)

const spliceStart = (salariosColSorted.length * 90/100);
const spliceCount = salariosColSorted.length - spliceStart;

//Mediana del top 10%

const salariosTop10 = salariosColSorted.splice(spliceStart,spliceCount);
console.log(salariosColSorted);
console.log(salariosTop10);

const medianaTop10Col = calcularMedianaSalarios(salariosTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});