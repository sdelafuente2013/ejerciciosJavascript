"use strict";

window.addEventListener("DOMContentLoaded", function () {
  // const endPointGetAllCharacters = "https://rickandmortyapi.com/api/character";

  // fetch(endPointGetAllCharacters)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
      // console.log(data)
    //   const characterList = document.querySelector(".characterList");
    //   let characters = "";

    //   data.results.forEach(function (character) {
    //     characters += `
    //       <article class="characterCard">
    //         <img src=${character.image} alt='' />
    //         <p>Name: ${character.name} </p>
    //         <p>Status: ${character.status} </p>
    //         <a href="#" class="addFavorite"> Agregar a favoritos </a> 
    //       </article>
    //     `;
    //   });

    //   characterList.innerHTML = characters;

    //   const allTagsA = document.querySelectorAll(".addFavorite");
    //   allTagsA.forEach(function (tagA) {
    //     tagA.addEventListener("click", function (event) {
    //       event.preventDefault();
    //       const parentElement = event.target.parentElement;

    //       const name = parentElement.querySelectorAll("p")[0].textContent.replace("Name: ", "");
    //       const status = parentElement.querySelectorAll("p")[1].textContent.replace("Status: ", "");
    //       const image = parentElement.querySelector("img").src;
    //       const characterObject = { name, status, image };

    //       const characterKey = `character_${name}`;
    //       localStorage.setItem(characterKey, JSON.stringify(characterObject));
    //     });
    //   });
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });


  const apiUrl = "https://rickandmortyapi.com/api/character";

  // Obtener los datos de la API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      const characterContainer = document.querySelector(".characterList");

      // Crear una card por cada personaje
      characters.forEach((character) => {
        // 1) Agregamos el contenido HTML
        const card = document.createElement("article");
        card.classList.add("characterCard");
        card.innerHTML = `
          <img src="${character.image}" alt="${character.name}" />
          <p>Name: ${character.name} </p>
          <p>Status: ${character.status} </p>
          <a href="#" class="addFavorite"> Agregar a favoritos </a> 
        `;

        // 2) Agregar evento de click en el botón "Agregar a favoritos" de cada card
        const addFavoriteButton = card.querySelector(".addFavorite");
        addFavoriteButton.addEventListener("click", (event) => {
          event.preventDefault()
          const characterObject = {name: character.name, status: character.status, image: character.image}
          localStorage.setItem(`character_${character.id}`, JSON.stringify(characterObject));
        });

        // 3) agrega el contenido al HTML (variable card)
        characterContainer.appendChild(card);
      });
    })
    .catch((error) => console.log(error));

});
