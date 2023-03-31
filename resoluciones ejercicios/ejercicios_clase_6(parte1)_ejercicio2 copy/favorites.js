'use strict';

window.addEventListener("DOMContentLoaded", function () {
  // Recuperamos del localStorage los personajes favoritos
  let favorites = [];
  for (let i = 0; i < localStorage.length; i++) {
    favorites.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

  // Recuperamos el contenedor de personajes favoritos
  const characterContainer = document.querySelector(".characterList");
  favorites.forEach((favorite) => {
    const containerFavorites = document.createElement("article");
    containerFavorites.classList.add("characterCard");

    containerFavorites.innerHTML = `
      <img src="${favorite.image}" alt="${favorite.name}" />
      <p>Name: ${favorite.name} </p>
      <p>Status: ${favorite.status} </p>
    `;

    characterContainer.appendChild(containerFavorites);
  });
});