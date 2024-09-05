Feature: Login to the Contact List
  Scenario: Login with valid credentials
    Given there is a user in database # toto cez backend
    And login page is loaded
    When user fills in invalid login credentials
    And user clicks in Submit button
    Then error show up
