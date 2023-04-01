window.addEventListener('DOMContentLoaded', function() {
  const queryString = location.search;
  const queryStringToObject = new URLSearchParams(queryString);
  const id = queryStringToObject.get('id');

  const endPointGetCharacterById = `https://rickandmortyapi.com/api/character/${id}`;

  fetch(endPointGetCharacterById)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      const charactersList = document.querySelector('.characterList');
      charactersList.innerHTML =  `<article>
                                      <img src="${data.image}" alt="${data.name}">
                                      <p>Name: ${data.name}</p>
                                      <p>Status: ${data.status}</p>
                                      <p>Gender: ${data.gender}</p>
                                      <p>Species: ${data.species}</p>
                                      <a href="detalle.html?id=${data.id}">Ver más</a>
                                  </article>
                                `;
    })  
    .catch(function(error) {
      console.log(error);
    })
});