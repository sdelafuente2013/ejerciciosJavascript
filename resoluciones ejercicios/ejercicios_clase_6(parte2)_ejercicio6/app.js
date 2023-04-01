// Creo un array de objetos con los personajes de Game of Thrones
let got = [
  {
    nombre: "Jon",
    apellido: "Snow",
    edad: 23,
    ciudad: "Winterfell",
  },
  {
    nombre: "Daenerys",
    apellido: "Targaryen",
    edad: 19,
  },
  {
    nombre: "Arya",
    apellido: "Stark",
    edad: 12,
    ciudad: "Winterfell",
  },
  {
    nombre: "Tyrion",
    apellido: "Lannister",
    edad: 32,
    ciudad: "Casterly Rock",
  },
];

// Creo un array vacío
let winterIsComing = [];

// Recorro el array got y guardo en el array winterIsComing los personajes que viven en Winterfell
for (let i = 0; i < got.length; i++) {
  if (got[i].ciudad === "Winterfell") {
    winterIsComing.push(got[i]);
  }
}

// Convertir el array en un string
const winterIsComingJson = JSON.stringify(winterIsComing);

// Guardar el string en el localStorage
localStorage.setItem("winterfell", winterIsComingJson);

// Podemos verificar que se guardó correctamente en el localStorage los personajes que viven en Winterfell
console.log(localStorage);
