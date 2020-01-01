const palindrome = require('../../solutions/palindrome');

describe('Palindrome', () => {
    test('should test if string is a palindrome', () => {
        const result = palindrome('race car');

        expect(result).toBe(true);
    });

    test('should test if string is not a palindrome', () => {
        const result = palindrome('javascript');

        expect(result).toBe(false);
    });
});