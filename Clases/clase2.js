// // Dentro del archivo js, mediante un prompt solicitá al usuario que ingrese su nombre. Guarda la respuesta en un variable llamada “nombre”. Imprimí el nombre del usuario en la consola.
// let nombreUser = prompt('¿Cual es su nombre?');
// console.log(nombreUser)

// // Mediante otro prompt solicitá al usuario que ingrese su edad. Guarda la respuesta en una variable llamada “edad”. Imprimí la edad del usuario en la consola.
// let edadUser = parseInt(prompt('¿Cual es su edad?'));
// console.log(edadUser)

// // Mediante un confirm preguntale al usuario si le gustan los deportes. Guarda la respuesta en un variable llamada “fanDeportes”. Imprimí el valor por consola.
// let fanDeportes = confirm('¿Te gustan los deportes?');
// console.log(fanDeportes)

// // Mediante un alert se tendrá que mostrar la leyenda “Muchas gracias Nombre por responder nuestras preguntas”. En el mensaje deberá figurar el nombre del usuario guardado en la variable “nombre”.
// alert(`Muchas gracias ${nombreUser} por responder nuestras preguntas.`)



// let edad = parseInt(prompt('¿Cual es su edad?'));;
// let acceso = '';

// if (edad < 13) {
//   acceso = 'prohibido';
// } else if (edad >= 13 && edad <= 16) {
//   acceso = 'permitido sólo acompañado de un mayor';
// } else {
//   acceso = 'permitido';
// }


// alert(acceso)


// Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera:
// Insuficiente si tiene de 0 a 2	
// Suficiente de 3 a 6
// Bien de 7 a 9
// Excelente 10

// let calificacion = Number(prompt("¿Cual es su calificacion? (0 a 10)"));
// if (calificacion >= 0 && calificacion <= 2){
//     alert('Insuficiente');
// }else if(calificacion > 2 && calificacion <= 6){
//     alert('Suficiente');
// }else if(calificacion > 7 && calificacion <= 9){
//     alert('Bien');
// }else if(calificacion === 10){
//     alert('Excelente');
// }else{
//     alert("Has introducido un numero fuera del rango 0 a 10");
// }

// let mes = Number(prompt("¿Cual es su mes?"));

// switch (mes) {
//     case 1:
//         alert ("El mes es enero");
//         break;
//     case 2:
//         alert ("El mes es febrero"); 
//         break;
//     case 3:
//         alert("El mes es marzo");
//         break;
//     case 10: 
//         alert ("El mes es octubre"); 
//         break;
//     default: 
//         alert ("El mes no es enero, febrero ni octubre"); 
//         break;
// }
    
// let mesName = prompt("¿Cual es su mes?");
// mesName = mesName.toLowerCase();

// switch (mesName) {
//     case 'enero':
//         alert ("El numero del mes es 1");
//         break;
//     case 'febrero':
//         alert ("El numero del mes es 2"); 
//         break;
//     case 'marzo':
//         alert("El numero del mes es 3");
//         break;
//     case 'octubre': 
//         alert ("El numero del mes es 10"); 
//         break;
//     default: 
//         alert ("El mes no es enero, febrero ni octubre"); 
//         break;
// }
    



// Math.floor -> te redondea el numero hacia abajo
// Math.round -> te redondea el numero hacia arriba si pasa el .50, ejemplo: 3.55 -> 4, 3.25 -> 3, 5.49 -> 5, 5.87 -> 6
// Math.floor(3.99)
// 3
// Math.round(3.99)



// Crear un número aleatorio entre el 1 y 20, si es par mostrar true seguido el número si es impar mostrar false seguido del número, utilizar el operador ternario.

// // Generando el numero aleartorio
// const numeroAleartorio = Math.floor(Math.random() * (20 - 0));

// // Mostrar true si el numero es par, false si es impar
// const resultadoNumero = numeroAleartorio % 2 === 0 ? true : false;

// // mostrar resultado
// console.log(resultadoNumero + ' ' + numeroAleartorio)




// // Array 

// let nombres = ['santiago', 'alberto', 'irene', 'jose', 'parvin', 'jose leon', 'rodrigo']
// nombres.forEach(nombre => console.log('Hola ' + nombre)); 



// // console.log(nombres)
// // console.log(nombres[2]) //irene
// // console.log(nombres[4]) //parvin

// // console.log(nombres.length) // 7

// nombres[0] = 'nahuel'
// nombres[7] = 'otro nombre'

// // console.log(nombres)

// let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];

// // console.log(`La edad de Sara es de ${studentsData[1][1]} años`)
// // console.log(`El nombre del tercer alumno es ${studentsData[2][0]}`)


// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)

// fruits.push('Piña');
// fruits.push('Frutilla');
// fruits.push('Kiwi');

// console.log(fruits)

// fruits.pop()
// fruits.pop()

// // console.log(fruits)

// let myArray = [10, 20, 30];
// let newArray = myArray.map(number => number + 10); 
// console.log(newArray);// [20, 30, 40]

// let nombresConSaludo = nombres.map(nombre => 'Hola ' + nombre ); 
// console.log(nombresConSaludo);



// let paises = ['Argentina', 'Holanda', 'Alemania'];
// let numeros = [1,2,3,4,5,6]
// let selected = numeros.filter(number => number > 10) // o pais.includes('España');

// console.log(selected)

// Spred Operator

// let arrayUno = [1,2,3]
// let arrayDos = [3,4,5]

// // merge o fusion array dos o mas array
// let resultado = [ ...arrayUno, ...arrayDos ];
// console.log(resultado)

// // Clonando el 'arrayUno'
// let copiaArrayUno = [ ...arrayUno ]
// console.log(copiaArrayUno)



// Juan tiene N dólares, David tiene la mitad de lo que posee Juan y José la mitad de lo que poseen Juan y David juntos. Mostrar el promedio de la cantidad de dinero que tienen entre los tres y redondearlo
// Si el promedio es mayor a 10, mostrar el mensaje: 'Excelente', sino, mostrar: 'Juan tiene que ganar mas dolares'

// const juan = 10
// const david = juan / 2 
// const jose = (juan + david) / 2 

// let nombres = [ ['juan', juan], ['david', david], ['jose', jose] ]

// const average = (juan + david + jose) / 3
// const roundedAvergae = Math.floor(average)

// //       condicion  ?                                 (true)              :                      (false)
// (roundedAvergae > 10) && (roundedAvergae < 50) ? console.log('Excelente') : console.log('Juan tiene que ganar mas dolares')

// console.log('El promedio de la cantidad de dinero que tinen entre los tres es: ' + roundedAvergae)


// let numero1 = 10;
// let numero2 = 20;
// console.log(numero1 + numero2)

// console.log(numero1 + 1515)

// let nombres = ['santiago', 'jose', 'alberto']

// console.log(nombres[2])
