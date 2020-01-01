const binarySearch = require('../../solutions/binary-search');

describe('Binary Search', () => {
    test('should return true if item exits in array', () => {
        const numArray = [5, 7, 12, 16, 36, 39, 42, 56, 71];
        const key = 42;

        const result = binarySearch(numArray, key);
        expect(result).toBe(true);
    });

    test('should return true if item exits in array', () => {
        const numArray = [5, 7, 12, 16, 36, 39, 42, 56, 71];
        const key = 2;

        const result = binarySearch(numArray, key);
        expect(result).toBe(false);
    });
});