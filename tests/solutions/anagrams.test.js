const isAnagram = require('../../solutions/anagrams');

describe('Anagrams', () => {

    test('should return true if parameters are anagrams', () => {
        const result = isAnagram('cinema', 'iceman');

        expect(result).toEqual(true);
    });

    test('should return false if parameters are anagrams', () => {
        const result = isAnagram('cinemas', 'iceman');

        expect(result).toEqual(false);
    })
});