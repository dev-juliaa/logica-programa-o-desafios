// desafio 1

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

// desafio 2

function verificarConsole () {
    console.log("O botão foi clicado!");
};

// desafio 3

function verificarAlert() {
    alert("Eu amo JS");
};

// desafio 4

let cidadeBrasil;

function verificarPrompt() {
    cidadeBrasil = prompt("Diga uma cidade do brasil que você goste: ");
    alert(`Estive em ${cidadeBrasil} e lembrei de você!`);
};

// desafio 5


function verificarSoma() {
    let valor1 = parseInt(prompt("Digite um valor: "));
    let valor2 = parseInt(prompt("Digite um segundo valor: "));
    let soma = valor1 + valor2;
    alert(`a soma entre ${valor1} e ${valor2} é igual a ${soma}`);
};