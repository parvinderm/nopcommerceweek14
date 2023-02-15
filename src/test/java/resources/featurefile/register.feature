Feature: Register

  @Register
  Scenario: Verify user Should Navigate to Register Page Successfully
    Given User on homepage
    When User Click on Register link
    And User verify Register text

  Scenario Outline: verify That First Name Last Name Email Password And Confirm Password Fields Are Mandatory
    Given User on homepage
    When User Click on Register link
    And User enter first name "<First name>"
    And User enter last name "<Last name>"
    And User enter email "<email>"
    And User enter password "<password>"
    And User enter Confirm password "<Confirm Password>"
    And User click on REGISTER Button
    Then User should verify the error message "<error message>"
    Examples:
      | First name | Last name | email                | password | Confirm Password | error message           |
      |            | dhanani   | catdhanani@gmail.com | 123456   | 123456           | First name is required. |
      | cat        |           | catdhanani@gmail.com | 123456   | 123456           | Last name is required.  |
      | cat        | dhanani   |                      | 123456   | 123456           | Email is required.      |
      | cat        | dhanani   | catdhanani@gmail.com |          | 123456           | Password is required.   |
      | cat        | dhanani   | catdhanani@gmail.com | 123456   |                  | Password is required.   |

  Scenario: verify That User Should Create Account Successfully
    Given User on homepage
    When User Click on Register link
    And User select gender Female
    And User enter first name "rupa"
    And User enter last name "dhanani"
    And User select Day "8"
    And User select Month "april"
    And  User select Year  "1986"
    And User enter email "rupapatel@gmail.com"
    And User enter password "24567898"
    And User enter Confirm password "24567898"
    And User click on REGISTER Button
    Then User should verify Your registration completed


