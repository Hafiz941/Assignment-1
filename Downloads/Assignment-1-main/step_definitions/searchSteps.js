// step_definitions/searchSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const axios = require('axios');
const endpoints = require('../endpoints');

let response;

Given('I have a valid search query', function () {
    this.query = { keyword: 'laptop' };
});

When('I send a product search request', async function () {
    response = await axios.get(endpoints.SEARCH_PRODUCTS, { params: this.query });
});

Then('I should receive a list of matching products', function () {
    if (!response.data || response.data.length === 0) {
        throw new Error('No products found');
    }
});

Given('there are products in various categories', function () {
  this.baseUrl = 'http://localhost:3000';
  console.log("Products exist in different categories");
});

When('I search for products in the {string} category', async function (category) {
  try {
    const response = await axios.get(`${this.baseUrl}/products?category=${category}`);
    this.searchResponse = response;
  } catch (error) {
    this.searchResponse = error.response;
  }
});

Then('I should see only products in the {string} category', function (category) {
  const products = this.searchResponse.data;
  products.forEach(product => {
    expect(product.category).to.equal(category);
  });
});

Given('there are products with different prices', function () {
  console.log("Products with various prices exist");
});

When('I filter products between {int} and {int}', async function (minPrice, maxPrice) {
  try {
    const response = await axios.get(`${this.baseUrl}/products?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    this.searchResponse = response;
  } catch (error) {
    this.searchResponse = error.response;
  }
});

Then('I should see only products with prices in that range', function () {
  const products = this.searchResponse.data;
  products.forEach(product => {
    expect(product.price).to.be.within(500, 1000);
  });
});

Given('there are both active and ended products', function () {
  console.log("Active and ended products exist");
});

When('I filter for active products', async function () {
  try {
    const response = await axios.get(`${this.baseUrl}/products?status=active`);
    this.searchResponse = response;
  } catch (error) {
    this.searchResponse = error.response;
  }
});

Then('I should only see active products', function () {
  const products = this.searchResponse.data;
  products.forEach(product => {
    expect(product.status).to.equal('active');
  });
});
