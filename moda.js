const lista = [ //Creamos un arreglo con los valores 
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];



function calcularModa(lista){
    const listaCount = {}; //Creamos un objeto para almacenar la cantidad de veces de ciertos números

lista.map( //Metodo map para crear un nuevo arreglo a parir de original, osea a partir de numero, un arreglo con la cantidad de repeticiones
    function(elemento){ // Parametro elemento 
    if(listaCount[elemento]){ // Si la lista encuentra el elemento
        listaCount[elemento] += 1; // entonces sumar al elemento del array en el objeto account 1, en el nuevo array de cantidad
    } else{
        listaCount[elemento] = 1; // Si no entonces elemento solo esta 1 vez
    }
    
});
console.log("Listas: " + lista);
console.log("Objeto: " + listaCount);

const listaArray = Object.entries(listaCount).sort( // Tranformar nuevos objeto listCount en un array listaArray
    function (elementoA, elementoB){ //Saber el más grande
        return elementoA[1] - elementoB[1]; // Si valor acumulado es mayor que nuevo valor es +1
                                    //Si son iguales el nuevo valor es 0
                                    //Si nuevoValor es mayor que valorAcumulado entonces es -1

    }
);
const moda = listaArray[listaArray.length - 1][0]
console.log("Lista: " + listaArray);
console.log("Moda: " + moda);
console.log("Cantidad: " + listaArray[listaArray.length - 1][1]);
}
console.log(calcularModa(lista));