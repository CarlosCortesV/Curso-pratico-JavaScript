//La media geométrica es un promedio util para un conjuto de números que se interpretan en orden

//

const datos = [
    1,
    2,
    3,
    4,
    5,
    9
];
function calcularMediaGeometrica(datos){
    const multi =  datos.reduce(function(a,b){
        return a * b;
    });
    if (multi <=0){
        return "No se admiten números negativos";
    }
    else{
        const resultado = multi ** (1/datos.length);
        return resultado;
    }
   
}
console.log(calcularMediaGeometrica(datos));
  
// const sumaLista = lista.reduce( // creamos una const sumaLista, que llama al array
//     //aplica el metodo reduce() que sirve para generar operaciones con los valores que contenga el array
//     //se crea una función con parametro de valor acumulado y el nuevo elemento del array
//         function (valorAcumulado = 0, nuevoElemento){ 
//             return valorAcumulado  + nuevoElemento; // retorna el valor acumulado + el valor del nuevo
//         }
//     ); // Vuleve a arrancar con cada elemento.
//     const promedio = sumaLista / lista.length; // la constante promedio es = a la suma del valor acumulado / tamaño del arreglo
//     console.log(promedio);
//     console.log("Suma lista: " + sumaLista);