const reverseArray = require('../../solutions/reverse-array');

describe('Reverse Array', () => {
    test('should return correct result', () => {
        const result = reverseArray([3,4,5]);

        expect(result).toEqual([5,4,3]);
    });
});