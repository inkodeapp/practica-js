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

/**
 * Funciones de referencia
 */

const clickBoton = () => {
  /**
   * Evento click de los botones del juego
   * 1) Agregar el id que el usuario hizo click en la secuencia del usuario para validarla con la secuencia del juego
   * 2) Si el click es correcto, avanzar con el juego
   * 3) Si el click es incorrecto, game over
   * 4) Si el usuario hizo todos los clicks de la secuencia, avanzar al siguiente nivel
   */
  console.log("clickBoton");
};

const obtenerElementoAleatorio = () => {
  /**
   * Función de calculo de id aleatorio
   * 1) Calcular un elemento aleatorio para agregar a la secuencia
   */
  const numeroAleatorio = Math.floor(Math.random() * 4);
  return numeroAleatorio;
};

const reproducirSecuencia = () => {
  /**
   * Función de reproducción de secuencia
   * 1) Agregar un nuevo elemento aleatorio a la secuencia actual
   * 2) Definir un intervalo y reproducir la secuencia existente
   */

  console.log("reproducirSecuencia");
};

const inicializacion = (nombreDelJugador) => {
  // Función de inicialización del juego
  //1) Setear todas las variables por defecto para comenzar el juego
  const nombreDelUsuario = document.getElementById("nombre_usuario");
  const vistaDeJuego = document.getElementById("juego");
  const pantallaDeInicio = document.getElementById("inicio_juego");
  

  //2) Quitar todos los modales y mostrar el juego
  vistaDeJuego.setAttribute("class", "game");
  pantallaDeInicio.setAttribute("class", "hide");
  nombreDelUsuario.textContent = nombreDelJugador;

  //3) Mostrar y ejecutar un contador que de comienzo a la reproducción de la secuencia
  contador(3)
};

function accionModalInicio() {
  const nombreDelJugador = document.getElementById("nombre_jugador").value;
  localStorage.setItem("Jugador", nombreDelJugador);
  inicializacion(nombreDelJugador);
}

obtenerElementoAleatorio();

const nombreDelJugador = document.getElementById("nombre_jugador");
nombreDelJugador.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    accionModalInicio();
  }
});

function contador(contador) {
  const turnoTexto = document.getElementById("turno_texto");
  let intervalo = setInterval(() => {
    turnoTexto.textContent = contador;
    contador--;
    if (contador == -1) {
      clearInterval(intervalo);
    }
  }, 1000);

  setInterval(intervalo);


}
