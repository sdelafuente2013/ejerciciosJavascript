// 1) --------------------------------------------------------------
var abuelos = ["Abuelo", "Abuela"];
var padres = [];
padres.push("Padre");
padres.push("Madre");
var hijos = ["Hijo1", "Hijo2"];
var nietos = [];
nietos.push("Nieto1");
nietos.push("Nieto2");

console.log("Cantidad de abuelos:", abuelos.length);
console.log("Cantidad de padres:", padres.length);
console.log("Cantidad de hijos:", hijos.length);
console.log("Cantidad de nietos:", nietos.length);

console.log("Primer abuelo:", abuelos[0]);
console.log("Primer padre:", padres[0]);
console.log("Primer hijo:", hijos[0]);
console.log("Primer nieto:", nietos[0]);


// 2) --------------------------------------------------------------
var palabras = prompt("Ingrese un array de palabras separadas por comas:");
palabras = palabras.split(",");
console.log("Primera palabra:", palabras[0]);


// 3) --------------------------------------------------------------
var colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
var color = prompt("Ingrese un color:");
if (colores.includes(color)) {
  console.log("El color", color, "se encuentra en el array.");
} else {
  console.log("El color", color, "no se encuentra en el array.");
}


// 4) --------------------------------------------------------------
var numeros = [];

numeros.push(parseInt(prompt("Ingrese un número:")));
numeros.push(parseInt(prompt("Ingrese un número:")));
numeros.push(parseInt(prompt("Ingrese un número:")));
numeros.push(parseInt(prompt("Ingrese un número:")));
numeros.push(parseInt(prompt("Ingrese un número:")));

console.log("Array completo:", numeros);
console.log("Suma de los números:", numeros.reduce((a, b) => a + b, 0));


// 5) --------------------------------------------------------------
var numeros = [];

numeros.push(Math.floor(Math.random() * 100));
numeros.push(Math.floor(Math.random() * 100));
numeros.push(Math.floor(Math.random() * 100));
numeros.push(Math.floor(Math.random() * 100));
numeros.push(Math.floor(Math.random() * 100));
numeros.push(Math.floor(Math.random() * 100));
numeros.push(Math.floor(Math.random() * 100));
numeros.push(Math.floor(Math.random() * 100));
numeros.push(Math.floor(Math.random() * 100));
numeros.push(Math.floor(Math.random() * 100));

console.log("Array sin ordenar:", numeros);
numeros.sort(function(a, b){return a-b});
console.log("Array ordenado:", numeros);



// 6)--------------------------------------------------------------
var numeros = prompt("Ingrese un array de números separados por comas:");
numeros = numeros.split(",");

console.log("Números impares:");
numeros.filter(n => n % 2 != 0).forEach(n => console.log(n));



// 7)--------------------------------------------------------------
var palabras = prompt("Ingrese un array de palabras separadas por comas:");
palabras = palabras.split(",");

console.log("Palabras que contienen la letra 'a':");
palabras.filter(p => p.includes("a")).forEach(p => console.log(p));



// 8)--------------------------------------------------------------
var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];

var newArray = [...array1, ...array2];
console.log(newArray);



// 9)--------------------------------------------------------------
var palabras = prompt("Ingrese un array de palabras separadas por comas:");
palabras = palabras.split(",");

console.log("Array ordenado alfabéticamente:", palabras.sort());
