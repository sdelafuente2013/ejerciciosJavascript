document.addEventListener('DOMContentLoaded', function() {
    // alert("hola")
    // Evento para el botón Abracadabra
    const abracadabraButton = document.getElementById('abracadabra');
    abracadabraButton.addEventListener('click', function() {
      const nombre = prompt('Por favor, ingresa tu nombre:');
      const titular = document.getElementById('titular');
      titular.textContent = 'Hi. I\'m ' + nombre + '.';
    });
  
    // Evento doble click en el botón Get in touch with me
    const getInTouchButton = document.querySelector('#portfolio .button.big.scrolly');
    const parrafoColor = document.querySelector('.parrafo-color');
  
    getInTouchButton.addEventListener('dblclick', function() {
      parrafoColor.style.color = colorAlAzar();
    });
  
    // Función colorAlAzar
    function colorAlAzar() {
      const colores = ['red', 'blue', 'green', 'purple', 'orange'];
      const index = Math.floor(Math.random() * 5);
      return colores[index];
    }
  
    // Eventos click en los elementos section
    const sections = document.querySelectorAll('#work .box.style1');
    sections.forEach(function(section) {
      section.addEventListener('click', function() {
        const h3 = this.querySelector('h3');
        alert('Clickeaste sobre ' + h3.innerText);
      });
    });
  
    // Eventos para el botón See some of my recent work
    const seeRecentWorkButton = document.querySelector('#work .button.big.scrolly');
    const workParagraph = document.querySelector('#work > header > p');
    let originalColor = workParagraph.style.color;
  
    console.log(seeRecentWorkButton)
    console.log(workParagraph)

    seeRecentWorkButton.addEventListener('mouseover', function() {
      originalColor = workParagraph.style.color;
      workParagraph.style.color = colorAlAzar();
    });
  
    seeRecentWorkButton.addEventListener('mouseout', function() {
      workParagraph.style.color = originalColor;
    });

    // foto lechuza
    document.querySelector("#lechuza").addEventListener("click", function() {
      alert("Preparate para el futuro...");
      setTimeout(function() {
        alert("Y el futuro ya llegó!");
      }, 5000);
    });

    // al tocar una tecla
    // document.addEventListener("keydown", function() {
    //   alert("Ey, tocaste el teclado!");
    // });

    // document.addEventListener("keydown", function(event) {
    //   if (event.code === "Space") {
    //     alert("Ey, tocaste la barra!");
    //   }
    // });

    document.querySelector("#email").addEventListener("keydown", function(event) {
      if (event.code === "Space") {
        event.preventDefault();
        alert("Ey, tocaste la barra!");
      }
    });
    
    // estado secreto 
    let estadoSecreto = 0;

    document.addEventListener("keydown", function(event) {
      if (estadoSecreto === 0 && event.key === "s") {
        estadoSecreto = 1;
      } else if (estadoSecreto === 1 && event.key === "e") {
        estadoSecreto = 2;
      } else if (estadoSecreto === 2 && event.key === "c") {
        estadoSecreto = 3;
      } else if (estadoSecreto === 3 && event.key === "r") {
        estadoSecreto = 4;
      } else if (estadoSecreto === 4 && event.key === "e") {
        estadoSecreto = 5;
      } else if (estadoSecreto === 5 && event.key === "t") {
        estadoSecreto = 6;
      } else if (estadoSecreto === 6 && event.key === "o") {
        estadoSecreto = 0;
        alert("SECRETO MAGICO");
        event.preventDefault();
      } else {
        estadoSecreto = 0;
      }
    });
  });
  