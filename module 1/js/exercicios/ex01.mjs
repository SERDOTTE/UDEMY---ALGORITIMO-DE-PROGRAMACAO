export function obterMaiorNumero(valor1, valor2) {
    if (valor1 > valor2) {
        return `O número ${valor1} é o maior.`;
    }

    if (valor2 > valor1) {
        return `O número ${valor2} é o maior.`;
    }

    return `Os dois números são iguais (${valor1}).`;
}

export function renderizarExercicio01(container) {
    const descricao = document.createElement('p');
    descricao.className = 'descricao-ex';
    descricao.textContent = 'Digite dois números para descobrir qual é o maior.';

    const controles = document.createElement('div');
    controles.className = 'controles-exercicio';

    const inputNum1 = document.createElement('input');
    inputNum1.type = 'number';
    inputNum1.className = 'campo-numerico';
    inputNum1.placeholder = 'Número 1';

    const inputNum2 = document.createElement('input');
    inputNum2.type = 'number';
    inputNum2.className = 'campo-numerico';
    inputNum2.placeholder = 'Número 2';

    const botaoCalcular = document.createElement('button');
    botaoCalcular.type = 'button';
    botaoCalcular.className = 'botao-exercicio';
    botaoCalcular.textContent = 'Calcular';

    const resultado = document.createElement('p');
    resultado.className = 'resultado-exercicio';

    controles.appendChild(inputNum1);
    controles.appendChild(inputNum2);
    controles.appendChild(botaoCalcular);

    container.appendChild(descricao);
    container.appendChild(controles);
    container.appendChild(resultado);

    botaoCalcular.addEventListener('click', () => {
        const valor1 = Number(inputNum1.value);
        const valor2 = Number(inputNum2.value);

        if (Number.isNaN(valor1) || Number.isNaN(valor2)) {
            resultado.className = 'resultado-exercicio erro';
            resultado.textContent = 'Preencha os dois números corretamente.';
            return;
        }

        resultado.className = 'resultado-exercicio sucesso';
        resultado.textContent = obterMaiorNumero(valor1, valor2);
    });
}