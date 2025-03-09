Feature: Product Management

  Scenario: User creates a new product listing
    Given I am a registered user
    When I create a product "Laptop" with description "High performance gaming laptop", category "Electronics", available units 5, valid until "2025-12-31", and price 1000
    Then the product should be listed on the platform

  Scenario: User updates product details
    Given I have a product "Laptop"
    When I update its price to 900
    Then the product should show the updated price

  Scenario: User deletes a product listing
    Given I have a product "Laptop"
    When I delete the product
    Then the product should no longer be available



Scenario: User lists a product under multiple categories
  Given I am a registered user
  When I create a product "Smartphone" with description "Latest model", categories "Electronics" and "Gadgets", 10 units available, valid until "2025-12-31", and price 800
  Then the product should be listed with both categories

Scenario: User updates product description
  Given I have a product "Smartphone"
  When I update the product description to "Latest model with improved battery life"
  Then the product details should be updated accordingly
