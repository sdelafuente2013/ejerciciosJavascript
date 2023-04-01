'use strict';

window.addEventListener('load', function(){
  const queryString = location.search;
  const queryStringObj = new URLSearchParams(queryString);
  const pelicula = queryStringObj.get('pelicula');

  const endPointSearchPelicula = `https://api.themoviedb.org/3/search/movie?api_key=df84b4caeb498b71ff8908c6118a2cfc&language=en-US&query=${pelicula}&page=1&include_adult=false`

  fetch(endPointSearchPelicula)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      // console.log(data);
      const peliculas = data.results

      // renderizar todas las imagenes de cada pelicula
      const body = document.querySelector('body');
      peliculas.forEach(pelicula => {
        body.innerHTML += `<img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">`
      });
    })
    .catch(function(error){
      console.log(error);
    })
});