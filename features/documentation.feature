Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the Cucumber.js GitHub repository
    When I click on "angular.bind"
    Then I should see "function currying"

  Scenario: Open website
    Given I want to open baidu website
    When I visit "https://www.baidu.com"
    Then I should see "百度一下，你就知道" as page title