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
const pantallaDeFin = document.getElementById("fin_juego");

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
    estadoJuego.secuenciaUsuario.push(botonPresionado);
  }
  /**
   * Evento click de los botones del juego
   * 1) Agregar el id que el usuario hizo click en la secuencia del usuario para validarla con la secuencia del juego
   * 2) Si el click es correcto, avanzar con el juego
   * 3) Si el click es incorrecto, game over
   * 4) Si el usuario hizo todos los clicks de la secuencia, avanzar al siguiente nivel
   */

  let siguienteRonda;
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
  const elemento = opcionesIds[numeroAleatorio];
  reproducirSecuencia(elemento);
};

const reproducirSecuencia = (elemento) => {
  /**
   * Función de reproducción de secuencia
   * 1) Agregar un nuevo elemento aleatorio a la secuencia actual
   * 2) Definir un intervalo y reproducir la secuencia existente
   */
  estadoJuego.secuenciaJuego.push(elemento);
  ejecutarSecuencia(estadoJuego.secuenciaJuego);
};

const inicializacion = () => {
  // Función de inicialización del juego
  //1) Setear todas las variables por defecto para comenzar el juego

  estadoJuego.segundosInicio = 3;
  estadoJuego.interaciones = false;
  estadoJuego.secuenciaJuego = [];
  estadoJuego.secuenciaUsuario = [];
  estadoJuego.nivelJuego = 0;
  estadoJuego.nivelUsuario = 0;
  const nombreDelUsuario = document.getElementById("nombre_usuario");

  //2) Quitar todos los modales y mostrar el juego
  vistaDeJuego.setAttribute("class", "game");
  pantallaDeInicio.setAttribute("class", "hide");
  nombreDelUsuario.textContent = localStorage.getItem("Jugador").toUpperCase();

  //3) Mostrar y ejecutar un contador que de comienzo a la reproducción de la secuencia
  contador();
};

function accionModalInicio() {
  const nombreDelJugador = obtenerElementoDom("nombre_jugador").value;
  localStorage.setItem("Jugador", nombreDelJugador);
  inicializacion();
}

function contador() {
  let intervalo = setInterval(() => {
    turnoTexto.textContent = estadoJuego.segundosInicio;
    estadoJuego.segundosInicio--;
    if (estadoJuego.segundosInicio == -1) {
      clearInterval(intervalo);
      obtenerElementoAleatorio();
    }
  }, 1000);
  setInterval(intervalo);
}

nombreDelJugador.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    accionModalInicio();
  }
});

function ejecutarSecuencia(valorDelArray) {
  let i = 0;
  let efe = 0;
  let intervalo = setInterval(() => {
    if (i < valorDelArray.length) {
      if (i == efe) {
        activarElemento(obtenerElementoDom(valorDelArray[i]));
        efe++;
      } else {
        desactivarElemento(obtenerElementoDom(valorDelArray[i]));
        i++;
      }
    } else {
      clearInterval(intervalo);
      estadoJuego.interaciones = true;
    }
  }, 1000);
  setInterval(intervalo);
}

const gameOver = () => {
  vistaDeJuego.setAttribute("class", "hide");
  pantallaDeFin.setAttribute("class", "modal-container");
  const puntajeDom = obtenerElementoDom("puntaje");
  puntajeDom.textContent = `Tu puntaje es ${estadoJuego.nivelJuego}`;
  estadoJuego.segundosInicio = 3;
  estadoJuego.interaciones = false;
  estadoJuego.secuenciaJuego = [];
  estadoJuego.secuenciaUsuario = [];
  estadoJuego.nivelJuego = 0;
  estadoJuego.nivelUsuario = 0;
};

function accionModalFin() {
  vistaDeJuego.setAttribute("class", "game");
  pantallaDeFin.setAttribute("class", "hide");
  inicializacion();
}

const turnoTexto = obtenerElementoDom("turno_texto");
