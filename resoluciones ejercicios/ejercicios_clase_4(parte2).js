// 1) --------------------------------------------------------------
const misMascotas = {
    nombre: "Luna",
    especie: "gato",
    edad: 3,
    comidaFavorita: "atún",
    color: "blanco y gris"
};

// 2) --------------------------------------------------------------
misMascotas.presentar = function() {
    return `Hola, mi mascota se llama ${this.nombre}, es un(a) ${this.especie} y tiene ${this.edad} años`;
}    
console.log(misMascotas.presentar()); // Hola, mi mascota se llama Luna, es un(a) gato y tiene 3 años.

// 3) --------------------------------------------------------------
const misDatos = {
    nombre: "Juan",
    apellido: "Pérez",
    dni: "12345678",
    comidaFavorita: "pizza",
    edad: 25
};
    
// 4) --------------------------------------------------------------
misDatos.saludar = function() { 
    return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
}

console.log(misDatos.saludar())


// 5) --------------------------------------------------------------
const auto = {
    marca: "Ford",
    modelo: "Mustang",
    anio: 2022,
    color: "rojo",
    posicion: 0,
    avanzar(n) {
        if(n > 0) {
            this.posicion += n;
        }
    },
    retroceder(n) {
        if(n > 0) {
            this.posicion -= n;
        }
    }
};

auto.avanzar(10);
auto.retroceder(4);
console.log(auto.posicion); // 6


// 6)--------------------------------------------------------------
const nuevoAuto = {
    marca: "Chevrolet",
    modelo: "Camaro",
    anio: 2022,
    color: "negro",
    posicion: 0,
    moverse(n) {
        if (n > 0) {
            this.posicion += n;
        } else {
            this.posicion -= Math.abs(n);
        }
    }
};

nuevoAuto.moverse(10);
nuevoAuto.moverse(-3);
console.log(nuevoAuto.posicion); // 7



// 7)--------------------------------------------------------------
const ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder(num) {
      const poderElegido = this.poderes[num];
      this.energia -= 10;
      return poderElegido;
    }
};
  
  const Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder(num) {
      const poderElegido = this.poderes[num];
      this.energia -= 10;
      return `Poder Elegido de ${this.nombre}: ${poderElegido}. Energía restante: ${this.energia}.`;
    }
};
  
const randomNum = Math.floor(Math.random() * 3);

console.log(ironMan.getPoder(randomNum));
console.log(Hulk.getPoder(randomNum));
  


// 8)--------------------------------------------------------------
const producto = {
    nombre: "Producto",
    precio: 100,
    stock: 10,
    vender(cantidad) {
      if (cantidad > this.stock) {
        console.log("No hay suficiente stock.");
      } else {
        this.stock -= cantidad;
      }
    },
    agregarStock(cantidad) {
      this.stock += cantidad;
    }
  };
  
  console.log(producto.stock); // 10
  producto.vender(3);
  console.log(producto.stock); // 7
  producto.agregarStock(5);
  console.log(producto.stock); // 12
  