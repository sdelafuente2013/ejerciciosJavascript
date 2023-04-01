// Recuperar el array de películas favoritas del localStorage
const recuperoStorage = localStorage.getItem('favoritos');
// Convertir el string en un array
const peliculasArray = JSON.parse(recuperoStorage);
// Agregar una nueva película al array
peliculasArray.push('Nueva Película');
// Convertir el array en un string
const nuevoPeliculasJson = JSON.stringify(peliculasArray);
// Guardar el string en el localStorage
localStorage.setItem('favoritos', nuevoPeliculasJson);
// Imprimir el localStorage
console.log(localStorage);
