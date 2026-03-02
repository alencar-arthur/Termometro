document.getElementById("verificarBtn").addEventListener("click", function() {
    let numero = parseInt(document.getElementById("numero").value);
    let situacao = parseInt(document.getElementById("situacao").value);

    if(isNaN(numero)) {
        alert("Por Favor, insira números válidos.");
        return;
    }

    if(situacao === "verao", numero < 26) {
        alert("Temperatura Fria ❄️");
        return;
    }
    else if(situacao === "verao" )
})