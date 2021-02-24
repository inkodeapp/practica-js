/**
 * Variables de configuración del juego
 */

const opciones = {
  top_left: {
    id: "top_left",
  },
  top_right: {
    id: "top_right",
  },
  bottom_left: {
    id: "bottom_left",
  },
  bottom_right: {
    id: "bottom_right",
  },
};

const estadoJuego = {
  segundosInicio: 3,
  interaciones: false,
  secuenciaJuego: [],
  secuenciaUsuario: [],
  nivelJuego: 0,
  nivelUsuario: 0,
  opciones,
};

/**
 * Referencias del DOM
 */

const botonesDelJuego = document.querySelectorAll(".simon-button");
const nombreDelJugador = document.getElementById("nombre_jugador");
const vistaDeJuego = document.getElementById("juego");
const pantallaDeInicio = document.getElementById("inicio_juego");
const pantallaDeFinal = document.getElementById("fin_juego");

/**
 * Funciones de referencia
 */
const obtenerElementoDom = (id) => {
  return window.document.getElementById(id);
};

const activarElemento = (elementoDOM) => {
  elementoDOM.classList.add("active");
};

const desactivarElemento = (elementoDOM) => {
  elementoDOM.classList.remove("active");
};

const clickBoton = (botonPresionado) => {
  if (!estadoJuego.interaciones) {
    return;
  } else {
    // 1) Agregar el id que el usuario hizo click en la secuencia del usuario para validarla con la secuencia del juego
    estadoJuego.secuenciaUsuario.push(botonPresionado);
  }
  let siguienteRonda;
  //2) Si el click es correcto, avanzar con el juego
  //3) Si el click es incorrecto, game over
  estadoJuego.secuenciaUsuario.forEach((boton, indice) => {
    if (
      estadoJuego.secuenciaJuego[indice] == estadoJuego.secuenciaUsuario[indice]
    ) {
      siguienteRonda =
        estadoJuego.secuenciaUsuario.length ==
        estadoJuego.secuenciaJuego.length;
    } else {
      gameOver();
    }
  });

  //4) Si el usuario hizo todos los clicks de la secuencia, avanzar al siguiente nivel
  if (siguienteRonda) {
    estadoJuego.interaciones = false;
    obtenerElementoAleatorio();
    estadoJuego.secuenciaUsuario = [];
  }
};

const obtenerElementoAleatorio = () => {
  /**
   * Función de calculo de id aleatorio
   * 1) Calcular un elemento aleatorio para agregar a la secuencia
   */

  estadoJuego.nivelJuego++;
  turnoTexto.textContent = `Nivel: ${estadoJuego.nivelJuego}`;
  const opcionesIds = Object.keys(estadoJuego.opciones);
  const numeroAleatorio = Math.floor(Math.random() * opcionesIds.length);
  const elementoAleatorio = opcionesIds[numeroAleatorio];
  reproducirSecuencia(elementoAleatorio);
};

const reproducirSecuencia = (elementoAleatorio) => {
  /**
   * Función de reproducción de secuencia
   * 1) Agregar un nuevo elemento aleatorio a la secuencia actual
   * 2) Definir un intervalo y reproducir la secuencia existente
   */
  estadoJuego.secuenciaJuego.push(elementoAleatorio);
  ejecutarSecuencia(estadoJuego.secuenciaJuego);
};

const inicializacion = () => {
  // Función de inicialización del juego
  //1) Setear todas las variables por defecto para comenzar el juego

  estadoJuego.interaciones = false;
  estadoJuego.secuenciaJuego = [];
  estadoJuego.secuenciaUsuario = [];
  estadoJuego.nivelJuego = 0;
  estadoJuego.nivelUsuario = 0;
  const nombreDelUsuario = document.getElementById("nombre_usuario");

  //2) Quitar todos los modales y mostrar el juego
  vistaDeJuego.setAttribute("class", "game");
  pantallaDeInicio.setAttribute("class", "hide");
  let nombreJugador = localStorage.getItem("Jugador");
  nombreJugador = nombreJugador[0].toLocaleUpperCase() + nombreJugador.slice(1);
  nombreDelUsuario.textContent = nombreJugador;

  //3) Mostrar y ejecutar un contador que de comienzo a la reproducción de la secuencia
  contador();
};

// Validacion de campo de usuario para iniciar el juego
function accionModalInicio() {
  const nombreDelJugador = obtenerElementoDom("nombre_jugador").value;
  if (nombreDelJugador) {
    localStorage.setItem("Jugador", nombreDelJugador);
    inicializacion();
  } else {
    alert("Debe ingresar un nombre");
  }
}

function contador() {
  //1) Variable de segundos del contador
  let tiempo = estadoJuego.segundosInicio;
  //2) Declarar el intervalo
  let intervalo = setInterval(() => {
    turnoTexto.textContent = tiempo;
    tiempo--;
    if (tiempo == -1) {
      clearInterval(intervalo);
      obtenerElementoAleatorio();
    }
  }, 1000);
  setInterval(intervalo);
}

// Establecer comportamiento al presionar intro
nombreDelJugador.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    accionModalInicio();
  }
});


function ejecutarSecuencia(valorDelArray) {
  //Declarar estados del encendido y apagado
  let elementoOn = 0;
  let elementoOff = 0;
  let intervalo = setInterval(() => {
    if (elementoOn < valorDelArray.length) {
      if (elementoOn == elementoOff) {
        activarElemento(obtenerElementoDom(valorDelArray[elementoOn]));
        elementoOff++;
      } else {
        desactivarElemento(obtenerElementoDom(valorDelArray[elementoOn]));
        elementoOn++;
      }
    } else {
      clearInterval(intervalo);
      estadoJuego.interaciones = true;
    }
  }, 1000);
  setInterval(intervalo);
}

//1) Ocultar vista de juego
//2) Mostrar modal de fin de juego y puntaje

const gameOver = () => {
  vistaDeJuego.setAttribute("class", "hide");
  pantallaDeFinal.setAttribute("class", "modal-container");
  const puntajeDom = obtenerElementoDom("puntaje");
  puntajeDom.textContent = `Tu puntaje es ${estadoJuego.nivelJuego}`;
};

//1) ocultar modal de fin de juego
//2) mostrar vista de juego
//3) iniciar partida

function accionModalFin() {
  pantallaDeFinal.setAttribute("class", "hide");
  vistaDeJuego.setAttribute("class", "game");
  inicializacion();
}

const turnoTexto = obtenerElementoDom("turno_texto");
