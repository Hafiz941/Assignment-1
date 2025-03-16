Feature: Product Search
  Scenario: Search for products with a valid query
    Given I have a valid search query
    When I send a product search request
    Then I should receive a list of matching products


  Scenario: Search products by category
    Given there are products in various categories
    When I search for products in the "Electronics" category
    Then I should see only products in the "Electronics" category

  Scenario: Search products by price range
    Given there are products with different prices
    When I filter products between 500 and 1000
    Then I should see only products with prices in that range

  Scenario: Search products by status
    Given there are both active and ended products
    When I filter for active products
    Then I should only see active products



Scenario: Search products by category and price range
  Given there are products in various categories and prices
  When I search for products in the "Electronics" category with a price between 500 and 1500
  Then I should only see products that match both filters

Scenario: Filter products by active status
  Given there are both active and ended products
  When I filter for active products
  Then I should only see products that are active


