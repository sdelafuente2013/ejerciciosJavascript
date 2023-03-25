const respuesta = document.querySelector('.respuesta');

const num1 = parseFloat(prompt("Ingresa un número:"));
const num2 = parseFloat(prompt("Ingresa otro número:"));

if (num1 > num2) {
  respuesta.innerText = `${num1} es el número mayor.`;
} else if (num2 > num1) {
  respuesta.innerText = `${num2} es el número mayor.`;
} else {
  respuesta.innerText = "Ambos números son iguales.";
}
