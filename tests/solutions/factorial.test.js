const factorial = require('../../solutions/factorial');

describe('Factorial', () => {
    test('should return the correct result', () => {
        const result = factorial(3);
        
        expect(result).toBe(6);
    });
});