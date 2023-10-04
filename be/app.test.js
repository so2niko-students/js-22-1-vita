const request = require('supertest');
const app = require('./app');

describe('Express App', () => {
    test('./hello should return hello world', async() => {
        const resp = await request(app).get('/hello');
        expect(resp.status).toEqual(200);
        expect(resp.text).toEqual('Hello World!');
    })
})