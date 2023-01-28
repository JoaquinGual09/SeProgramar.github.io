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


let elementoalcordeon = document.getElementsByClassName("alcordeon");

for (let i = 0; i < elementoalcordeon.length; i++) {
    elementoalcordeon[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let Ocultar = this.nextElementSibling;
        if (Ocultar.style.display == "block") {
            Ocultar.style.display = "none";
        }
        else {
            Ocultar.style.display = "block"
        }

    });
}



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
pestaneo(DG);
pestaneo(FA);
pestaneo(ExL);
pestaneo(HS);



