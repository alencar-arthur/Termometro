document.getElementById("verificarBtn").addEventListener("click", function() {
    let numero = parseInt(document.getElementById("numero").value);
    let situacao = parseInt(document.getElementById("situacao").value);

        if(isNaN(numero)) {
            alert("Por Favor, insira números válidos.");
            return;
        }

        if(situacao === "verao", numero <= 28) {
            alert("Temperatura Fria 🥶");
            return;
        }
        else if(situacao === "verao", numero >=29 && numero <=33 ){
            alert("Temperatura Agradável 😊 ");
            return;
        }
        else if(situacao === "verao", numero >=34){
            alert("Temperatura Quente 🥵");
            return;
        }

        if (situacao === "inverno", numero <= 30) {
            alert("Temperatura Fria ")
        }

})