const sieveOfEratosthenes = require('../../solutions/sieve-of-eratosthenes');

describe('Sieve Of Erastosthenes', () => {
    test('should return the correct result', () => {
        const result = sieveOfEratosthenes(20);

        expect(result).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
    });
});