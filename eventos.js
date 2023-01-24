window.addEventListener("load", () => {
    alert("Bienvenido a mi CV");
});



function cambiarColor(elemt, col) {
    elemt.style.color = col
};

function pestaneo(elemento) {
    elemento.addEventListener("mouseenter", () => {
        cambiarColor(elemento, "white");
    })

    elemento.addEventListener("mouseleave", () => {
        cambiarColor(elemento, "black");
    })
};

function mostrar() {
    ocultartxt.classList.toggle("mostrar");

    if (ocultartxt.classList.contains("mostrar")) {
        boton.innerHTML = "Ocultar Datos";
    }
    else {
        boton.innerHTML = "Mostrar Datos";
    }
};

function mostrarmas(elemento) {
    elemento.addEventListener("click", mostrar);
};



const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")
const DG = document.getElementById("DG")
const FA = document.getElementById("FA")
const ExL = document.getElementById("ExL")
const HS = document.getElementById("HS")
const ocultartxt = document.getElementById("ocultartxt")
const boton = document.getElementById("boton")



pestaneo(h1);
pestaneo(h2);
pestaneo(boton);
pestaneo(DG);
pestaneo(FA);
pestaneo(ExL);
pestaneo(HS);
mostrarmas(boton);


