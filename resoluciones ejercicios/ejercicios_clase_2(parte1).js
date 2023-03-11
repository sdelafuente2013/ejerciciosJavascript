// 1) --------------------------------------------------------------
var salir = confirm("¿Vas a salir de tu casa?");
if (salir) {
    alert("Chequeá el pronóstico del tiempo antes de salir");
} else {
    alert("Que bueno que te quedes. Va a llover mucho hoy.");
}

// 2) --------------------------------------------------------------
var nombre = prompt("Ingrese su nombre:");
console.log("Nombre:", nombre);

var edad = prompt("Ingrese su edad:");
console.log("Edad:", edad);

var fanDeportes = confirm("¿Le gustan los deportes?");
console.log("¿Le gustan los deportes?:", fanDeportes);

alert("Muchas gracias " + nombre + " por responder nuestras preguntas.");


// 3) --------------------------------------------------------------
var num = Math.floor(Math.random() * 20) + 1;
var esPar = num % 2 == 0 ? true : false;
console.log(esPar, num);


// 4) --------------------------------------------------------------
var num = prompt("Ingrese un número del 1 al 7:");
var dia = "";
switch (num) {
  case "1":
    dia = "Lunes";
    break;
  case "2":
    dia = "Martes";
    break;
  case "3":
    dia = "Miércoles";
    break;
  case "4":
    dia = "Jueves";
    break;
  case "5":
    dia = "Viernes";
    break;
  case "6":
    dia = "Sábado";
    break;
  case "7":
    dia = "Domingo";
    break;
  default:
    dia = "El número ingresado no es válido";
}
console.log(dia);


// 5) --------------------------------------------------------------
var num1 = parseInt(prompt("Ingrese el primer número:"));
var num2 = parseInt(prompt("Ingrese el segundo número:"));
var num3 = parseInt(prompt("Ingrese el tercer número:"));

var suma = 0;
if (num1 >= num2 && num1 >= num3) {
  suma = num1;
  if (num2 >= num3) {
    suma += num2;
  } else {
    suma += num3;
  }
} else if (num2 >= num1 && num2 >= num3) {
  suma = num2;
  if (num1 >= num3) {
    suma += num1;
  } else {
    suma += num3;
  }
} else {
  suma = num3;
  if (num1 >= num2) {
    suma += num1;
} else {
  suma += num2;
}
}

console.log("La suma de los dos mayores es:", suma);


// 6)--------------------------------------------------------------
var num1 = parseInt(prompt("Ingrese el primer número (1-10):"));
var num2 = parseInt(prompt("Ingrese el segundo número (1-10):"));
var num3 = parseInt(prompt("Ingrese el tercer número (1-10):"));

var promedio = (num1 + num2 + num3) / 3;
var esMayor = promedio > 5 ? true : false;
console.log(esMayor, promedio);


// 7)--------------------------------------------------------------
var anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
var fechaActual = new Date();
var anioActual = fechaActual.getFullYear();
var edad = anioActual - anioNacimiento;
console.log("Su edad actual es:", edad);


// 8)--------------------------------------------------------------
var edad = parseInt(prompt("Ingrese su edad:"));
var genero = prompt("Ingrese su género (masculino/femenino):");

var descuento = 0;
if (edad >= 18) {
  if (genero == "femenino") {
    descuento = 15;
  } else {
    descuento = 10;
  }
}

console.log("Usted tiene un descuento del", descuento + "%");


// 9)--------------------------------------------------------------
var nombre = prompt("Ingrese su nombre:");
var edad = parseInt(prompt("Ingrese su edad:"));

var esMayor = edad >= 18 ? true : false;
var tieneCincoLetras = nombre.length > 5 ? true : false;

console.log("¿Es mayor de edad?:", esMayor);
console.log("¿Su nombre tiene más de 5 letras?:", tieneCincoLetras);


// 10)--------------------------------------------------------------
var calificacion = parseInt(prompt("Ingrese su calificación (0-10):"));

if (calificacion >= 0 && calificacion <= 2) {
  console.log("Insuficiente");
} else if (calificacion >= 3 && calificacion <= 6) {
  console.log("Suficiente");
} else if (calificacion >= 7 && calificacion <= 9) {
  console.log("Bien");
} else if (calificacion == 10) {
  console.log("Excelente");
} else {
  console.log("La calificación ingresada no es válida");
}
