Feature: Login to website

  @requiresLogin
  Scenario: login to website using valid credentials
    Given I am in the home page
    Then I should be on the "Products" page
    