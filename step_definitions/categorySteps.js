// step_definitions/categorySteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const axios = require('axios');

Given('I am an admin', function () {
  this.baseUrl = 'http://localhost:3000';
  console.log("Logged in as admin");
});

When('I create a category {string}', async function (categoryName) {
  try {
    const response = await axios.post(`${this.baseUrl}/categories`, { name: categoryName });
    this.categoryResponse = response;
  } catch (error) {
    this.categoryResponse = error.response;
  }
});

Then('the category should be available for product assignment', function () {
  expect(this.categoryResponse.status).to.equal(201);
});

Given('a category {string} exists', function (categoryName) {
  console.log(`Category ${categoryName} exists`);
});

When('I update the category name to {string}', async function (newCategoryName) {
  try {
    const response = await axios.put(`${this.baseUrl}/categories/123`, { name: newCategoryName });
    this.updateResponse = response;
  } catch (error) {
    this.updateResponse = error.response;
  }
});

Then('the category name should be updated', function () {
  expect(this.updateResponse.status).to.equal(200);
});

When('I delete the category', async function () {
  try {
    const response = await axios.delete(`${this.baseUrl}/categories/123`);
    this.deleteResponse = response;
  } catch (error) {
    this.deleteResponse = error.response;
  }
});

Then('the category should be removed from the system', function () {
  expect(this.deleteResponse.status).to.equal(200);
});
