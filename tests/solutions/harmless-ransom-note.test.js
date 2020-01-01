const harmlessRansomNote = require('../../solutions/harmless-ransom-note');

describe('Harmless Ransom Note', () => {
    test('should return true if note can be formed from text', () => {
        const noteText = 'this is a secret note for you from a secret admirer';
        const magazineText = 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited';
        
        const result = harmlessRansomNote(noteText, magazineText);

        expect(result).toBe(true);
    });

    test('should return false if note cannot be formed from text', () => {
        const noteText = 'this is a secret note for you from your secret admirer';
        const magazineText = 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited';
        
        const result = harmlessRansomNote(noteText, magazineText);

        expect(result).toBe(false);
    });
});