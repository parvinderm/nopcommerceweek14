Feature: Computer Page Test
  As a User I want to test the functionality of  Computer Page

  Scenario:Verify User Should Navigate To Computer Page Successfully()
    Given User on homepage
    When User click on Computer Link
    Then User should navigate to Computer Page successfully

  Scenario: verify User Should Navigate To Desktops Page Successfully
    Given User on homepage
    When User click on Computer Link
    And User click on Desktops link
    Then User verify Desktops text

  Scenario Outline: verify That User Should Build Own Computer And Add Them To Cart Successfully
    Given User on homepage
    When User click on Computer Link
    And User click on Desktops link
    And User click on Build your own computer
    And User select processor "<Processor>"
    And User select ram "<Ram>"
    And User select hdd"<HDD>"
    And User select Os  "<OS>"
    And User select software "<Software>"
    And User click on ADD TO CART Button
    Then User verify The product has been aadded to your shopping cart
    Examples:
      | Processor                                       | Ram           | HDD               | OS                      | Software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | VistaHome [+$50.00]     | Total Commander [+$5.00]   |


