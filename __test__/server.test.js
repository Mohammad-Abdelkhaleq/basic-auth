'use strict ';
const app = require('../src/server.js');
const superTest = require('supertest');
const mockServer = superTest(app.app);
const { db } = require("../src/models/index.js");
const base64 = require('base-64');

beforeAll(async () => {
    await db.sync();
});

describe('Testing our server', () => {
    it ('should create a new user', async () => {
        let obj = {
            username: 'test',
            password: 'test'
        }
        let response = await mockServer.post('/signup').send(obj);
        expect(response.status).toEqual(200);
    });
    it ('should signin with basic auth', async () => {
        let userData=base64.encode('test:test');
        let response = await mockServer.post('/signin').set('Authorization', `Basic ${userData}`);
        expect(response.status).toEqual(200);
    });
});

afterAll(async () => {
    await db.drop();
});