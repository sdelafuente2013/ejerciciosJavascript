const respuesta = document.querySelector('.respuesta');

const num = parseFloat(prompt("Ingresa un número:"));

if (num > 0) {
  respuesta.innerText = `El número ${num} es positivo.`;
} else if (num < 0) {
  respuesta.innerText = `El número ${num} es negativo.`;
} else {
  respuesta.innerText = "El número es cero.";
}
