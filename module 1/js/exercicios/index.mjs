import { renderizarExercicio01 } from './ex01.mjs';
import { renderizarExercicio02 } from './ex02.mjs';
import { renderizarExercicio03 } from './ex03.mjs';

export const exercicios = [
    {
        id: '01',
        titulo: 'Maior Número',
        renderizar: renderizarExercicio01,
    },
    {
        id: '02',
        titulo: 'Margem de Lucro',
        renderizar: renderizarExercicio02,
    },
    {
        id: '03',
        titulo: 'Par ou Ímpar',
        renderizar: renderizarExercicio03,
    },
];

export function renderizarTodosExercicios(criarBlocoExercicio) {
    exercicios.forEach((exercicio) => {
        const container = criarBlocoExercicio(`Exercício ${exercicio.id} - ${exercicio.titulo}`);
        exercicio.renderizar(container);
    });
}
