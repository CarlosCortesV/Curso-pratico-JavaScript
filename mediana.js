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
const compareNumbers = (a, b) => a - b;
const lista = [
    100,
    200,
    500,
    100,
    40000000,
];
lista.sort(compareNumbers);
//Reto 1: Crear una función para todo el proceso.
function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2);
    function Par(numero){
        if (numero % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }
    let mediana; 
    
    if (Par(lista.length)){
        const element1 = lista[mitadLista - 1];
        const element2 = lista[mitadLista];
        const promedioElement1and2 = calcularMediaAritmetica([element1,element2]);
        return mediana = promedioElement1and2;
    }
    else{
       return mediana = lista[mitadLista]
    }
}
console.log(calcularMediana(lista));
//Reto 2
//Ordenar el array

