// // // // Genera un array de números aleatorios, ordenarlos de ascendente y
// // // // mostrarlo por consola.

// // // let arrayNumerosAleartorios = []

// // // // generamos los 5 numeros aleartorios
// // // let primerNumero = parseInt(Math.random() * (100 - 0));
// // // let segundoNumero = parseInt(Math.random() * (100 - 0));
// // // let tercerNumero = parseInt(Math.random() * (100 - 0));
// // // let cuartoNumero = parseInt(Math.random() * (100 - 0));
// // // let quintoNumero = parseInt(Math.random() * (100 - 0));

// // // arrayNumerosAleartorios.push(primerNumero)
// // // arrayNumerosAleartorios.push(segundoNumero)
// // // arrayNumerosAleartorios.push(tercerNumero)
// // // arrayNumerosAleartorios.push(cuartoNumero)
// // // arrayNumerosAleartorios.push(quintoNumero)

// // // console.log(arrayNumerosAleartorios)

// // // // ordenamiento con numeros
// // // console.log(arrayNumerosAleartorios.sort((a, b) => a - b))

// // // 90% van utilizar funciones definidas por Javascript
// // // consejo: [1,2,3,4,5] -> .sum()



// // // Ejercicio 1: Calculadora de IMC (índice de masa corporal)
// // // El objetivo de este ejercicio es calcular el índice de masa corporal (IMC) de una persona utilizando su peso y altura, y luego determinar la categoría de IMC correspondiente (Bajo peso, Normal, Sobrepeso u Obesidad). Para calcular el IMC, se debe utilizar la siguiente fórmula:
// // // IMC = peso (kg) / (altura (cm) × altura (cm))
// // // Determinar la categoría de IMC correspondiente con los siguientes rangos:
// // // Bajo peso: IMC < 18.5
// // // Normal: 18.5 <= IMC < 24.9
// // // Sobrepeso: 24.9 <= IMC < 29.9
// // // Obesidad: IMC >= 29.9
// // // Por último, se mostrará el IMC calculado y la categoría por consola.


// // let peso = parseInt(prompt('Ingrese su peso(kg):'))
// // let altura = parseFloat(prompt('Ingrese su altura en (cm):'))

// // // 1.59 -> '159' -> 159 
// // // 159

// // let imc = peso / (altura * altura)

// // console.log(imc)

// // switch (true) {
// //     case (imc < 18.5):
// //         console.log(imc + '- Bajo peso')
// //         break;
// //     case (imc >= 18.5 && imc < 24.9):
// //         console.log(imc + '- Normal')
// //         break;
// //     case (imc >= 24.9 && imc < 29.9):
// //         console.log(imc + '- Sobrepeso')
// //         break;
// //     default:
// //         console.log(imc + '- Obesidad')
// //         break;
// // }


// // let comidasFavoritas = ['Milanesa', 'Ravioles', 'Asado'];

// // // opcion con for
// // for(let i=0; i<3; i++){
// // 	console.log(comidasFavoritas[i]);
// // }

// // // opcion con foreach
// // comidasFavoritas.forEach(comida => console.log(comida))


// // // opcion con for..of
// // for (let i of arr) {
// //     console.log(i);
// // }

// // buenas practicas: es utilizar siempre const sobre let 



// let got = [
//     {
//     nombre: "Jon",
//     apellido: "Snow",
//     edad: 23,
//     ciudad: "Winterfell"
//     },
//     {
//     nombre: "Daenerys",
//     apellido: "Targaryen",
//     edad: 19
//     },
//     {
//     nombre: "Arya",
//     apellido: "Stark",
//     edad: 12,
//     ciudad: "Winterfell"
//     },
//     {
//     nombre: "Tyrion",
//     apellido: "Lannister",
//     edad: 32,
//     ciudad: "Casterly Rock"
//     }
// ]

// for (const i of got) {
//     console.log(`Hola ${i.nombre} ${i.apellido} criatura viajera`);
//     console.log(`Hola ${i.nombre} ${i.apellido} de la ciudad ${i.ciudad}`);
// }





// El objetivo de este ejercicio es manipular una lista de tareas utilizando arrays. Primero, se creará una lista inicial de tareas utilizando un array. Luego, se agregará una tarea nueva a la lista utilizando el método push. Después, se eliminará una tarea de la lista utilizando el método splice. Por último, se clonará la lista de tareas utilizando el operador Spread (...). Los resultados se mostrarán en la consola del navegador en cada paso del proceso.

function crearListaTareas() {
    return ['Lavar ropa', 'Hacer la compra', 'Estudiar', 'Hacer ejercicio']    
}

function agregarTarea(tareas, nuevaTarea) {
    tareas.push(nuevaTarea)
}

function eliminarTarea(tareas, indiceAEliminarTarea) {
    tareas.splice(indiceAEliminarTarea, 1)    
}

function clonarTareas(tareas) {
    return [...tareas]
}

let listaTareas = crearListaTareas()
console.log(listaTareas)

agregarTarea(listaTareas, 'Jugar a las consolas')
console.log(listaTareas)

eliminarTarea(listaTareas, 0)
console.log(listaTareas)

let clonDeTareas = clonarTareas(listaTareas)
console.log(clonDeTareas)