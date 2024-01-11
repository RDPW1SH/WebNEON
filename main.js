
function verificarLargura() {
    var larguraJanela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (larguraJanela <= 768) {
        // Alterar o texto
        document.getElementById("title-change").innerHTML = "Queres partilhar o site?";
        document.getElementById("text-change").innerHTML = "Usa o QRCode";
    } else {
        // Reverter para o texto inicial
        document.getElementById("title-change").innerHTML = "Sem computador?";
        document.getElementById("text-change").innerHTML = "Sem problema! Visita-nos por telemóvel";

    }
}

window.addEventListener("resize", verificarLargura);


verificarLargura();