document.querySelector('#loginForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  sessionStorage.setItem('usuario', email);

  // Redireccionar a la página de detalle del gif
  window.location.href = 'favoritos.html';
});
