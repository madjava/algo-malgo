const fizzBuzz = require('../../solutions/fizzbuzz');

describe('Fizz Buzz', () => {
    test('should return the correct length of numbers', () => {
        const result = fizzBuzz(5);
        expect(result.length).toBe(5);
    });

    test('should return the correct result', () => {
        const result = fizzBuzz(20);
        expect(result).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz']);
    });
});
