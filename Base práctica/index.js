const botones = document.querySelectorAll(".favorito");

const obtenerDatosDelLocalStorage = () => {
  const favoritos = localStorage.getItem("favoritos");
  if (favoritos) {
    return favoritos.split(",");
  } else {
    return [];
  }
};

const actualizarDatosDelLocalStorage = (nuevosFavoritos) => {
  const favoritos = nuevosFavoritos.join(",");
  localStorage.setItem("favoritos", favoritos);
};

const agregarFavorito = (id) => {
  const boton = document.getElementById(id);
  boton.setAttribute("src", "./assets/favorite_on.svg");
};

const quitarFavorito = (id) => {
  const boton = document.getElementById(id);
  boton.setAttribute("src", "./assets/favorite_off.svg");
};

botones.forEach((boton) => {
  const favoritos = obtenerDatosDelLocalStorage();
  const marcado = favoritos.find((favorito) => favorito === boton.id);
    if (marcado){
        agregarFavorito(boton.id)
    }
  boton.addEventListener("click", () => {
    const botonId = boton.id;
    const favoritos = obtenerDatosDelLocalStorage();
    const marcado = favoritos.find((favorito) => favorito === botonId);
    let nuevosFavoritos;
    if (marcado) {
      nuevosFavoritos = favoritos.filter((favorito) => favorito !== botonId);
      quitarFavorito(botonId);
    } else {
      agregarFavorito(botonId);
      nuevosFavoritos = favoritos;
      nuevosFavoritos.push(botonId);
    }
    actualizarDatosDelLocalStorage(nuevosFavoritos);
  });
});
