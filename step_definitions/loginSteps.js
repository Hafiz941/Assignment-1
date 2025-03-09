const { Given, When, Then } = require('@cucumber/cucumber');

Given('the user has a registered account', function () {
  console.log("User is registered");
});

When('the user logs in with valid credentials', function () {
  console.log("User logs in with valid credentials");
});

Then('the user should be redirected to the dashboard', function () {
  console.log("User is redirected to the dashboard");
});
