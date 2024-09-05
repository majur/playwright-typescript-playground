Feature: Login to the Contact List

  @jeden
  Scenario: Login with valid credentials
    Given there is a user in database
    And I open the website "https://thinking-tester-contact-list.herokuapp.com"
    When user fills in valid login credentials
    And user clicks in Submit button
    Then Contact list is loaded
