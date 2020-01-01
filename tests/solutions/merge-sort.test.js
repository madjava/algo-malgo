const mergeSort = require('../../solutions/merge-sort');

describe('Merge Sort', () => {
    test('should return items in sorted order', () => {
        const result = mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);

        expect(result).toEqual([1, 1, 3, 9, 34, 198, 200, 203, 746, 764, 984, 6000]);
    });
});