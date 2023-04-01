"use strict";

// Cargo todos los elementos del DOM
window.addEventListener("DOMContentLoaded", function () {
  // Recupero el valor del parámetro 'q' de la URL
  const searchResults = document.querySelector(".search-results");
  const queryString = new URLSearchParams(window.location.search);
  const searchTerm = queryString.get("q");

  // Creo un endpoint para buscar personajes con el término ingresado
  const apiURL = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;

  // Obtengo los personajes que coincidan con el término ingresado
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      // Recorro los resultados y voy agregando el HTML de cada personaje
      data.results.forEach((character) => {
        const characterArticle = `
        <article>
          <img src="${character.image}" alt="${character.name}" />
          <p>Name: ${character.name}</p>
          <p>Status: ${character.status}</p>
        </article>`;

        // Agrego el HTML de los personajes al elemento
        searchResults.innerHTML += characterArticle;
      });
    });
});
