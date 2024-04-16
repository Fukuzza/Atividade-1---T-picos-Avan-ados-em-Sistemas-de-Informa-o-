function calcularQuadrados() {
    let valores = [];
    let quadrados = [];

    for (let i = 0; i < 3; i++) {
        let valor = parseFloat(prompt(`Digite o ${i + 1}º valor:`));
        valores.push(valor);
    }

    for (let valor of valores) {
        let quadrado = valor * valor;
        quadrados.push(quadrado);
    }

    exibirResultados(valores, quadrados);
}

function exibirResultados(valores, quadrados) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<h2>Valores e seus Quadrados:</h2>";

    for (let i = 0; i < valores.length; i++) {
        resultadosDiv.innerHTML += `<p>O quadrado de ${valores[i]} é ${quadrados[i]}</p>`;
    }
}
