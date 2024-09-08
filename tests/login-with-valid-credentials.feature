Feature: Login to the Contact List

  @all @valid @login
  Scenario: Login with valid credentials
    Given the website "https://thinking-tester-contact-list.herokuapp.com" is opened with generated user
    When user fills in valid login credentials
    And user clicks in Submit button
    Then Contact list is loaded
