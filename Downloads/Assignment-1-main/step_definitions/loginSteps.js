const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const endpoints = require('../endpoints');

let response;

Given('I have valid login credentials', function () {
    this.credentials = {
        username: 'testuser',
        password: 'password123',
    };
});

Given('I have invalid login credentials', function () {
    this.credentials = {
        username: 'invaliduser',
        password: 'wrongpassword',
    };
});

When('I send a login request', async function () {
    try {
        response = await axios.post(endpoints.LOGIN, this.credentials);
    } catch (err) {
        response = err.response;
    }
});

Then('I should receive a successful login response', function () {
    if (response.status !== 200) {
        throw new Error(`Expected status 200 but got ${response.status}`);
    }
});

Then('I should receive an error response', function () {
    if (response.status !== 401) {
        throw new Error(`Expected status 401 but got ${response.status}`);
    }
});