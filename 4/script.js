function verificarParidade() {
    let valor = parseInt(prompt("Digite um valor:"));

    if (valor % 2 === 0) {
        exibirResultado(`${valor} é par.`);
    } else {
        exibirResultado(`${valor} é ímpar.`);
    }
}

function exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h2>${mensagem}</h2>`;
}
