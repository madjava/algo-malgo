const request = require('supertest');
const app = require('../../app');

describe('Solutions Controller', () => {

    describe('result', () => {
        test('should return the correct result per solution requested', () => {
            return request(app)
                .post('/solution/fizzbuzz')
                .set('Accept', 'application/json')
                .send({ num: 5 })
                .expect(200)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    expect(res.body).toBeTruthy();
                });
        });
    });

});