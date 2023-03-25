const respuesta = document.querySelector('.respuesta');

const darkMode = confirm("¿Querés aplicar dark mode en el sitio?");

if (darkMode) {
  document.body.style.backgroundColor = "#444";
  document.body.style.color = "#fff";
  respuesta.innerText = "Dark Mode activado.";
} else {
  respuesta.innerText = "Ok. Lo activo en otro momento.";
}
