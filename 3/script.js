function calcularMedia() {
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));

    let media = (valor1 + valor2) / 2;

    exibirResultado(media);
}

function exibirResultado(media) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h2>A média dos valores é: ${media.toFixed(2)}</h2>`;
}
