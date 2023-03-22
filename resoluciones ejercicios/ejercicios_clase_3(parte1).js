// 1) --------------------------------------------------------------
for(let i = 0; i < 5; i++) {
    console.log("Practicando con el bucle for");
}

for(let i = 0; i < 10; i++) {
    console.log(`La variable i tiene el valor de: ${i}`);
}

for(let i = 0; i < 20; i += 2) {
    console.log(i);
}

for(let i = 0; i < 250; i += 5) {
    console.log(i);
}

for(let i = 100; i >= 0; i--) {
    console.log(i);
}
  
  
// 2) --------------------------------------------------------------
const base = 5;
const resultados = [];

for(let i = 1; i <= 10; i++) {
    const resultado = base * i;
    resultados.push(resultado);
}

for(let i = 0; i < resultados.length; i++) {
    console.log(resultados[i]);
}


// 3) --------------------------------------------------------------
const ganancias = [100, -50, 200, -25, 350, -100, -75, 150, 50, -10];
let suma = 0;

for(let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i];
}

console.log(suma);

// 4) --------------------------------------------------------------
const healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];
    
for(let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
}

for(let i = 0; i < healingIsDifficult.length; i++) {
    console.log(`${i+1} ${healingIsDifficult[i]}`);
}

// 5) --------------------------------------------------------------
const got = [
    {
    nombre: "Jon",
    apellido: "Snow",
    edad: 23,
    ciudad: "Winterfell"
    },
    {
    nombre: "Daenerys",
    apellido: "Targaryen",
    edad: 19
    },
    {
    nombre: "Arya",
    apellido: "Stark",
    edad: 12,
    ciudad: "Winterfell"
    },
    {
    nombre: "Tyrion",
    apellido: "Lannister",
    edad: 32,
    ciudad: "Casterly Rock"
    }
];

for(let i = 0; i < got.length; i++) {
    const nombre = got[i].nombre;
    const apellido = got[i].apellido;

    console.log(`Hola ${nombre} ${apellido} criatura viajera!`);
}

for(let i = 0; i < got.length; i++) {
    const nombre = got[i].nombre;
    const apellido = got[i].apellido;
    const ciudad = got[i].ciudad;

    if(ciudad !== undefined) {
        console.log(`Soy ${nombre} ${apellido} de la ciudad ${ciudad}`);
    } else {
        console.log(`Soy ${nombre} ${apellido}`);
    }
}

// 6)--------------------------------------------------------------
const myArray = [200, 40, 400, 40, 40];

let repetidos = {};
for(let i = 0; i < myArray.length; i++) {
    const elemento = myArray[i];
    
    if(repetidos[elemento] !== undefined) {
        repetidos[elemento]++;
    } else {
        repetidos[elemento] = 1;
    }
}

let noRepetidos = [];
for(let elemento in repetidos) {
    if(repetidos[elemento] === 1) {
        noRepetidos.push(parseInt(elemento));
    }
}
    
console.log(noRepetidos);


// 7)--------------------------------------------------------------
const valor = parseInt(prompt("Ingresa un valor entero:"));
const numeros = [];

for(let i = 0; i <= valor; i++) {
    numeros.push(i);
}

console.log(numeros.join(', '))

// 8)--------------------------------------------------------------
const valor2 = parseInt(prompt("Ingresa un valor entero:"));
const numeros2 = [];

for(let i = valor2; i >= 0; i--) {
numeros2.push(i);
}

console.log(numeros2.join(', '));


// 9)--------------------------------------------------------------
const valor3 = parseInt(prompt("Ingresa un valor entero:"));
let suma3 = 0;

for(let i = 0; i <= valor3; i++) {
    suma3 += i;
}

console.log(`Los números enteros de 0 a ${valor3} suman ${suma3}`);


// 10)--------------------------------------------------------------
let valor4 = parseInt(prompt("Ingresa un valor entero:"));
const numeros4 = [];

for(let i = 0; i < valor4; i++) {
    if(i % 3 === 2) {
        numeros4.push(i);
    }
}

console.log(numeros4.join(', '))