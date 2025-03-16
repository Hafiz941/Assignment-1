Feature: User Management

  Scenario: Admin creates a new user
    Given I am an admin
    When I send a request to create a new user with name "John Doe", username "john123", and email "john@example.com"
    Then the user should be created successfully

  Scenario: User updates their profile
    Given I am a registered user with username "john123"
    When I update my email to "newjohn@example.com"
    Then my profile should reflect the new email

  Scenario: Admin deletes a user
    Given I am an admin
    When I delete the user "john123"
    Then the user should be removed from the platform



Scenario: End user registers an account
  Given I am a new user
  When I register with name "Alice Smith", username "aliceS", and email "alice@example.com"
  Then my account should be created successfully

Scenario: Registered user updates profile information
  Given I am a registered user with username "aliceS"
  When I update my name to "Alice M. Smith"
  Then my profile should reflect the new name
