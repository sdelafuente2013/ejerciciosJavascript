'use strict';

window.addEventListener('DOMContentLoaded', function() {
    // const endPointRandom = 'https://api.giphy.com/v1/gifs/random?api_key=UsVO5dlZNBAu1lCzqABNN3M8egPwn4in&tag=&rating=g';
    const endPointTrending = 'https://api.giphy.com/v1/gifs/trending?api_key=UsVO5dlZNBAu1lCzqABNN3M8egPwn4in&limit=10&rating=g'

    fetch(endPointTrending)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {

            // PARTE 3
            // const name = result.data.title
            // const url = result.data.images.original.url

            // // capturamos el H1 y le agregamos el nombre del gif
            // const title = document.querySelector('h1')
            // title.innerHTML = name

            // // capturamos el img y le agregamos la url del gif
            // const img = document.querySelector('img')
            // img.src = url
            // // img.setAttribute('src', url)

            // PARTE 4
            // console.log(result.data)
            const gifs = result.data
            let listGifs = ''

            gifs.forEach(gif => {
                listGifs += `
                    <article>
                        <h2>${gif.title}</h2>
                        <img src="${gif.images.original.url}" alt="${gif.title}">
                    </article>
                    `
            });

            document.querySelector('section').innerHTML = listGifs
        })
        .catch(function(error) {
            console.log(error);
        })
});