function calcularMediaAritmetica(lista){ //Creamos una función que recibe como parámetro un array
    // let sumaLista = 0;
    // for(let i = 0; i<lista.length; i++){
    //     console.log(lista[i]);
    //     sumaLista = sumaLista + lista[i];
    // }

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