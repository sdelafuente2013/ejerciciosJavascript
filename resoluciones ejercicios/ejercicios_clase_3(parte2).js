// 1) --------------------------------------------------------------
function convertirTemperatura(temperatura, unidad) {
  if(unidad === "C") {
    return (9/5 * temperatura) + 32;
  } else if(unidad === "F") {
    return (temperatura - 32) * 5/9;
  } else {
    return "Unidad no válida";
  }
}

console.log(convertirTemperatura(30, "C")); // Devuelve 86
console.log(convertirTemperatura(86, "F")); // Devuelve 30
console.log(convertirTemperatura(30, "X")); // Devuelve "Unidad no válida"


// 2) --------------------------------------------------------------
function calculadora(num1, num2, operacion) {
  switch(operacion) {
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
}

console.log(calculadora(5, 3, "+")); // Devuelve 8
console.log(calculadora(5, 3, "-")); // Devuelve 2
console.log(calculadora(5, 3, "*")); // Devuelve 15
console.log(calculadora(6, 3, "/")); // Devuelve 2
console.log(calculadora(6, 3, "%")); // Devuelve "Operación no válida"


// 3) --------------------------------------------------------------
function contarVocales(cadena) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;

    for(let i = 0; i < cadena.length; i++) {
      if(vocales.includes(cadena[i])) {
        contador++;
      }
    }
    return contador;
}
  
console.log(contarVocales("Hola mundo")); // Devuelve 3
console.log(contarVocales("Programación")); // Devuelve 4  


// 4) --------------------------------------------------------------
function sumaPares(n) {
  let suma = 0;
  
  for(let i = 2; i <= n; i += 2) {
    console.log(i)
    suma += i;
  }
  
  return suma;
}

console.log(sumaPares(10)); // Devuelve 30
console.log(sumaPares(5)); // Devuelve 6


// 5) --------------------------------------------------------------
function factorial(n) {
  let resultado = 1;

  for(let i = 1; i <= n; i++) {
    resultado *= i;
  }
  
  return resultado;
}

console.log(factorial(5)); // Devuelve 120
console.log(factorial(3)); // Devuelve 6



// 6)--------------------------------------------------------------
function esPar(n) {
  return n % 2 === 0;
}

function mostrarResultado(n) {
  if(esPar(n)) {
    console.log(`${n} es par`);
  } else {
    console.log(`${n} es impar`);
  }
}

mostrarResultado(10); // Muestra "10 es par"
mostrarResultado(7); // Muestra "7 es impar"



// 7)--------------------------------------------------------------
function calcularPromedio(calificaciones) {
  let suma = 0;

  for(let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
  }
  
  return suma / calificaciones.length
}

function mostrarPromedio(calificaciones) {
  const promedio = calcularPromedio(calificaciones);
  console.log(`El promedio de calificaciones es ${promedio}`);
}

mostrarPromedio([7, 8, 9, 10]); // Muestra "El promedio de calificaciones es 8.5"
mostrarPromedio([6, 7, 6, 8]); // Muestra "El promedio de calificaciones es 6.75"


// 8)--------------------------------------------------------------
function concatenarYOrdenar(arr1, arr2) {
  const nuevoArray = arr1.concat(arr2);
  nuevoArray.sort((a, b) => a - b)

  return nuevoArray;
}

function mostrarResultado(arr1, arr2) {
  const resultado = concatenarYOrdenar(arr1, arr2);
  console.log(resultado);
}

mostrarResultado([1, 3, 5], [2, 4, 6]); // Muestra "[1, 2, 3, 4, 5, 6]"
mostrarResultado([5, 3, 1], [6, 4, 2]); // Muestra "[1, 2, 3, 4, 5, 6]"



// 9)--------------------------------------------------------------
function numeroMasGrande(arr) {
  let maximo = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > maximo) {
      maximo = arr[i];
    }
  }

  return maximo;
}

function mostrarResultado(arr) {
  const maximo = numeroMasGrande(arr);
  console.log(`El número más grande es ${maximo}`);
}

mostrarResultado([1, 3, 5, 2, 4]); // Muestra "El número más grande es 5"
mostrarResultado([7, 2, 9, 4, 1]); // Muestra "El número más grande es 9"


// 10)--------------------------------------------------------------
function filtrarPalabras(arr, longitudMinima) {
  const nuevoArray = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= longitudMinima) {
      nuevoArray.push(arr[i]);
    }
  }

  return nuevoArray;
}

function mostrarResultado(arr, longitudMinima) {
  const resultado = filtrarPalabras(arr, longitudMinima);
  console.log(resultado);
}

mostrarResultado(["perro", "gato", "oso", "elefante"], 4); // Muestra "["perro", "elefante"]"
mostrarResultado(["casa", "puerta", "auto", "ventana"], 5); // Muestra "["puerta", "ventana"]"
