// 1) --------------------------------------------------------------
const rectangulo = (altura, ancho) => altura * ancho;
console.log(rectangulo(10, 20)); // Devuelve 200

const triangulo = (base, altura) => (base * altura) / 2;
console.log(triangulo(10, 20)); // Devuelve 100

const largoDelArray = (array) => array.length;
console.log(largoDelArray([1, 2, 3, 4, 5])); // Devuelve 5

const cantidadDeLetras = (palabra) => palabra.length;
console.log(cantidadDeLetras("JavaScript")); // Devuelve 10

const dolarHoy = (precioEnEuros) => precioEnEuros * 1.17;
console.log(dolarHoy(100)); // Devuelve 117

const precioFinal = (precio) => precio * 1.21;
console.log(precioFinal(100)); // Devuelve 121

const mitad = (numero) => numero / 2;
console.log(mitad(10)); // Devuelve 5

const diaSegunNumero = (array, numero) => array[numero - 1];
const diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
console.log(diaSegunNumero(diasDeLaSemana, 3)); // Devuelve "Miércoles"


// 2) --------------------------------------------------------------
const calculadora = (num1, num2, operacion) => {
    switch (operacion) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Operación no válida";
    }
  };
  
console.log(calculadora(10, 5, "+")); // Devuelve 15
console.log(calculadora(10, 5, "-")); // Devuelve 5
console.log(calculadora(10, 5, "*")); // Devuelve 50
console.log(calculadora(10, 5, "/")); // Devuelve 2
console.log(calculadora(10, 5, "%")); // Devuelve "Operación no válida"
  

// 3) --------------------------------------------------------------
const sumar = (num1, num2) => num1 + num2;
const multiplicar = (num1, num2) => num1 * num2;
const restar = (num1, num2) => num1 - num2;
const dividir = (num1, num2) => num1 / num2;

console.log(sumar(10, 5)); // Devuelve 15
console.log(multiplicar(10, 5)); // Devuelve 50
console.log(restar(10, 5)); // Devuelve 5


// 4) --------------------------------------------------------------
const obtenerLetraDNI = dni => {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letra = letras.charAt(dni % 23);
    
    return letra;
}
  
console.log(obtenerLetraDNI(12345678)); // Devuelve 'Z'
  


// 5) --------------------------------------------------------------
const textoAlReves = texto => {
    const textoReverso = texto.split('').reverse().join('');
    
    return textoReverso;
}
  
console.log(textoAlReves('Hola mundo')); // Devuelve 'odnum aloH'
  

// 6)--------------------------------------------------------------
const numeroAleatorio = (min = 1, max = 100) => {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numero;
  }
  
console.log(numeroAleatorio()); // Genera un número aleatorio entre 1 y 100
console.log(numeroAleatorio(10, 20)); // Genera un número aleatorio entre 10 y 20
  


// 7)--------------------------------------------------------------
const numerosAleatorios = () => {
    const numeros = new Set();
    
    while(numeros.size < 100) {
      const numero = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      numeros.add(numero);
    }

    numeros.forEach(numero => console.log(numero));
}

numerosAleatorios();
  


// 8)--------------------------------------------------------------
const determinarSigno = numero => {
    if(numero > 0) {
      return "El número es positivo";
    } else if(numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es nulo";
    }
}

console.log(determinarSigno(20))
console.log(determinarSigno(-20))
console.log(determinarSigno(0))


  
// 9)--------------------------------------------------------------
const determinarPrimo = numero => {
    if(numero <= 1) {
        return "El número no es primo";
    }
    
    for(let i = 2; i <= Math.sqrt(numero); i++) {
      if(numero % i === 0) {
        return "El número no es primo";
      }
    }
    
    return "El número es primo"
}

console.log(determinarPrimo(5))
console.log(determinarPrimo(0))
console.log(determinarPrimo(8))


  
// 10)--------------------------------------------------------------
const validarEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;

    return regex.test(email);
}
console.log(validarEmail("correo@example.com")); // true
console.log(validarEmail("correoejemplo.com")); // false
  

const validarComentarios = (comentarios) => {
    return comentarios.length <= 50;
}
console.log(validarComentarios("Esto es un comentario")); // true
console.log(validarComentarios("Esto es un comentario muy largo que excede los 50 caracteres permitidos")); // false


const validarPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(password);
}
console.log(validarPassword("Password123")); // true
console.log(validarPassword("password")); // false
  