const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const nombrePaginaSpan = document.querySelector(".nombre-pagina span");
const navegacionSpans = document.querySelectorAll(".navegacion span");

cloud.addEventListener("click", () => {
    // Alternar la clase mini-barra-lateral
    barraLateral.classList.toggle("mini-barra-lateral");

    // Verificar si la barra está en estado reducido
    const isMini = barraLateral.classList.contains("mini-barra-lateral");

    // Cambiar visibilidad de los spans según el estado de la barra
    if (isMini) {
        nombrePaginaSpan.classList.add("oculto");
        navegacionSpans.forEach(span => span.classList.add("oculto"));
    } else {
        nombrePaginaSpan.classList.remove("oculto");
        navegacionSpans.forEach(span => span.classList.remove("oculto"));
    }
});
