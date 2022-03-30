const lista = [
    500,
    120,
    100,
    968,
    10000,
    50

];
console.log("Lista ini: " + lista);
lista.sort(
    (a,b) => a -b
);
const nuevo = lista.filter(function(elemento){
    return elemento > 120;
});
console.log("Lista fin: " + lista);
console.log(nuevo);

const prac = lista.map(function(a){
    return a*2;
})
console.log("nuevo array: " + prac);