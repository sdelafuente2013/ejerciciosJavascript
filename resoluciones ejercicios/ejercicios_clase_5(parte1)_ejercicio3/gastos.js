// Pedimos al usuario que confirme si desea iniciar
const confirmacion = confirm("¿Querés iniciar?");

if (confirmacion) {
  // Pedimos al usuario la cantidad de integrantes de la familia
  let cantidadIntegrantes = prompt("¿Cuántos integrantes tiene tu familia?");
  
  // Validamos que la cantidad ingresada sea un número y mayor a 2
  cantidadIntegrantes = Number(cantidadIntegrantes);
  
  if (typeof cantidadIntegrantes !== "number" || cantidadIntegrantes <= 2) {
    alert("La cantidad de integrantes debe ser un número mayor a 2.");
    window.location.reload();
  } else {
    // Creamos un array vacío para guardar los datos de cada integrante
    const integrantes = [];
    
    // Pedimos los datos de cada integrante y los guardamos en el array
    for (let i = 0; i < cantidadIntegrantes; i++) {
      let nombre = prompt(`Nombre del integrante ${i+1}`);
      let gastos = prompt(`Gastos del día para ${nombre}`);
      
      // Validamos que el nombre y los gastos no estén vacíos y que los gastos sean un número
      if (nombre === "" || gastos === "" || typeof Number(gastos) !== "number") {
        alert("Debes ingresar un nombre y un valor numérico para los gastos.");
        window.location.reload();
      } else {
        integrantes.push({ nombre: nombre, gastos: Number(gastos) });
      }
    }
    
    // Mostramos el array de integrantes por consola
    console.log(integrantes);
    
    // Imprimimos el nombre y gasto de cada integrante
    integrantes.forEach((integrante) => {
      console.log(`Nombre: ${integrante.nombre} | Gasto: ${integrante.gastos}`);
    });
    
    // Calculamos los gastos totales de la familia
    const gastosTotales = integrantes.reduce((total, integrante) => {
      return total + integrante.gastos;
    }, 0);
    
    // Mostramos los gastos totales por consola
    console.log(`Gastos totales: ${gastosTotales}`);
    
    // Si los gastos totales superan $1000 mostramos una alerta
    if (gastosTotales > 1000) {
      alert("Debemos pedir un préstamo.");
    }
    
    // Calculamos el promedio de gasto del día
    const promedioGasto = gastosTotales / cantidadIntegrantes;
    
    // Mostramos el promedio de gasto por consola
    console.log(`Promedio de gasto del día: ${promedioGasto}`);
    
    // Si el promedio de gasto es inferior a $500 mostramos una alerta
    if (promedioGasto < 500) {
      alert("¡Festejamos!");
    }
  }
} else {
  // Mostramos una alerta de despedida y redirigimos al usuario a Netflix
  alert("Gracias por haber venido.");
  window.location.href = 'https://netflix.com';
}
