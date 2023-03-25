const respuesta = document.querySelector('.respuesta');

const dia = prompt("¿Qué día es hoy?");

if (dia.toLowerCase() === "domingo") {
  respuesta.innerText = "¡Pongamos la olla, hoy se comen pastas!";
} else {
  respuesta.innerText = "Mejor lo dejamos para el domingo.";
}
