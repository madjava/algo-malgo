const twoSum = require('../../solutions/two-sum');

describe('Two Sum', () => {
    test('should return the correct result', () => {
        const result = twoSum([1, 6, 4, 5, 3, 3], 7);

        expect(result).toEqual([[6, 1], [3, 4], [3, 4]]);

    });
});