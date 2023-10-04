const request = require('supertest');
const dayjs = require('dayjs');
const app = require('./app');

describe('Express App', () => {
    test('./hello should return hello world', async() => {
        const resp = await request(app).get('/hello');
        expect(resp.status).toEqual(200);
        expect(resp.text).toEqual('Hello World!');
    });

    test('/date should return the current date', async () => {
        const currentDate = dayjs().format('YYYY-MM-DD'); 
        const resp = await request(app).get('/date');       
        expect(resp.status).toEqual(200);
        expect(resp.text).toEqual(currentDate);
    });

    test('/time should return the current time', async () => {
        const currentTime = dayjs().format('HH:mm:ss');
        const resp = await request(app).get('/time');
        expect(resp.status).toEqual(200);
        expect(resp.text).toEqual(currentTime);
    });
    
    test('/datetime should return the current date and time', async () => {
        const currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
        const resp = await request(app).get('/datetime');
        expect(resp.status).toEqual(200);
        expect(resp.text).toEqual(currentDateTime);
    });
})



