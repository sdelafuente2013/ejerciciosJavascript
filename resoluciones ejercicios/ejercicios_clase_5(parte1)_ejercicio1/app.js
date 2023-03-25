alert("Bienvenidos a mi sitio.");

const respuesta = confirm('¿Está seguro de querer avanzar?');

if (respuesta) {
    document.querySelector('h2').innerText = 'Qué alegría que quieras continuar tu visita';
    const nombre = prompt('¿Cuál es tu nombre?');
    document.querySelector('h1').innerText = `Bienvenido ${nombre}`;

    const edad = prompt('¿Cuál es tu edad?');
    if (edad >= 18) {
        const teGustaProgramar = confirm('¿Te gusta programar?');

        if (teGustaProgramar) {
            document.querySelector('.background-img').style.backgroundImage = 'url(img/programmer.jpeg)';
        } else {
            document.querySelector('.background-img').style.backgroundImage = 'url(img/gatito.jpeg)';
        }

        const rutaImgAvatar = prompt('¿Cuál es la ruta de la imagen de tu avatar?');
        const avatarImg = document.querySelector('.avatar')
        avatarImg.setAttribute('src', rutaImgAvatar);

        const pelicula = {
            nombre: "",
            director: "",
            duracion: 0,
            actor: ""
        };
          
        pelicula.nombre = prompt("Ingresa el nombre de la película:");
        pelicula.director = prompt("Ingresa el nombre del director:");
        pelicula.duracion = parseFloat(prompt("Ingresa la duración de la película (en minutos):"));
        pelicula.actor = prompt("Ingresa el nombre del actor principal:");

        const lista = document.querySelector('#pelicula');
        lista.innerHTML = `
            <ul>
                <li><strong>Nombre:</strong> ${pelicula.nombre}</li>
                <li><strong>Director:</strong> ${pelicula.director}</li>
                <li><strong>Duración:</strong> ${pelicula.duracion} minutos</li>
                <li><strong>Actor:</strong> ${pelicula.actor}</li>
            </ul>
        `;

        lista.style.display = "block";

    } else {
        document.querySelector('.container-general').style.display = 'none';
        document.querySelector('#accesoDenegado').style.display = 'block';
    }

} else {
    document.querySelector('h2').innerText = 'Lamentamos que no quieras continuar tu visita';
}