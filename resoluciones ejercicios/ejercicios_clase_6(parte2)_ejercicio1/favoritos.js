"use strict";

window.addEventListener("DOMContentLoaded", function () {
  // Verificar si hay un usuario logueado
  if (!sessionStorage.getItem("usuario")) {
    // Si no hay un usuario logueado, redirigir a la página de login
    window.location.href = "login.html";
  }

  // Creo una variable con el endpoint de trending
  const endpointTrending = `https://api.giphy.com/v1/gifs/trending?api_key=UsVO5dlZNBAu1lCzqABNN3M8egPwn4in&limit=10&rating=g`;

  // Obtener los GIFs
  fetch(endpointTrending)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Guardo los resultados en una variable
      const arrayObjetos = data.data;

      // Obtener los favoritos del localStorage
      const favoritosLocalStorage = JSON.parse(
        localStorage.getItem("favoritos")
      );

      // Verificar si hay favoritos
      if (favoritosLocalStorage == null) {
        // Si no hay favoritos, mostrar un mensaje
        document.querySelector("body").innerHTML += `<h1>No hay favoritos</h1>`;
      } else {
        // Buscar en el array de objetos y guardar en un nuevo array llamado 'objetosEncontrados' los objetos que coincidan con los IDs guardados en el localStorage
        const objetosEncontrados = arrayObjetos.filter((objeto) =>
          favoritosLocalStorage.includes(objeto.id)
        );

        // Mostramos los objetos encontrados en el HTML
        const gifsList = document.querySelector(".gifsList");

        // Creo una variable para guardar el HTML de los GIFs
        let gifs = "";

        // Recorro los resultados y voy agregando el HTML de cada GIF
        objetosEncontrados.forEach(function (gif) {
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
      }
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
