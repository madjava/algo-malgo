const reverseWords = require('../../solutions/reverse-words');

describe('Reserve Words', () => {
    test('should reverse the string of words properly', () => {
        const result = reverseWords('some of words');

        expect(result).toBe('emos fo sdrow');
    });
});