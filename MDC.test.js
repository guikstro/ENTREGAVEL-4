const MDC = require('./MDC');

describe('Teste da função MDC', () => {
  test('Deve retornar o MDC entre dois números', () => {
    const num1 = 24;
    const num2 = 36;
    expect(MDC(num1, num2)).toBe(12);
  });

  test('Deve retornar o próprio número se ambos forem iguais', () => {
    const num1 = 15;
    const num2 = 15;
    expect(MDC(num1, num2)).toBe(15);
  });

  test('Deve retornar 1 se um dos números for 1', () => {
    const num1 = 7;
    const num2 = 1;
    expect(MDC(num1, num2)).toBe(1);
  });

  test('Deve retornar o próprio número se um dos números for zero', () => {
    const num1 = 20;
    const num2 = 0;
    expect(MDC(num1, num2)).toBe(20);
  });
});
