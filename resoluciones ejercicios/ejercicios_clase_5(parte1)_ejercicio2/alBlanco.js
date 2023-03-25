const respuesta = document.querySelector('.respuesta');

const dia = prompt("Ingresa un día de la semana:").toLowerCase();
const hora = parseFloat(prompt("Ingresa la hora actual (formato 24 hs):"));

if (dia !== "sábado" && dia !== "domingo" && hora >= 10 && hora <= 15) {
  respuesta.innerText = "¡Bien! Todavía estamos a tiempo de llegar.";
} else {
  respuesta.innerText = "Uf… No llegamos.";
}
