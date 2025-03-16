Feature: User Login

  Scenario: Successful login
    Given I have valid login credentials
    When I send a login request
    Then I should receive a successful login response

  Scenario: Login with invalid credentials
    Given I have invalid login credentials
    When I send a login request
    Then I should receive an error response