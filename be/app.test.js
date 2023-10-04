const request = require('supertest');
const app = require('./app');

describe('Express App', () => {
    test('./hello should return hello world', async() => {
        const resp = await request(app).get('/hello');
        expect(resp.status).toEqual(200);
        expect(resp.text).toEqual('Hello World!');
    });

    test('/date should return the current date', async () => {
        const resp = await request(app).get('/date');
        expect(resp.status).toEqual(200);
        expect(resp.text).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
})



