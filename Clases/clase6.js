'use strict'

// evento para que cargue la pagina
window.addEventListener('DOMContentLoaded', () => {
    
    // // 1) Guardo mi endpoint en una variable
    // // const cantidadDeGifs = parseInt(prompt('¿Cuantos gifs quieres ver?'))
    // const cantidadDeGifs = 5
    // let busquedaGifs = ''

    // document.querySelector('button').addEventListener('click', () => {
    //     busquedaGifs = document.querySelector('input').value
    //     console.log(busquedaGifs)

    //     let endpointSearch = `https://api.giphy.com/v1/gifs/search?api_key=UsVO5dlZNBAu1lCzqABNN3M8egPwn4in&q=${busquedaGifs}&limit=${cantidadDeGifs}&offset=0&rating=g&lang=en`
   
    //     fetch(endpointSearch)
    //         // Convierto la respuesta a un objeto literal de js
    //         .then(response => response.json())
    //         .then(data => {
    //             // eliminar las anteriores imagenes de mi html
    //             document.querySelector('.imagenes').innerHTML = ''

    //             // Recorremos el array de objetos para renderizar la imagen de cada uno  
    //             data.data.forEach(element => {
    //                 document.querySelector('.imagenes').innerHTML += `<img src="${element.images.original.url}">`
    //             })
    //         })
    //         .catch(error => console.log(error))
    //     })
    //     // fetch peticion post
        // fetch(endpointSearch, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         nombre: 'Juan',
        //         apellido: 'Perez'
        //     })
        // })


    // const endpointRandom = 'https://api.giphy.com/v1/gifs/random?api_key=UsVO5dlZNBAu1lCzqABNN3M8egPwn4in&tag=&rating=g'
    // const endpointTrending = `https://api.giphy.com/v1/gifs/trending?api_key=UsVO5dlZNBAu1lCzqABNN3M8egPwn4in&limit=${cantidadDeGifs}&rating=g`
    

    // Realizo la peticion a la API mediante fetch
    // fetch(endpointRandom)
    //     // Convierto la respuesta a un objeto literal de js
    //     .then(response => response.json())
    //     .then(data => {
    //         // esto es un objeto literal de js
    //         // document.querySelector('h1').innerText = data.data.username
    //         // document.querySelector('img').src = data.data.images.original.url
    //         // console.log(data.data.images.original.url)

    //     })
    //     .catch(error => console.log(error))

    // localStorage
    // localStorage.setItem('nombre', 'Santiago')
})