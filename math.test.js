const { sumar, restar } = require('./math');

describe('Operaciones Matemáticas Básicas', () => {
    describe('Función sumar()', () => {
        test('S1: Suma de dos números positivos', () => {
            expect(sumar(6, 3)).toBe(9);
        });

        test('S2: Suma con el cero', () => {
            expect(sumar(8, 0)).toBe(8);
        });

        test('S3: Suma de negativos', () => {
            expect(sumar(-4, -2)).toBe(-6);
        });

        test('S4: Suma de decimales', () => {
            expect(sumar(0.1, 0.2)).toBeCloseTo(0.3); // toBeCloseTo por la precisión de punto flotante en JS
        });

        test('S5: Entradas numéricas enviadas como texto (debe sumar matemáticamente)', () => {
            expect(sumar("5", 3)).toBe(8);
            expect(sumar("5", "3")).toBe(8);
        });

        test('Manejo de errores: Si se envía texto no numérico, debe arrojar un error', () => {
            expect(() => sumar("hola", 2)).toThrow();
        });
    });

    describe('Función restar()', () => {
        test('R1: Resta normal (a > b)', () => {
            expect(restar(10, 4)).toBe(6);
        });

        test('R2: Resultado negativo (a < b)', () => {
            expect(restar(3, 8)).toBe(-5);
        });

        test('R3: Restar el mismo número', () => {
            expect(restar(5, 5)).toBe(0);
        });

        test('R4: Restar un número negativo', () => {
            expect(restar(5, -3)).toBe(8);
        });
    });
});
