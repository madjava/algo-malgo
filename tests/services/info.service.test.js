const fs = require('fs');
jest.mock('fs');
fs
    .readFileSync
    .mockReturnValueOnce('FizzBuzz\nCaeser Cipher\nHarmless Ransom Note')
    .mockReturnValueOnce(`FizzBuzz:
                            details 1
                            --
                            Caeser Cipher:
                            details 2`);

const infoService = require('../../services/info.service');

describe('Info Service', () => {

    describe('getSolutions', () => {
        test('should return a list of algorithm solutions', () => {
            const solutions = infoService.getSolutionsList();
            const result = [{
                title: 'FizzBuzz',
                solution: 'fizzbuzz'
            }, {
                title: 'Caeser Cipher',
                solution: 'caeser-cipher'
            }, {
                title: 'Harmless Ransom Note',
                solution: 'harmless-ransom-note'
            }];

            expect(solutions.length).toBe(3);
            expect(solutions).toEqual(result);
            expect(solutions[2].solution).toBe('harmless-ransom-note');
        });
    });

    describe('getSolutionInfo', () => {
        test('should return the correct info for a solution', () => {
            const solutionInfo = infoService.getSolutionInfo('fizzbuzz');

            expect(solutionInfo).toEqual('details 1');
        });
    });

});