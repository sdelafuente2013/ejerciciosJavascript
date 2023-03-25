// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    // Capturar el título y asignarle el evento correspondiente
    const titulo = document.querySelector('#titulo');
    titulo.addEventListener('mouseover', preguntarNombre);

    // Función para preguntar el nombre al usuario
    function preguntarNombre() {
        const nombre = prompt('¿CÓMO TE LLAMÁS?');
        const saludo = document.querySelector('#saludo');
        
        // Validar si el usuario ingresó un nombre o no
        if (nombre) {
            saludo.textContent = `BIENVENID@ ${nombre.toUpperCase()}`;
        } else {
            saludo.textContent = 'BIENVENID@';
        }
        
        // Convertir el texto del saludo a mayúsculas
        saludo.style.textTransform = 'uppercase';
        
        // Ocultar el título y mostrar el span
        titulo.style.display = 'none';
        document.querySelector('.bienvenida span').style.display = 'block';
    }

    // Ocultar la sección bienvenida y mostrar la sección personajes
    document.querySelector('.bienvenida span').addEventListener('click', function() {
    document.querySelector('.bienvenida').style.display = 'none';
    document.querySelector('.personajes').style.display = 'flex';
    });

    // Asignar eventos a cada personaje
    const bart = document.querySelector('#bart');
    bart.addEventListener('click', seleccionarPersonaje);
    const lisa = document.querySelector('#lisa');
    lisa.addEventListener('dblclick', seleccionarPersonaje);
    const homero = document.querySelector('#homero');
    homero.addEventListener('click', seleccionarPersonaje);
    const marge = document.querySelector('#marge');
    marge.addEventListener('mouseenter', seleccionarPersonaje);
    const maggie = document.querySelector('#maggie');
    maggie.addEventListener('mouseleave', seleccionarPersonaje);
    const milhouse = document.querySelector('#milhouse');
    milhouse.addEventListener('click', seleccionarPersonaje);
    const burns = document.querySelector('#burns');
    burns.addEventListener('mouseenter', seleccionarPersonaje);
    const bobPatinio = document.querySelector('#bobPatinio');
    bobPatinio.addEventListener('dblclick', seleccionarPersonaje);
    const flanders = document.querySelector('#flanders');
    flanders.addEventListener('mouseenter', seleccionarPersonaje);
    const duffman = document.querySelector('#duffman');
    duffman.addEventListener('dblclick', seleccionarPersonaje);
    const gorgory = document.querySelector('#gorgory');
    gorgory.addEventListener('mouseenter', seleccionarPersonaje);
    const nelson = document.querySelector('#nelson');
    nelson.addEventListener('click', seleccionarPersonaje);

    // Función para seleccionar/deseleccionar un personaje
    function seleccionarPersonaje() {
        this.classList.toggle('personaje-seleccionado');
    }
    

    // Mostrar los personajes seleccionados por consola
    const boton = document.querySelector('.boton');
    boton.addEventListener('click', () => {
        const personajesSeleccionados = document.querySelectorAll('.personaje-seleccionado');
        console.log(personajesSeleccionados);
    });

    
 }) 