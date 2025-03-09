Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given the user has a registered account
    When the user logs in with valid credentials
    Then the user should be redirected to the dashboard
