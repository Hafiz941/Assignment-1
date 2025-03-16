Feature: Order Management

  Scenario: User adds an item to the shopping cart
    Given I am logged in as "john123"
    When I add the product "Laptop" to my cart
    Then the product should be added to my shopping cart

  Scenario: User places an order
    Given I have items in my shopping cart
    When I complete the payment for the order
    Then the order should be created successfully

  Scenario: User cancels an order in processing state
    Given I have an order in "processing" state
    When I cancel the order
    Then the order should be canceled


Scenario: User modifies an order in processing state
  Given I have an order in "processing" state
  When I update the order by adding another item
  Then the order should reflect the updated items


Scenario: User views order history filtered by state
  Given I am logged in as a user
  When I request to view my order history filtered by "shipped" status
  Then I should see only orders that have been shipped
