Feature: Login to the Contact List

  @all @invalid @login
  Scenario: Login with valid credentials
    Given the website "https://thinking-tester-contact-list.herokuapp.com" is opened with generated user
    When user fills in invalid login credentials
    And user clicks in Submit button
    Then error shows up
