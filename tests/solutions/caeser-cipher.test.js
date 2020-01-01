const caesarCipher = require('../../solutions/caeser-cipher');

describe('Caeser Cipher', () => {
    test('should return correct value when positive number is passed', () => {
        const result = caesarCipher('Zoo Keeper', 2);

        expect(result).toBe('Bqq Mggrgt');
    });

    test('should return correct value when negative number is passed', () => {
        const result = caesarCipher('Big Car', -16);

        expect(result).toBe('Lsq Mkb');
    });

    test('should return correct values when very large number is passed', () => {
        const result = caesarCipher('Javascript', -900);

        expect(result).toBe('Tkfkcmbszd');
    });
});
