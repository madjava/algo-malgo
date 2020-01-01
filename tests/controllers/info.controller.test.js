const request = require('supertest');
const app = require('../../app');
const infoService = require('../../services/info.service');
jest.mock('../../services/info.service');

describe('Info Controller', () => {
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

    beforeEach(() => {
        infoService.getSolutionsList.mockImplementation(() => {
            return result;
        });
        infoService.getSolutionInfo.mockImplementation(() => {
            return 'details 1';
        });
    });

    afterEach(() => {
        infoService.getSolutionsList.mockReset();
        infoService.getSolutionInfo.mockReset();
    });

    test('should return a list of solutions', () => {
        return request(app)
            .get('/info')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect((res) => {
                expect(res.body.length).toBe(3);
                expect(infoService.getSolutionsList).toHaveBeenCalledTimes(1);
            });
    });

    test('should return correct info for requested solution', () => {
        return request(app)
            .get('/info/fizzbuzz')
            .expect(200)
            .expect('Content-Type', /plain/)
            .expect((res) => {
                expect(res.text).toEqual('details 1');
                expect(infoService.getSolutionInfo).toHaveBeenCalledTimes(1);
            })
    });
});
