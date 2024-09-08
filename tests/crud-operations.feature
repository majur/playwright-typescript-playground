Feature: CRUD Operations

  @all @crud @create
  Scenario: Create contact
    Given the website "https://thinking-tester-contact-list.herokuapp.com" is opened with generated user
    When user fills in valid login credentials
    And user clicks on Submit button
    And user clicks on Add a New Contact button
    And user fills required fields
    And user clicks on Submit button
    Then contact is created

@all @crud @read
Scenario: Read contact
    Given the website "https://thinking-tester-contact-list.herokuapp.com" is opened with generated user
    When user fills in valid login credentials
    And user clicks on Submit button
    And user clicks on Add a New Contact button
    And user fills required fields
    And user clicks on Submit button
    Then all data are correct

@all @crud @update
Scenario: Update contact
    Given the website "https://thinking-tester-contact-list.herokuapp.com" is opened with generated user
    And contact is in database
    When user opens contact detail
    And update contact
    Then contact is updated

@all @crud @delete
Scenario: Delete contact
    Given the website "https://thinking-tester-contact-list.herokuapp.com" is opened with generated user
    And contact is in database
    When user opens contact detail
    And delete contact
    Then contact is deleted