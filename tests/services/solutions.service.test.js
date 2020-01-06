const solutionsService = require('../../services/solutions.service');
const SolutionNotFoundError = require('../../errors/solution.error');
const InvalidParameterError = require('../../errors/invalid-parameter');

describe('Solutions Service', () => {

    describe('result', () => {
        describe('FizzBuzz', () => {
            const solution = 'fizzbuzz';
            let options = { num: 5 };

            test('should return correct result for solutions', async () => {


                const result = await solutionsService.result(solution, options);

                expect(result).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
            });

            test('should throw error if num property is missing', async () => {
                options = {};
                expect.assertions(1);
                try {
                    await solutionsService.result(solution, options);
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }
            });
        });

        describe('Factorial', () => {
            const solution = 'factorial';
            let options = { num: 5 };

            test('should return the correct result', async () => {
                const result = await solutionsService.result(solution, options);

                expect(result).toEqual(120);
            });
        });

        describe('Caesers Cipher', () => {
            const solution = 'caeser-cipher';
            let options = { text: 'ac', num: 1 };

            test('should return correct result for solutions', async () => {

                const result = await solutionsService.result(solution, options);

                expect(result).toEqual('bd');
            });

            test('should throw error if text or num properties are missing', async () => {
                options = {};
                expect.assertions(1);
                try {
                    await solutionsService.result(solution, options);
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }
            });
        });

        describe('Harmless Ransome Note', () => {
            const solution = 'harmless-ransom-note';
            let options = { note: 'I like you', magazine: 'People say I like you all the time' }

            test('should return correct result for solution', async () => {
                const result = await solutionsService.result(solution, options);

                expect(result).toBe(true);
            });

            test('should throw error if note or magazine properties are missing', async () => {
                options = {};
                expect.assertions(1);
                try {
                    await solutionsService.result(solution, options);
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }
            });
        });

        describe('Palindrome', () => {
            const solution = 'palindrome';
            let options = { word: 'race car' };

            test('should return correct result', async () => {
                const result = await solutionsService.result(solution, options);

                expect(result).toBe(true);
            });

            test('should throw error if word property is missing', async () => {
                options = {};
                expect.assertions(1);
                try {
                    await solutionsService.result(solution, options);
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }
            });
        });

        describe('Reverse Words', () => {
            const solution = 'reverse-words';
            let options = { word: 'abc' };

            test('should return correct result', async () => {
                const result = await solutionsService.result(solution, options);

                expect(result).toEqual('cba');
            });

            test('should throw error if word property is missing', async () => {
                options = {};
                expect.assertions(1);
                try {
                    await solutionsService.result(solution, options);
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }
            });
        });

        describe('Binary Search', () => {
            const solution = 'binary-search';
            let options = { numArray: [2, 3, 4], key: 2 };

            test('should return true if item exists in array', async () => {

                const result = await solutionsService.result(solution, options);

                expect(result).toBe(true);
            });

            test('should throw error if word property is missing', async () => {
                options = {};
                expect.assertions(1);
                try {
                    await solutionsService.result(solution, options);
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }
            });

        });

        describe('Bubble Sort', () => {
            const solution = 'bubble-sort';
            let options = { numArray: [6, 3, 8, 2, 1, 4] };

            test('should return list in sorted order', async () => {
                const result = await solutionsService.result(solution, options);

                expect(result).toEqual([1, 2, 3, 4, 6, 8]);
            });

            test('should throw error if numArray property is missing', async () => {
                options = {};
                try {
                    await solutionsService.result(solution, options)
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }

            });
        });

        describe('Merge Sort', () => {
            const solution = 'merge-sort';
            let options = { numArray: [6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1] };

            test('should return numders in sorted order', async () => {
                const result = await solutionsService.result(solution, options);
                expect(result).toEqual([1, 1, 3, 9, 34, 198, 200, 203, 746, 764, 984, 6000]);
            });

            test('should throw error if numArray property is missing', async () => {
                options = {};
                try {
                    await solutionsService.result(solution, options)
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }

            });
        });

        describe('Mean Median Mode', () => {
            const solution = 'mean-median-mode';
            let options = { numArray: [9, 10, 23, 10, 23, 9] };

            test('should return correct result', async () => {
                const result = await solutionsService.result(solution, options);

                expect(result).toEqual({ mean: 14, median: 23, mode: [] });
            });

            test('should throw error if numArray property is missing', async () => {
                options = {};
                try {
                    await solutionsService.result(solution, options)
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }

            });
        });

        describe('Max Stock Profit', () => {
            const solution = 'max-stock-profit';
            let options = { priceArray: [10, 18, 4, 5, 9, 16, 12] };

            test('should return the correct result', async () => {
                const result = await solutionsService.result(solution, options);

                expect(result).toBe(12);
            });

            test('should throw error if numArray property is missing', async () => {
                options = {};
                try {
                    await solutionsService.result(solution, options)
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }

            });
        });

        describe('Reverse Array', () => {
            const solution = 'reverse-array';
            let options = { numArray: [1, 2, 3] };

            test('should return correct result', async () => {
                const result = await solutionsService.result(solution, options);

                expect(result).toEqual([3, 2, 1]);
            });

            test('should throw error if numArray property is missing', async () => {
                options = {};
                try {
                    await solutionsService.result(solution, options)
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }

            });
        });

        describe('Two Sum', () => {
            const solution = 'two-sum';
            let options = { numArray: [40, 11, 19, 17, -12], sum: 28 };

            test('should return the correct result', async () => {
                const result = await solutionsService.result(solution, options);

                expect(result).toEqual([[17, 11], [-12, 40]]);
            });
        });

        describe('Sieve Of Eratosthenes', () => {
            const solution = 'sieve-of-eratosthenes';
            let options = { num: 10 };

            test('should return currect result', async () => {
                const result = await solutionsService.result(solution, options);
                expect(result).toEqual([2, 3, 5, 7]);
            });

            test('should throw error if num property is missing', async () => {
                options = {};
                expect.assertions(1);
                try {
                    await solutionsService.result(solution, options);
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }
            });
        });

        describe('Fibonacci Memoized', () => {
            const solution = 'fibonacci-memoized';
            let options = { position: 10 };

            test('should return the correct result', async () => {
                const result = await solutionsService.result(solution, options);
                expect(result).toBe(55);
            });

            test('should throw error if num property is missing', async () => {
                options = {};
                expect.assertions(1);
                try {
                    await solutionsService.result(solution, options);
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }
            });
        });

        describe('Anagrams', () => {
            const solution = 'anagrams';
            let options = {phrase1: 'qwerty', phrase2: 'ytrewq'};
            test('should return the correct result', async () => {
                const result = await solutionsService.result(solution, options);

                expect(result).toBe(true);
            });

            test('should throw error if required or property are missing', async () => {
                options = {};
                expect.assertions(1);
                try {
                    await solutionsService.result(solution, options);
                } catch (e) {
                    expect(e instanceof InvalidParameterError).toBe(true);
                }
            });
        });

        describe('Number To Roman', () => {
            const solution = 'number-to-roman';
            let options = { num: 16 }

            test('should return the correct result', async () => {
                const result = await solutionsService.result(solution, options);
                
                expect(result).toBe('XVI');
            });
        });

        test('should throw error for none existing solutions', async () => {
            const solution = 'none-existing';
            const options = { num: 5 };

            expect.assertions(1);
            try {
                await solutionsService.result(solution, options);
            } catch (e) {
                expect(e.message).toMatch('does not exist');
            }
        });
    });

});