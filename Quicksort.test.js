const ordenar = require('./Quicksort');

describe('Teste da função ordenar', () => {
  test('Deve retornar o array ordenado em ordem crescente', () => {
    const array = [4, 2, 7, 1, 5];
    expect(ordenar(array)).toEqual([1, 2, 4, 5, 7]);
  });

  test('Deve retornar o array ordenado em ordem crescente mesmo com valores repetidos', () => {
    const array = [3, 2, 1, 3, 2];
    expect(ordenar(array)).toEqual([1, 2, 2, 3, 3]);
  });

  test('Deve retornar o array vazio se o array estiver vazio', () => {
    const array = [];
    expect(ordenar(array)).toEqual([]);
  });

  test('Deve retornar o próprio array se tiver apenas um elemento', () => {
    const array = [9];
    expect(ordenar(array)).toEqual([9]);
  });
});
