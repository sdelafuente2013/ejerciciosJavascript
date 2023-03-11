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
    
let mesName = prompt("¿Cual es su mes?");
mesName = mesName.toLowerCase();

switch (mesName) {
    case 'enero':
        alert ("El numero del mes es 1");
        break;
    case 'febrero':
        alert ("El numero del mes es 2"); 
        break;
    case 'marzo':
        alert("El numero del mes es 3");
        break;
    case 'octubre': 
        alert ("El numero del mes es 10"); 
        break;
    default: 
        alert ("El mes no es enero, febrero ni octubre"); 
        break;
}
    

let numeroAleartorio = Math.floor(Math.random() * (10 - 0))


// Math.floor -> te redondea el numero hacia abajo
// Math.round -> te redondea el numero hacia arriba si pasa el .50, ejemplo: 3.55 -> 4, 3.25 -> 3, 5.49 -> 5, 5.87 -> 6
// Math.floor(3.99)
// 3
// Math.round(3.99)
