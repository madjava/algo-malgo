const numberToRoman = require('../../solutions/number-to-roman');
describe('Number To Roman', () => {
    test('should return \'NA\' if incorrect parameters are provided', () => {
        let result = numberToRoman(-0);
        let result2 = numberToRoman('2');
        let result3 = numberToRoman();
        let result4 = numberToRoman('a word');

        expect(result).toBe('NA');
        expect(result2).not.toBe('NA');
        expect(result3).toBe('NA');
        expect(result4).toBe('NA');
    });
});