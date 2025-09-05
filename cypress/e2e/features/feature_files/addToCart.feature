Feature: Add to cart

  @requiresLogin
  Scenario: Add backpack to cart
    Given I am in the home page
    And I add to cart the "Sauce Labs Backpack"
    Then the "Remove Sauce LAbs Backpack button" should be displayed and enabled