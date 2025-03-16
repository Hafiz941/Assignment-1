// step_definitions/userSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const axios = require('axios');

Given('I am an admin', function () {
  // Set the base URL for your API (adjust as necessary)
  this.baseUrl = 'http://localhost:3000';
  console.log("Logged in as admin");
});

When('I send a request to create a new user with name {string}, username {string}, and email {string}', async function (name, username, email) {
  const payload = { name, username, email };
  try {
    const response = await axios.post(`${this.baseUrl}/users`, payload);
    this.userResponse = response;
  } catch (error) {
    this.userResponse = error.response;
  }
});

Then('the user should be created successfully', function () {
  expect(this.userResponse.status).to.equal(201);
});

Given('I am a registered user with username {string}', function (username) {
  console.log(`User ${username} is registered`);
});

When('I update my email to {string}', async function (newEmail) {
  try {
    // Simulate updating user email – adjust endpoint as necessary
    const response = await axios.put(`${this.baseUrl}/users/123`, { email: newEmail });
    this.updateResponse = response;
  } catch (error) {
    this.updateResponse = error.response;
  }
});

Then('my profile should reflect the new email', function () {
  expect(this.updateResponse.status).to.equal(200);
});

When('I delete the user {string}', async function (username) {
  try {
    const response = await axios.delete(`${this.baseUrl}/users/123`);
    this.deleteResponse = response;
  } catch (error) {
    this.deleteResponse = error.response;
  }
});

Then('the user should be removed from the platform', function () {
  expect(this.deleteResponse.status).to.equal(200);
});
