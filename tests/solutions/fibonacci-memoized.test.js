const fibMemo = require('../../solutions/fibonacci-memoized');

describe('Fibonacci Memoized', () => {
    test('should return the correct result', () => {
        const result = fibMemo(10);

        expect(result).toBe(55);
    });
});