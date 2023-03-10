'use strict'

// Template literals 

let nombre = 'santiago';
let apellido = 'de la Fuente';

console.log("Bienvenido " + nombre + ' ' + apellido + ' al curso de Javascipt');


// recomendacion: 
console.log(`Bienvenido ${nombre} ${apellido} al curso de Javascript`)

const titulo = `<h1> Hola ${nombre} !! </h1>`

document.write(titulo)


let nameUser = prompt('¿Cual es tu nombre?');
let respuestaUser = confirm(`¿${nameUser} esta seguro que desea continuar?`) // Ok-> true, Cancel-> false

// Operadores compuestos 

let numeroUno = 10;

// sin operador compuesto
numeroUno = numeroUno + 10;

// con operador compuesto
numeroUno += 10;
numeroUno -= 10;
numeroUno *= 10;
numeroUno /= 10;

// numeroUno += 1; 
numeroUno ++;
numeroUno += 2;
numeroUno += 3;
numeroUno += 4;

// numeroUno -= 1;
numeroUno --;


