// step_definitions/orderSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const axios = require('axios');
const endpoints = require('../endpoints');

let response;

Given('I have order details', function () {
    this.orderDetails = {
        productId: '12345',
        quantity: 2,
    };
});

When('I send a create order request', async function () {
    response = await axios.post(endpoints.CREATE_ORDER, this.orderDetails);
});

Then('I should receive a successful order creation response', function () {
    if (response.status !== 201) {
        throw new Error(`Expected status 201 but got ${response.status}`);
    }
});
Given('I am logged in as {string}', function (username) {
  this.baseUrl = 'http://localhost:3000';
  console.log(`User ${username} is logged in`);
});

When('I add the product {string} to my cart', async function (productName) {
  try {
    const response = await axios.post(`${this.baseUrl}/cart`, { product: productName });
    this.cartResponse = response;
  } catch (error) {
    this.cartResponse = error.response;
  }
});

Then('the product should be added to my shopping cart', function () {
  expect(this.cartResponse.data.cart).to.include("Laptop");
});

Given('I have items in my shopping cart', function () {
  console.log("Items exist in the shopping cart");
});

When('I complete the payment for the order', async function () {
  try {
    const response = await axios.post(`${this.baseUrl}/orders`, { cart: "items" });
    this.orderResponse = response;
  } catch (error) {
    this.orderResponse = error.response;
  }
});

Then('the order should be created successfully', function () {
  expect(this.orderResponse.status).to.equal(201);
});

Given('I have an order in {string} state', function (state) {
  console.log(`Order is in ${state} state`);
});

When('I cancel the order', async function () {
  try {
    const response = await axios.delete(`${this.baseUrl}/orders/123`);
    this.cancelResponse = response;
  } catch (error) {
    this.cancelResponse = error.response;
  }
});

Then('the order should be canceled', function () {
  expect(this.cancelResponse.status).to.equal(200);
});
