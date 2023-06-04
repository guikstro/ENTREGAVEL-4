const contar = require('./contagem');

describe('Teste da função contar', () => {
  test('Deve retornar a contagem de notas maiores ou iguais ao corte', () => {
    const notas1 = [7, 6, 4, 8, 5];
    expect(contar(notas1)).toBe(4);
  });

  test('Deve retornar 0 se não houver notas maiores ou iguais ao corte', () => {
    const notas1 = [3, 2, 1];
    expect(contar(notas1)).toBe(0);
  });

  test('Deve retornar 0 se o array de notas estiver vazio', () => {
    const notas1 = [];
    expect(contar(notas1)).toBe(0);
  });

  test('Deve retornar a contagem correta se todas as notas forem maiores ou iguais ao corte', () => {
    const notas1 = [5, 5, 5, 5, 5];
    expect(contar(notas1)).toBe(5);
  });
});
