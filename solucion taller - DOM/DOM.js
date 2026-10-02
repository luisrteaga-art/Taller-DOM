// Punto 1

// let titulo = document.createElement("h1");
// titulo.textContent = "my presentation";
// let div = document.querySelector("div");
// div.before(titulo);

// Punto 2

// let parrafo = document.querySelector("p");
// let parrafoNuevo = document.createElement("p");
// parrafoNuevo.textContent = "my best friend is mickey";
// parrafo.after(parrafoNuevo);

// // Punto 3

// let titulo = document.querySelector("h1");
// titulo.style.color = "blue";

// let parrafos = document.querySelectorAll("p");
// let ultimoParrafo = parrafos[parrafos.length - 1];

// ultimoParrafo.style.fontWeight = "bold";
// ultimoParrafo.style.backgroundColor = "yellow";

// Punto 4

let listaOl = document.querySelector("ol");
let listaUl = document.createElement("ul");
listaUl.innerHTML = listaOl.innerHTML;
listaUl.classList.add("listado");
listaOl.replaceWith(listaUl);

// Punto 5

let tituloH2 = document.querySelector("h2");
let itemsLista = document.querySelectorAll("li");
tituloH2.classList.add("estilo-titulo");
let itemAlmuerzo = itemsLista[3];
itemAlmuerzo.remove();


