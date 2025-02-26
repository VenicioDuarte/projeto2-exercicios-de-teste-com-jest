const { subtrai, ehPar, contarCaracteres } = require("../src/calculadora");

test("Subtração entre dois números", () => {
    expect(subtrai(10, 5)).toBe(5);
    expect(subtrai(7, 3)).toBe(4);
});

test("Verificar se um número é par", () => {
    expect(ehPar(4)).toBe(true);
    expect(ehPar(7)).toBe(false);
});

test("Erro ao passar entrada inválida em ehPar", () => {
    expect(() => ehPar("texto")).toThrow("Entrada inválida");
});

test("Contar caracteres de uma string", () => {
    expect(contarCaracteres("teste")).toBe(5);
    expect(contarCaracteres("abc")).toBe(3);
});

test("Erro ao passar entrada inválida em contarCaracteres", () => {
    expect(() => contarCaracteres(123)).toThrow("Entrada inválida");
});
