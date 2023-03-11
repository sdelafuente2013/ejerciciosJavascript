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

let numeroUnoo = 10;

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


// variables
let nombreVariable = 'santiago';

nombreVariable = 'jose';

const nombreVaDos = 'de la Fuente'; // no puedo cambiar el valor

// Tipos de datos
// number
12 
1
10
120.51

// boolean
true 
false

// string
"esto es una cadena"
'esto tambien es una cadena'

// NaN
'hola' / 2

// Undefined
let casa;
const apellidoo = 'de la fuente';

// null
let alumno = null;
const profesor = null;

// Operadores

let numeroUno = 10;
let numeroDos = 50;

let resultado = numeroUno + numeroDos;
resultado = numeroUno - numeroDos;
resultado = numeroUno * numeroDos;
resultado = numeroUno / numeroDos;

// comparacion (me da un valor booleano)
numeroUno === numeroDos 
numeroUno !== numeroDos 

numeroUno >= numeroDos
numeroUno <= numeroDos
