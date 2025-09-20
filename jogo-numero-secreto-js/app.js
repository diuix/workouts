//Created by Diego Piovesan
//Software Engineer


alert("Bem-vindo ao jogo do número secreto!");

// Gera número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let chute;
let tentativas = 0;

while (chute !== numeroSecreto) {
    let entrada = prompt("Escolha um número entre 1 e 100:");

    // Continua pedindo se não for número válido
    while (isNaN(entrada) || entrada.trim() === "") {
        entrada = prompt("Entrada inválida! Digite um número entre 1 e 100:");
    }

    chute = Number(entrada);
    tentativas++;

    if (chute === numeroSecreto) {
        alert(`🎉 Acertou! O número secreto era ${numeroSecreto}. Tentativas: ${tentativas}`);
    } else {
        alert(`O número secreto é ${chute > numeroSecreto ? "menor" : "maior"} que ${chute}.`);
    }
}
