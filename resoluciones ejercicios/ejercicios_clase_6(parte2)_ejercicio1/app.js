'use strict';

window.addEventListener('DOMContentLoaded', function() {
    const endpointTrending = `https://api.giphy.com/v1/gifs/trending?api_key=UsVO5dlZNBAu1lCzqABNN3M8egPwn4in&limit=10&rating=g`

    fetch(endpointTrending)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const results = data.data
            console.log(results)

            const gifsList = document.querySelector('.gifsList');
            let gifs = '';

            data.data.forEach(function(gif) {
                gifs += `
                    <article>
                        <img src="${gif.images.original.url}" alt="${gif.name}">
                        <p>Name: ${gif.title}</p>
                        <p>Status: ${gif.status}</p>
                        <a href="${gif.id}">Agregar a favoritos</a>
                    </article>
                `;
            });

            gifsList.innerHTML = gifs;

            const links = document.querySelectorAll('a');
            links.forEach(function(link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const id = event.target.href.split('/').pop();
                    // console.log(id);
                    // guardar en localStorage
                    localStorage.setItem('favoritos', id);
                })
            })

            // capturar todos los link y guardar en localStorage los id de los gifs que se clickean
            

        })
        .catch(function(error) {
            console.log(error);
        })
});