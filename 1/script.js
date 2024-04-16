let valores = [];

function ordenarValores() {
    valores.sort(function(a, b) {
        return a - b;
    });
    exibirValores();
}

function exibirValores() {
    const valoresDiv = document.getElementById("valores");
    valoresDiv.innerHTML = "<h2>Valores em ordem crescente:</h2>";
    for (let valor of valores) {
        valoresDiv.innerHTML += `<p>${valor}</p>`;
    }
}

function iniciar() {
    for (let i = 0; i < 5; i++) {
        let valor = parseFloat(prompt(`Digite o ${i + 1}º valor:`));
        valores.push(valor);
    }
}

iniciar();
