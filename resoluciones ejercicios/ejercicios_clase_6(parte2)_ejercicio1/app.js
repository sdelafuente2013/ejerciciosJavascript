"use strict";

window.addEventListener("DOMContentLoaded", function () {
  // Endpoint para obtener los GIFs
  const endpointTrending = `https://api.giphy.com/v1/gifs/trending?api_key=UsVO5dlZNBAu1lCzqABNN3M8egPwn4in&limit=10&rating=g`;

  // Obtener los GIFs
  fetch(endpointTrending)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Guardo los resultados en una variable
      const results = data.data;

      // Obtengo el elemento donde voy a mostrar los GIFs
      const gifsList = document.querySelector(".gifsList");

      // Creo una variable para guardar el HTML de los GIFs
      let gifs = "";

      // Recorro los resultados y voy agregando el HTML de cada GIF
      results.forEach(function (gif) {
        gifs += `
                    <article>
                        <img src="${gif.images.original.url}" alt="${gif.name}">
                        <p>Name: ${gif.title}</p>
                        <p>Status: ${gif.status}</p>
                        <a href="${gif.id}">Agregar a favoritos</a>
                    </article>
                `;
      });

      // Agrego el HTML de los GIFs al elemento
      gifsList.innerHTML = gifs;

      // ---- Agregar los GIFs a favoritos -----

      // Seleccionar todos los links
      const links = document.querySelectorAll("section a");

      // Recorrer los links y agregar un evento click
      links.forEach(function (link) {
        link.addEventListener("click", function (event) {
          // Prevenir el comportamiento por defecto del link
          event.preventDefault();

          // Obtener el ID del GIF
          const id = event.target.href.split("/").pop();

          // Recuperar el valor actual de 'favoritos' en localStorage y convertirlo a un array
          let favorites = JSON.parse(localStorage.getItem("favoritos")) || [];

          // Verificar si el ID ya está en el array, si no está, agregarlo
          if (!favorites.includes(id)) {
            favorites.push(id);
          }

          // Guardar el array actualizado en localStorage
          localStorage.setItem("favoritos", JSON.stringify(favorites));
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  // Logout para eliminar el usuario del sessionStorage
  document.querySelector("#logoutLink").addEventListener("click", () => {
    // Eliminar el usuario del sessionStorage
    sessionStorage.removeItem("usuario");

    // Recargar la página
    location.reload();
  });

  // Verificar si hay un usuario en el sessionStorage
  if (sessionStorage.getItem("usuario")) {
    // Si hay un usuario, ocultar el link de login y mostrar el de logout
    document.querySelector("#loginLink").style.display = "none";
    document.querySelector("#logoutLink").style.display = "";
  } else {
    // Si no hay un usuario, ocultar el link de logout y mostrar el de login
    document.querySelector("#loginLink").style.display = "";
    document.querySelector("#logoutLink").style.display = "none";
  }
});
