//Programa con array para encontrar cualquier elemento por letra o número
//Una especie de buscador
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ba')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']