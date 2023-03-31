'use strict';

window.addEventListener('DOMContentLoaded', function() {
    const endPointGetAllCharacters = 'https://rickandmortyapi.com/api/character';
    this.fetch(endPointGetAllCharacters)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const charactersList = document.querySelector('.characterList');
            let characters = '';
            
            data.results.forEach(function(character) {
                characters += `
                    <article>
                        <img src="${character.image}" alt="${character.name}">
                        <p>Name: ${character.name}</p>
                        <p>Status: ${character.status}</p>
                    </article>
                `;
            });

            charactersList.innerHTML = characters;
        })
        .catch(function(error) {
            console.log(error);
        })
});