import { barcelona, londres, paris, roma } from "./ciudades.js";

let enlaces = document.querySelectorAll("a");
let elementoTitulo = document.getElementById("titulo");
let elementoSubtitulo = document.getElementById("subtitulo");
let elementoParrafo = document.getElementById("parrafo");
let elementoPrecio = document.getElementById("precio");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    // remover activo
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    //agregar active al que corresponda
    this.classList.add("active");
    // traer la informacion del objeto correspondiente a la eleccion
    let contenido = obtenerContenido(this.textContent);
    // mostrar el contenido en el dom
    elementoTitulo.innerHTML = contenido.titulo;
    elementoSubtitulo.innerHTML = contenido.subtitulo;
    elementoParrafo.innerHTML = contenido.parrafo;
    elementoPrecio.innerHTML = contenido.precio;
  });
});
// function trae informcion correcta desde ciudad.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Londres: londres,
    París: paris,
    Roma: roma,
  };
  return contenido[enlace];
}
