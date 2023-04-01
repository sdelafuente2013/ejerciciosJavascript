// Creo una variable con el nombre de usuario
const miNombre = "Juan";
// Guardo el nombre de usuario en el localStorage
localStorage.setItem('userName', miNombre);
// Imprimo el localStorage
console.log(localStorage);
// Recupero el nombre de usuario del localStorage
const recuperoStorage = localStorage.getItem('userName');
// Imprimo el nombre de usuario
console.log(recuperoStorage);
// Limpio el localStorage
localStorage.clear();
