// Creo un array con las películas favoritas
const peliculasFavoritas = ["El Padrino", "Pulp Fiction", "El Señor de los Anillos"];
// Convertir el array en un string
const peliculasJson = JSON.stringify(peliculasFavoritas);
// Guardo la película favorita en el localStorage
localStorage.setItem('favoritos', peliculasJson);
// Imprimo el localStorage
console.log(localStorage);
