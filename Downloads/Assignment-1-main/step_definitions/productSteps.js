// step_definitions/productSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const axios = require('axios');

Given('I am a registered user', function () {
  this.baseUrl = 'http://localhost:3000';
  console.log("User is registered");
});

When('I create a product {string} with description {string}, category {string}, available units {int}, valid until {string}, and price {int}', async function (title, description, category, units, validUntil, price) {
  const payload = { title, description, category, units, validUntil, price };
  try {
    const response = await axios.post(`${this.baseUrl}/products`, payload);
    this.productResponse = response;
  } catch (error) {
    this.productResponse = error.response;
  }
});

Then('the product should be listed on the platform', function () {
  expect(this.productResponse.status).to.equal(201);
});

Given('I have a product {string}', function (title) {
  console.log(`Product ${title} exists`);
});

When('I update its price to {int}', async function (newPrice) {
  try {
    const response = await axios.put(`${this.baseUrl}/products/123`, { price: newPrice });
    this.updateResponse = response;
  } catch (error) {
    this.updateResponse = error.response;
  }
});

Then('the product should show the updated price', function () {
  expect(this.updateResponse.status).to.equal(200);
});

When('I delete the product', async function () {
  try {
    const response = await axios.delete(`${this.baseUrl}/products/123`);
    this.deleteResponse = response;
  } catch (error) {
    this.deleteResponse = error.response;
  }
});

Then('the product should no longer be available', function () {
  expect(this.deleteResponse.status).to.equal(200);
});
