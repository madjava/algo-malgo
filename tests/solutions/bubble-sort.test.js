const bubbleSort = require('../../solutions/bubble-sort');

describe('Bubble Sort', () => {
    test('should return the list in sorted order', () => {
        const result = bubbleSort([5, 3, 8, 2, 1, 4]);

        expect(result).toEqual([1, 2, 3, 4, 5, 8]);
    });
});

