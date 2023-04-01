// Creo un array con las películas favoritas
const peliculasFavoritas = ["El Padrino", "Pulp Fiction", "El Señor de los Anillos"];
// Guardo la película favorita en el localStorage
localStorage.setItem('peliculaFavorita', peliculasFavoritas[1]);
// Imprimo el localStorage
console.log(localStorage);
// Recupero la película favorita del localStorage
const recuperoStorage = localStorage.getItem('peliculaFavorita');
// Imprimo la película favorita
console.log(recuperoStorage);
// Limpio el localStorage
localStorage.clear();
