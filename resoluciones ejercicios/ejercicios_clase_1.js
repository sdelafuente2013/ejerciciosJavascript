// 1) --------------------------------------------------------------
let edad;
let peso;

console.log(edad);
console.log(peso);

// 2) --------------------------------------------------------------
edad = 25;
peso = 70;

console.log(edad);
console.log(peso);


// 3) --------------------------------------------------------------
const saludo = 'Hola Mundo!';
console.log(saludo);


// 4) --------------------------------------------------------------
let numeroA = 30;
let numeroB = 45;
let auxiliar = numeroA; // Almacenamos el valor de numeroA en la variable auxiliar

numeroA = numeroB; // Asignamos el valor de numeroB a numeroA
numeroB = auxiliar; // Asignamos el valor de la variable auxiliar (que contiene el valor original de numeroA) a numeroB

console.log(numeroA); // Devuelve: 45
console.log(numeroB); // Devuelve: 30


// 5) --------------------------------------------------------------
const meGustaElHelado = true;
console.log(meGustaElHelado);


// 6)--------------------------------------------------------------
let suma = 5 + 10;
let resta = 20 - 5;
let multiplicacion = 4 * 7;
let comparacion1 = 2 > 1;
let comparacion2 = 1 > 1;


// 7)--------------------------------------------------------------
let edadUser = prompt("Por favor, ingresá tu edad:");
alert("Gracias por tu respuesta");

console.log("Necesito utilizar variables para procesar tu edad");



// 8)--------------------------------------------------------------
const euros = 7; // Valor en euros que queremos convertir
const tipoDeCambio = 2; // Valor de cambio: 1 euro = 2 dólares

const dolares = euros * tipoDeCambio; // Convertimos euros a dólares

console.log(euros + " euros equivalen a " + dolares + " dólares"); // Mostramos el resultado en la consola



// 9)--------------------------------------------------------------
const precio = 100; // Precio del artículo sin IVA
const iva = 0.21; // Porcentaje del impuesto (21%)

const precioConIVA = precio + (precio * iva); // Calculamos el precio con IVA

console.log("El precio del artículo con IVA es: " + precioConIVA); // Mostramos el resultado en la consola



// 10)--------------------------------------------------------------
const nombre = 'Juan';
const material = 'Madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea muy bonita, pero de una belleza extraña, indómita.';

const mensaje = nombre + ' ha pedido una caja de ' + material + ' con unas dimensiones ' + dimensiones + '. ' + comentario;

console.log(mensaje);


// 11)--------------------------------------------------------------
let num1 = 23;
let num2 = 15;
let num3 = 3;
let num4 = 2;
let num5 = 10;

let resultado = num1 + (num2 * (num3 / num4)) - num5;

console.log("El resultado es: " + resultado);

resultado -= 5;

console.log("El resultado después de restar 5 es: " + resultado);

resultado--;

console.log("El resultado después de decrementar en uno es: " + resultado);

// 12)--------------------------------------------------------------
let enero = 1;
let febrero = 2;
let marzo = 3;
let abril = 4;
let mayo = 5;
let junio = 6;
let julio = 7;
let agosto = 8;
let septiembre = 9;
let octubre = 10;
let noviembre = 11;
let diciembre = 12;

console.log(enero > diciembre);
console.log(junio < julio);
