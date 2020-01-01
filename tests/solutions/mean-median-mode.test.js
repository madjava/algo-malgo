const meanMedianMode = require('../../solutions/mean-median-mode');

describe('Mean Median Mode', () => {
    test('should return the correct result', () => {
        const result = meanMedianMode([9, 10, 23, 10, 23, 9]);

        expect(result).toEqual({ mean: 14, median: 23, mode: [] });
    });
});