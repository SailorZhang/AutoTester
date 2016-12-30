Feature: Create folder feature
  As a user of Contract Documents Library
  I want to create a folder in the CDL system
  So that I can create folder and create sub folder
  
  Scenario: Create top level folder
    Given I login CDL, I choose a contract.
    When I click on NewFolder button, and input folder name, click OK.
    Then I should see the input name of folder and total files count increase 2.

  Scenario: Create second leavel folder
  	Given I login CDL, I choose a contract.
  	When I create a folder, I open this new folder, the new folder files count is 0.
  	When I create a sub folder in the new folder.
  	Then I should see the sub folder in the new folder and files count is 2.
