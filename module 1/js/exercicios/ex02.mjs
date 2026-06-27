export function calcularLucro(custo, precoVenda) {
    const lucro = precoVenda - custo;
    const margem = custo === 0 ? 0 : (lucro / custo) * 100;

    return {
        custo,
        precoVenda,
        lucro,
        margem,
    };
}

export function renderizarExercicio02(container) {
    const descricao = document.createElement('p');
    descricao.className = 'descricao-ex';
    descricao.textContent = 'Informe custo e preço de venda para calcular lucro e margem.';

    const controles = document.createElement('div');
    controles.className = 'controles-exercicio';

    const inputCusto = document.createElement('input');
    inputCusto.type = 'number';
    inputCusto.className = 'campo-numerico';
    inputCusto.placeholder = 'Custo';
    inputCusto.step = '0.01';

    const inputVenda = document.createElement('input');
    inputVenda.type = 'number';
    inputVenda.className = 'campo-numerico';
    inputVenda.placeholder = 'Preço de venda';
    inputVenda.step = '0.01';

    const botaoCalcular = document.createElement('button');
    botaoCalcular.type = 'button';
    botaoCalcular.className = 'botao-exercicio';
    botaoCalcular.textContent = 'Calcular';

    const resultado = document.createElement('p');
    resultado.className = 'resultado-exercicio';

    controles.appendChild(inputCusto);
    controles.appendChild(inputVenda);
    controles.appendChild(botaoCalcular);

    container.appendChild(descricao);
    container.appendChild(controles);
    container.appendChild(resultado);

    botaoCalcular.addEventListener('click', () => {
        const custo = Number(inputCusto.value);
        const precoVenda = Number(inputVenda.value);

        if (Number.isNaN(custo) || Number.isNaN(precoVenda)) {
            resultado.className = 'resultado-exercicio erro';
            resultado.textContent = 'Preencha custo e preço de venda corretamente.';
            return;
        }

        if (custo <= 0) {
            resultado.className = 'resultado-exercicio erro';
            resultado.textContent = 'O custo deve ser maior que zero.';
            return;
        }

        const dados = calcularLucro(custo, precoVenda);
        resultado.className = 'resultado-exercicio sucesso';
        resultado.textContent = `Custo: R$ ${dados.custo.toFixed(2)} | Venda: R$ ${dados.precoVenda.toFixed(2)} | Lucro: R$ ${dados.lucro.toFixed(2)} (${dados.margem.toFixed(2)}%)`;
    });
}