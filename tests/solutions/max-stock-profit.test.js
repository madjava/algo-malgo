const maxStockProfit = require('../../solutions/max-stock-profit.js');

describe('Max Stock Profit', () => {
    test('should return the correct result', () => {
        const result = maxStockProfit([10, 18, 4, 5, 9, 16, 12]);

        expect(result).toBe(12);
    });
});