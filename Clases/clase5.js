// // 10.Imaginemos que tenemos los siguientes campos en un formulario: nombre,
// // email y comentarios. Mediante la siguientes declaraciones:
// // a. El campo de email debe ser una dirección de email válida. Se
// // considera válida si contiene un ‘@’
// // b. El texto introducido en el campo de comentarios no debe exceder los
// // 50 caracteres.
// // c. El password debe tener una longitud mínima de 6 caracteres, y
// // contener al menos una letra minúscula, una letra mayúscula y un
// // dígito.
// // d. Realizar una función para cada campo y valide según indica.

// const validateEmail = email => email.includes('@') ? 'Email válido' : 'Email inválido'

// console.log(validateEmail('santiago@algo.com'))
// console.log(validateEmail('santiagoalgo.com'))
// console.log(validateEmail('santiagoalgo@com'))

// const validateComments = comments => comments.length <= 50 ? 'Comentarios válidos' : 'Comentarios inválidos'

// console.log(validateComments('Lorem ipsum dolor sit amet consectetur adipisicing elit.'))
// console.log(validateComments('Lorem ipsum dolor sit amet consectetur adipisic)'))

// const validatePassword = password => {
//     const regexValidatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/

//     return regexValidatePassword.test(password) ? 'Password válido' : 'Password inválido'
// }

// console.log(validatePassword('Santiago123'))
// console.log(validatePassword('santiago123'))

// // un email es valido si tiene un @, tiene que tener un dominio y un usuario, tambien un punto
// // regex para validar email
// // const regexValidateEmail = /\S+@\S+\.\S+/
// // console.log(regexValidateEmail.test('santiago@algo.com'))



// // console.log('santiago'.includes('s')) // funciona con string
// // console.log([1,2,3].includes(1)) // funciona con arrays


// // CSS (notacion de -)

// // background-color
// // font-size
// // border-radius
// // border-color
// // border-width
// // border-style

// // JS (camelCase)

// // backgroundColor
// // fontSize
// // borderRadius
// // borderColor
// // borderWidth
// // borderStyle

// // 1) capturamos el elemento
// const clases = document.querySelectorAll('.clasePrueba li')

// // 2) modificamos el elemento (le podemos cambiar la clase, agregar estilos, agregar texto, etc)
// clases[2].style.backgroundColor = 'blue'

// // 3) pintamos los impares de color rojo
// for (let i = 0; i < clases.length; i++) {
//     if (i % 2 === 0) {
//         clases[i].style.backgroundColor = 'green'
//         clases[i].style.color = 'white'
//         clases[i].style.fontSize = '30px'
//     } 
// }

// const botonAplicarEstilos = document.querySelector('#btn1');
// const botonResetEstilos = document.querySelector('#btn2');

// //donde               que evento
// botonAplicarEstilos.addEventListener('click', () => {
//     const clases = document.querySelectorAll('.clasePrueba li')

//     for (let i = 0; i < clases.length; i++) {
//         if (i % 2 === 0) {
//             clases[i].style.backgroundColor = 'green'
//             clases[i].style.color = 'white'
//             clases[i].style.fontSize = '30px'
//         } 
//     }
// });

// botonResetEstilos.addEventListener('mouseover', () => {
//     const clases = document.querySelectorAll('.clasePrueba li')

//     for (let i = 0; i < clases.length; i++) {
//         clases[i].style.backgroundColor = 'white'
//         clases[i].style.color = 'black'
//         clases[i].style.fontSize = '16px'
//     }
// });

// 1) capturamos todos los elementos
// const clases = document.querySelectorAll('.clasePrueba li')

// // 2) le agregamos un evento a cada elemento
// for (let i = 0; i < clases.length; i++) {
//     clases[i].addEventListener('click', () => {
//         // clases[i].style.backgroundColor = 'blue'
//         // clases[i].style.color = 'white'
//         console.log(clases[i].classList)

//         if (clases[i].classList.contains('colorRed')) {
//             // clases[i].classList.remove('colorRed')
//             // clases[i].classList.add('colorBlue')
//         }

//         // 1) Mirar que propiedad de css tiene el elemento
//         // 2) Evaluar si esta en rojo, parasarla a azul
//         // 3) Evaluar si esta en azul, pasarla a rojo


//         // clases[i].classList.toggle('colorBlue')
//         // clases[i].classList.toggle('colorRed')

//     })
// }

// clases[0].addEventListener('click', () => {
//     clases[0].style.backgroundColor = 'blue'
//     clases[0].style.color = 'white'
// })

// clases[1].addEventListener('click', () => {
//     clases[1].style.backgroundColor = 'blue'
//     clases[1].style.color = 'white'

// })



// window.addEventListener('keypress', e => {
// 	console.log(e);
//     // alert(e.key);
// });


// document.querySelector('h1').addEventListener('click', () => {
//     // console.log(event)
//     // event.preventDefault() //descativa el comportamiento por defecto del elemento
//     console.log(this);
//     // acciones:
//     // alert("hola mundo")
// })


// [1,2,3,45,6,5].sort((a,b) => a - b)

// // const funcionnormal = (e) => e.preventDefault()

// 'santiago'.includes('s')

// ['s','l','a','n','t','i','a','g','o'].slice(0, 3)


const input = document.querySelector('input');
// const mainTitle = document.querySelector('h1');

// evento al cambiar el valor del input

// input.addEventListener('change', (e) => {
//     // console.log(e)
//     console.log(e.target.value)
    
//     if (e.target.value === 'santiago') {
//         alert('hola santiago')
//     }

//     // mirar el value del input
//     // si el value es igual a 'santiago' => alert('hola santiago')

//     // if (e.target.value === 'santiago') {
// 	// console.log(this.value);
// });


// mainTitle.addEventListener('mouseover', () => {
// 	console.log(this);	
// });


// opcion 1
// DOMContentLoaded => se dispara cuando el DOM esta listo

'use strict'

window.addEventListener('DOMContentLoaded', () => {
    // ....
})

// event change input
input.addEventListener('change', (e) => {
    console.log(e.target.value)
})