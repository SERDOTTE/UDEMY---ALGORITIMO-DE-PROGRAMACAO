let numerio = 10;

console.log(numerio);

const nota = 59;
let mensagem = "";

if (nota >= 80) {
    mensagem = "Parabéns! Você foi aprovado(a)!";
} else if (nota >= 60) {
    mensagem = "Você está na nossa lista de espera.";
} else {
    mensagem = "Você foi reprovado(a).";
}

console.log(mensagem);

if (numerio % 2 == 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}