Feature: Product Category Management

  Scenario: Admin creates a new product category
    Given I am an admin
    When I create a category "Electronics"
    Then the category should be available for product assignment

  Scenario: Admin updates a product category
    Given a category "Electronics" exists
    When I update the category name to "Consumer Electronics"
    Then the category name should be updated

  Scenario: Admin deletes a product category
    Given a category "Electronics" exists
    When I delete the category
    Then the category should be removed from the system


Scenario: Admin creates a subcategory under an existing category
  Given I am an admin
  And a category "Electronics" exists
  When I create a subcategory "Mobile Devices" under "Electronics"
  Then the subcategory should be available for product assignment

Scenario: Admin deletes a subcategory
  Given I am an admin
  And a subcategory "Mobile Devices" exists under "Electronics"
  When I delete the subcategory "Mobile Devices"
  Then the subcategory should be removed from the system
