const request = require('supertest');
const app = require('../app');

describe('app', () => {
    test('should return 302 status code when base rout is hit', () => {
        return request(app)
            .get('/')
            .expect(302)
            .expect('Location', '/info');
    });

    test('should return 404 when route doe not exisit', () => {
        return request(app)
            .get('/notexists')
            .expect(404)
    });
});