const request = require('supertest');
const server = require('../server.js');

describe('names router', () => {
    describe('GET /', () => {
        test('should return 200 OK', () => {
            return request(server).get('/api/').then(res => {
                expect(res.status).toBe(200);
            })
        });
        test('should return names as router value', () => {
            return request(server).get('/api/').then(res => {
                expect(res.body[1].name).toBe('Sherman');
            })
        });
    });
    describe('GET /:name', () => {
        test('should return 200 OK', () => {
            return request(server).get('/api/Sherman').then(res => {
                expect(res.status).toBe(200);
            })
        });
        test('should return ID as router value', () => {
            return request(server).get('/api/Sherman').then(res => {
                expect(res.body.id).toBe(2);
            })
        });
    });
    describe('DELETE /:name', () => {
        test('should return 200 OK', () => {
            return request(server).delete('/api/Ian').then(res => {
                expect(res.status).toBe(200);
            })
        });
        test('should return 404, does not exist', () => {
            return request(server).delete('/api/Andrew').then(res => {
                expect(res.status).toBe(404);
            })
        });
    });
});