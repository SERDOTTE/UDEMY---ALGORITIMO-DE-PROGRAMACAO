export function classificarParOuImpar(numero) {
    return numero % 2 === 0 ? 'par' : 'ímpar';
}

export function renderizarExercicio03(container) {
    const descricao = document.createElement('p');
    descricao.className = 'descricao-ex';
    descricao.textContent = 'Digite um número inteiro para descobrir se ele é par ou ímpar.';

    const controles = document.createElement('div');
    controles.className = 'controles-exercicio';

    const inputNumero = document.createElement('input');
    inputNumero.type = 'number';
    inputNumero.className = 'campo-numerico';
    inputNumero.placeholder = 'Número inteiro';
    inputNumero.step = '1';

    const botaoVerificar = document.createElement('button');
    botaoVerificar.type = 'button';
    botaoVerificar.className = 'botao-exercicio';
    botaoVerificar.textContent = 'Verificar';

    const resultado = document.createElement('p');
    resultado.className = 'resultado-exercicio';

    controles.appendChild(inputNumero);
    controles.appendChild(botaoVerificar);

    container.appendChild(descricao);
    container.appendChild(controles);
    container.appendChild(resultado);

    botaoVerificar.addEventListener('click', () => {
        const numero = Number(inputNumero.value);

        if (!Number.isInteger(numero)) {
            resultado.className = 'resultado-exercicio erro';
            resultado.textContent = 'Digite um número inteiro válido.';
            return;
        }

        const classificacao = classificarParOuImpar(numero);
        resultado.className = 'resultado-exercicio sucesso';
        resultado.textContent = `O número ${numero} é ${classificacao}.`;
    });
}
