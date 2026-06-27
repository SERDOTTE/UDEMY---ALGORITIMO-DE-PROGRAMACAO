import { renderizarTodosExercicios } from './exercicios/index.mjs';

const outputDiv = document.getElementById('output');

document.getElementById('botao_voltar').addEventListener('click', () => {
    window.location.href = '../index.html';
});

function criarBlocoExercicio(titulo) {
    const bloco = document.createElement('section');
    bloco.className = 'bloco-exercicio';

    const tituloEl = document.createElement('h2');
    tituloEl.className = 'titulo-ex';
    tituloEl.textContent = titulo;

    const conteudo = document.createElement('div');
    conteudo.className = 'conteudo-exercicio';

    bloco.appendChild(tituloEl);
    bloco.appendChild(conteudo);
    outputDiv.appendChild(bloco);

    return conteudo;
}

function inicializarApp() {
    outputDiv.innerHTML = '';
    renderizarTodosExercicios(criarBlocoExercicio);
}

inicializarApp();