Feature: Login Test
  As a User I should be able to login and logout with valid credentials

  Scenario: User should navigate to login page successfully
    Given User on homepage
    When User  click on login link
    Then User should navigate to login page successfully
    And User verify The Welcome, Please Sign In! message display

  Scenario: Verify that User should login successfully with valid credentials
    Given User on homepage
    When User  click on login link
    And User enter email "radhikap@gmail.com"
    And User enter password "Krisha86@"
    And User  click on login button
    Then User verify the Log out link display

  Scenario: Verify the error message with Invalid Credentials
    Given User on homepage
    When User  click on login link
    And User enter email "sonapate21@gmail.com"
    And User enter password "rdhtn"
    And User  click on login button
    Then User should verify the error message display

  Scenario: Verify that user should logout Successfully
    Given User on homepage
    When User  click on login link
    And User enter email "radhikap@gmail.com"
    And User enter password "Krisha86@"
    And User  click on login button
    And User click on Log Out Link
    Then User should verify  login link display
