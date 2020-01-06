const numberToRoman = require('../../solutions/number-to-roman');
describe('Number To Roman', () => {
    test('should return \'NA\' if incorrect parameters are provided', () => {
        const result = numberToRoman(-0);
        const result2 = numberToRoman('2');
        const result3 = numberToRoman();
        const result4 = numberToRoman('a word');

        expect(result).toBe('NA');
        expect(result2).not.toBe('NA');
        expect(result3).toBe('NA');
        expect(result4).toBe('NA');
    });

    test('should return the correct result', () => {
        expect(numberToRoman(16)).toEqual('XVI');
        expect(numberToRoman(1)).toEqual('I');
    });
});