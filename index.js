"use strict";
/*
// variables que no voy a modificar
const namePlayer = "Johan";
const buttonYellow = "Yellow";
const buttonGreen = "Green";
const buttonRed = "Red";
const buttonBlue = "Blue";

//variables dinamicas

let levelSequence = 12;
let levelUser = 7;
let counter = 0;
let buttonok = true;



//alert("bienvenido " + prompt("dime tu nombre", ""));

const codigoApp = null;
const codigoScanner = undefined;
if (1 == 2 - 2) {
  alert("son iguales");
} else {
  alert("no son iguales");
}
for ( ; levelUser < levelSequence; levelUser++) {
  if (levelUser % 2) {
    alert("Encendido "+levelUser);
  } else {
    alert("Apagado "+levelUser);
  }
}

let levelGame = 12;
let levelUser = 7;
let buttonOk = true;

if (levelUser === levelGame) {
  //siguiente secuencia
}

if (buttonOk) {
  //Continue
} else {
  //looser
}


let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let mes = prompt("inserte mes", "");

switch (mes) {
  case "enero":
    alert(`este mes tiene ${diasPorMes[0]}`);
    break;
  case "febrero":
    alert(`este mes tiene ${diasPorMes[1]}`);
    break;
  case "marzo":
    alert(`este mes tiene ${diasPorMes[2]}`);
    break;
  case "abril":
    alert(`este mes tiene ${diasPorMes[3]}`);
    break;
  case "mayo":
    alert(`este mes tiene ${diasPorMes[4]}`);
    break;
  case "junio":
    alert(`este mes tiene ${diasPorMes[5]}`);
    break;
  case "julio":
    alert(`este mes tiene ${diasPorMes[6]}`);
    break;
  case "agosto":
    alert(`este mes tiene ${diasPorMes[7]}`);
    break;
  case "septiembre":
    alert(`este mes tiene ${diasPorMes[8]}`);
    break;
  case "octubre":
    alert(`este mes tiene ${diasPorMes[9]}`);
    break;
  case "noviembre":
    alert(`este mes tiene ${diasPorMes[10]}`);
    break;
  case "diciembre":
    alert(`este mes tiene ${diasPorMes[11]}`);
    break;

  default:
    alert("No inserto un mes valido");
    break;
}



let letter=prompt("Ingrese una letra","")
 
if(letter==="a"||letter==="e"||letter==="i"||letter==="o"||letter==="u"){
    alert("la letra es vocal")
}else{
    alert("la letra no es una vocal")
}


let sueldo = 40000;
let antiguedad = prompt("ingrese tiempo en la empresa", "");
let newSueldo = 0;
if (antiguedad >= 10) {
  newSueldo = sueldo * 1.1;
} else if (antiguedad < 10 && antiguedad >= 5) {
  newSueldo = sueldo * 1.07;
} else if (antiguedad < 5 && antiguedad >= 3) {
  newSueldo = sueldo * 1.05;
} else if (antiguedad < 3) {
  newSueldo = sueldo * 1.03;
}

alert(`Su sueldo nuevo es: ${newSueldo}`);


const accionUsuario = "red";

switch (accionUsuario) {
  case "red":
    console.log(`El usuario hizo click en el boton ${accionUsuario}`);
    break;
  case "blue":
    console.log(`El usuario hizo click en el boton ${accionUsuario}`);
    break;
  case "green":
    console.log(`El usuario hizo click en el boton ${accionUsuario}`);
    break;
  case "yellow":
    console.log(`El usuario hizo click en el boton ${accionUsuario}`);
    break;
  default:
    break;
}

let secuencia = ["red", "blue", "yellow", "green"];
const ids = ["red", "blue", "yellow", "green"];
const elementoAleatorio = Math.floor(Math.random() * ids.length);
secuencia.push(ids[elementoAleatorio]);
alert(secuencia);

let piramide = (cantidadDeNiveles) => {
  let nivel = 0;
  for (nivel; nivel < cantidadDeNiveles; nivel++) {
    let texto = "";
    let simbolos = 0;
    let espacios = 1;

    for (espacios; espacios <( cantidadDeNiveles - nivel); espacios++) {
      texto = texto + " ";
    }

    for (simbolos; simbolos < nivel * 2 + 1; simbolos++) {
      texto = texto + "*";
    }
    console.log(texto);
  }
};

piramide(5);


let secuencia = ["red", "blue", "yellow", "green"];
secuencia.forEach(element => {
  console.log(element)
});



const productos = [
  { item: "pan", precio: "$ 200", anulado: false },
  { item: "pan", precio: "$ 150", anulado: false },
  { item: "pan", precio: "$ 180", anulado: false },
  { item: "pan", precio: "$ 100", anulado: false },
  { item: "pan", precio: "$ 120", anulado: false },
  { item: "pan", precio: "$ 105", anulado: true },
  { item: "pan", precio: "$ 150", anulado: true },
];
let acumulador = 0;

for (let index = 0; index < productos.length; index++) {
  let producto = productos[index];
  if (producto.anulado == false) {
    nombre = producto.precio.replace("$ ", "");
    acumulador = acumulador + parseInt(nombre);
  }
}
console.log(`el total de su compra es ${acumulador}`);


let productos = [
  { item: "pan", precio: "$ 200", anulado: false },
  { item: "pan", precio: "$ 150", anulado: false },
  { item: "pan", precio: "$ 180", anulado: false },
  { item: "pan", precio: "$ 100", anulado: false },
  { item: "pan", precio: "$ 120", anulado: false },
  { item: "pan", precio: "$ 105", anulado: true },
  { item: "pan", precio: "$ 150", anulado: true },
];

let total = 0;

for (let index = 0; index < productos.length; index++) {
  let producto = productos[index];
  if (!producto.anulado) {
    const precio = parseInt(producto.precio.split(" ")[1]);
    total += precio;
  }
}
console.log(`el total de la compra es de ${total}`);

let total = productos.filter((producto) => {
    return !producto.anulado;
  }).map((producto) => {
    return parseInt(producto.precio.split(" ")[1]);
  }).reduce((total, precio) => {
    return total + precio;
  });

  console.log(total)

const buttonYellow = document.getElementById("yellow");
const buttonGreen = document.getElementById("green");
const buttonRed = document.getElementById("red");
const buttonBlue = document.getElementById("blue");
let colores = [];

buttonYellow.addEventListener("click", () => {
  colores.push("yellow");
  alert(colores);
});

buttonGreen.addEventListener("click", () => {
  colores.push("Verde");
  alert(colores);
});

buttonRed.addEventListener("click", () => {
  colores.push("Rojo");
  alert(colores);
});

buttonBlue.addEventListener("click", () => {
  colores.push("Azul");
  alert(colores);
});
*/

const botones = document.querySelectorAll(".boton");
let colores = [];

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (boton.id !== "purple" && boton.id !== "orange") {
      colores.push(boton.id);
      alert(colores);
    }
  });
});
