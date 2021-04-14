import { numbers } from '../numbers';

describe('Comparación de números', ()=>{
    test('Mayor que', () => {
        expect(numbers(2,2)).toBeGreaterThan(3);
    });
});