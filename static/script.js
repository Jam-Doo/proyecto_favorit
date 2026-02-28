// CONTADOR DEL TIEMPO JUNTOS
const fechaInicio = new Date("2026-01-26");

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerHTML =
        "Llevamos juntos " + dias + " días ❤️";
}

setInterval(actualizarContador, 1000);


// MENSAJE SORPRESA
function sorpresa() {
    document.getElementById("mensaje").innerHTML ="¿Seguimos escribiendo nuestra historia juntos?";
}


// CORAZONES FLOTANDO
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);

}, 500);
