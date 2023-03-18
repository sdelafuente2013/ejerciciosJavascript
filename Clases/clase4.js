// // Escribe una función llamada calculadora que acepte tres argumentos: dos
// // números y un string que represente una operación aritmética ('+', '-', '*', '/'). La
// // función debe realizar la operación y devolver el resultado. Si se proporciona
// // una operación no válida, la función debe devolver un mensaje de error.

// function calculadora(n1, n2, operacion){
//     switch (operacion) {
//         case '+':
//             return n1 + n2
//             break;
//         case '-':
//             return n1 - n2
//             break;
//         case '*':
//             return n1 * n2
//             break;
//         case '/':
//             return n1 / n2
//             break;
//         default:
//             console.error('Operacion incorrecta')
//             break;
//     }
// }

// const calculo = (n1, n2, operacion) => {
//     switch (operacion) {
//         case '+':
//             return n1 + n2
//             break;
//         case '-':
//             return n1 - n2
//             break;
//         case '*':
//             return n1 * n2
//             break;
//         case '/':
//             return n1 / n2
//             break;
//         default:
//             console.error('Operacion incorrecta')
//             break;
//     }
// }


// // Contar vocales
// // Escribe una función llamada contarVocales que acepte un string y devuelva
// // la cantidad de vocales (mayúsculas o minúsculas) que contiene. Utiliza un
// // bucle for para recorrer el string y un condicional if para verificar si cada
// // carácter es una vocal.

// // declarando




// function contarVocales(cadena) {
//     let cantidadVocales = 0
//     const vocales = 'aeiouAEIOU'

//     for (let index = 0; index < cadena.length; index++) {
//         if(vocales.includes(cadena[index])){ 
//             cantidadVocales++
//         }        
//     }

//     return cantidadVocales
// }


// // con funcion flecha (Arrow function)
// // declaracion y llamada
// const contarVocales = (cadena) => {
//     let cantidadVocales = 0
//     const vocales = 'aeiouAEIOU'

//     for (let index = 0; index < cadena.length; index++) {
//         if(vocales.includes(cadena[index])){ 
//             cantidadVocales++
//         }        
//     }

//     return cantidadVocales
// }



// function sumar(numero1, numero2, ...cosas) {
//         console.log(numero1)
//         console.log(numero2)
//         console.log(cosas)    
// }



// sumar(1,2,3,1,5,'texto',true, 454, 32, 432,432,432,432,43,24,32)


// const mensaje = function() {  
//     console.log("Este mensaje se muestra después de 3 segundos");
// }
 
// setInterval(mensaje, 3000);


// Crea una función que reciba un texto y lo devuelva al revés
// 'string'

// metodo 1 (con metodos de js)

// 'san' 
// 1) convierto el string en array (para luego invertirlo)
// ['s','a','n']

// 2) lo invierto
// ['n','a','s']

// 3) lo vuelvo a convertir en string
// 'nas'

// function invertirTexto(texto) {
//     return texto.split('').reverse().join('')
// }

// // lo convierte en array, luego lo invierte, y finalmente lo vuelve a convertir en string
// const invertirTextoFlecha = texto => texto.split('').reverse().join('')

// console.log(invertirTextoFlecha('abd'))

// // metodo 2 (manual)


// const ciudad = {
//     nombre: 'Trujillo',
//     poblacion: 1000000,
//     pueblos : []
// }
 
// console.log(ciudad.nombre)
// console.log(ciudad.poblacion)
// console.log(ciudad.pueblos)

// console.log(ciudad['nombre'])
// console.log(ciudad['poblacion'])

// // agregando atributos a mi objecto ciudad
// ciudad.lugares = 'Montañas'
// ciudad.cantidadBancos = 5

// // eliminar un atributo 
// delete ciudad.lugares

// // modificar un atributo 
// ciudad.nombre = 'Perú'
// ciudad.poblacion += 1
// ciudad.cantidadBancos --
// ciudad.pueblos.push('pueblo1')
// ciudad.pueblos.push('pueblo2')
// ciudad.pueblos.push('pueblo3')

// console.log(ciudad)


// let tenista = {
// 	nombre: 'Roger',
//     apellido: 'Federer',
//     edad: 38,
    
//     saludar() {
// 	    return `¡Hola! Me llamo ${this.nombre}`;
//     }
// };

// // modifico el nombre de Roger
// tenista.nombre = 'Manuel'
// tenista.nombre = 'Santiago'

// console.log(tenista.saludar())
// console.log(tenista)


// let factura = {
//     id: 'A2016-156',
//     cliente: 'Nombre del cliente',
//     productos: [
//       {
//         name: 'Bombillas LED',
//         precio: 234,
//       },
//       {
//         name: 'Tornillos inox',
//         precio: 4
//       }
//     ],
//     precioTotal() {
//       console.log('Calculando el total de todos los productos:');
//       let precio = 0;
//       this.productos.forEach( (prod) => {
//          precio += prod.precio
//       })
//       return precio
//     }
// }

// factura.productos.push(      {
//     name: 'Producto3',
//     precio: 100
// })

// console.log(factura.productos[1].name)
// console.log(factura.precioTotal())

// let concesionario = {
//     auto1: { marca: 'Audi', modelo: '73', color: 'rojo', vendido: true },
//     auto2: { marca: 'Ford', modelo: '22', color: 'azul', vendido: false },
// }


// console.log(concesionario.auto2.marca)
// console.log(concesionario.auto1.vendido)


// let persona = {
//     nombre: "Sarah", 
//     pais: "Nigeria", 
//     trabajo: "Desarrollador"
// };

// // let nombrePersonalizado = persona.nombre;
// // let paisFavorito = persona.pais;
// // let trabajoIdeal = persona.trabajo;

// let {nombre, trabajo} = persona;
// // let nombre = persona.nombre
// // let trabajo = persona.trabajo


// console.log(persona.nombre); 
// // console.log(pais); 
// console.log(trabajo); 



// let greet = (nombre, apellido) => console.log(`Welcome to ${nombre} ${apellido}`);

// greet('saantiago', 'de la Fuente')

// let person = {
//     nombre: 'santiago'
// }

// console.log(person.nombre)

// console.log('santiago'.length)


































