'use strict';

window.addEventListener('DOMContentLoaded', function() {
    // Creo un endpoint para obtener todos los personajes
    const endPointGetAllCharacters = 'https://rickandmortyapi.com/api/character';

    // Obtengo todos los personajes
    this.fetch(endPointGetAllCharacters)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Guardo la etiqueta donde voy a mostrar los personajes
            const charactersList = document.querySelector('.characterList');

            // Creo una variable para guardar el HTML de los personajes
            let characters = '';
            
            // Recorro los resultados y voy agregando el HTML de cada personaje
            data.results.forEach(function(character) {
                characters += `
                    <article>
                        <img src="${character.image}" alt="${character.name}">
                        <p>Name: ${character.name}</p>
                        <p>Status: ${character.status}</p>
                        <a href="detalle.html?id=${character.id}">Ver más</a>
                    </article>
                `;
            });

            // Agrego el HTML de los personajes al elemento
            charactersList.innerHTML = characters;
        })
        .catch(function(error) {
            console.log(error);
        })
});