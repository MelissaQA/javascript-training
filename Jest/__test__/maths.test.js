import { TestScheduler } from '@jest/core';
import { sumar, restar, multiplicar, dividir } from '../maths.js';

describe('Calculos matemáticos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1,1)).toBe(2);
    });

    test('Restar', () => {
        expect(restar(1,4)).toBe(-3);
    });

    test('Multiplicar', () => {
        expect(multiplicar(2,3)).toBe(6);
    });

    test('Dividir', () => {
        expect(dividir(5,1)).toBe(5);
    });
});