$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Test",
  "description": "As a User I want to test the functionality of  Computer Page",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5155687600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify User Should Navigate To Computer Page Successfully()",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully()",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Computer Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should navigate to Computer Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 105944300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnComputerLink()"
});
formatter.result({
  "duration": 903014600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userShouldNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 66054900,
  "status": "passed"
});
formatter.after({
  "duration": 107800,
  "status": "passed"
});
formatter.before({
  "duration": 2492246900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User click on Computer Link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verify Desktops text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnComputerLink()"
});
formatter.result({
  "duration": 1183666500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnDesktopsLink()"
});
formatter.result({
  "duration": 20787439000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userVerifyDesktopsText()"
});
formatter.result({
  "duration": 60569100,
  "status": "passed"
});
formatter.after({
  "duration": 38100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on Computer Link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select processor \"\u003cProcessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select ram \"\u003cRam\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select hdd\"\u003cHDD\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select Os  \"\u003cOS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select software \"\u003cSoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User verify The product has been aadded to your shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "Processor",
        "Ram",
        "HDD",
        "OS",
        "Software"
      ],
      "line": 28,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 29,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 30,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistaHome [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 31,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1897401500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on Computer Link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select hdd\"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select Os  \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User verify The product has been aadded to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnComputerLink()"
});
formatter.result({
  "duration": 1089525700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnDesktopsLink()"
});
formatter.result({
  "duration": 20866398800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 21293471200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.userSelectProcessor(String)"
});
formatter.result({
  "duration": 281296600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.userSelectRam(String)"
});
formatter.result({
  "duration": 278551600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 16
    }
  ],
  "location": "ComputerSteps.userSelectHdd(String)"
});
formatter.result({
  "duration": 121969200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.userSelectOs(String)"
});
formatter.result({
  "duration": 75860800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.userSelectSoftware(String)"
});
formatter.result({
  "duration": 54608500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 54907800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userVerifyTheProductHasBeenAaddedToYourShoppingCart()"
});
formatter.result({
  "duration": 710413700,
  "status": "passed"
});
formatter.after({
  "duration": 19300,
  "status": "passed"
});
formatter.before({
  "duration": 3062375500,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on Computer Link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select hdd\"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select Os  \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User verify The product has been aadded to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 25700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnComputerLink()"
});
formatter.result({
  "duration": 1249683100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnDesktopsLink()"
});
formatter.result({
  "duration": 20718512700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 21172882100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.userSelectProcessor(String)"
});
formatter.result({
  "duration": 420328900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.userSelectRam(String)"
});
formatter.result({
  "duration": 231892500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 16
    }
  ],
  "location": "ComputerSteps.userSelectHdd(String)"
});
formatter.result({
  "duration": 80118600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.userSelectOs(String)"
});
formatter.result({
  "duration": 67014800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.userSelectSoftware(String)"
});
formatter.result({
  "duration": 72023200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 64251800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userVerifyTheProductHasBeenAaddedToYourShoppingCart()"
});
formatter.result({
  "duration": 713634800,
  "status": "passed"
});
formatter.after({
  "duration": 19700,
  "status": "passed"
});
formatter.before({
  "duration": 2739277000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on Computer Link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select hdd\"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select Os  \"VistaHome [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User verify The product has been aadded to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnComputerLink()"
});
formatter.result({
  "duration": 1016434200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnDesktopsLink()"
});
formatter.result({
  "duration": 20542245600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 20771651300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.userSelectProcessor(String)"
});
formatter.result({
  "duration": 60516200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.userSelectRam(String)"
});
formatter.result({
  "duration": 91293200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 16
    }
  ],
  "location": "ComputerSteps.userSelectHdd(String)"
});
formatter.result({
  "duration": 52396100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VistaHome [+$50.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.userSelectOs(String)"
});
formatter.result({
  "duration": 63120900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.userSelectSoftware(String)"
});
formatter.result({
  "duration": 57168200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 70101700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userVerifyTheProductHasBeenAaddedToYourShoppingCart()"
});
formatter.result({
  "duration": 646263300,
  "status": "passed"
});
formatter.after({
  "duration": 28000,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a User I should be able to login and logout with valid credentials",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2733311900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User  click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should navigate to login page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User verify The Welcome, Please Sign In! message display",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 46700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 1173011100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 136073100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userVerifyTheWelcomePleaseSignInMessageDisplay()"
});
formatter.result({
  "duration": 61875500,
  "status": "passed"
});
formatter.after({
  "duration": 31500,
  "status": "passed"
});
formatter.before({
  "duration": 3003976100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify that User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User  click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter email \"radhikap@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"Krisha86@\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User  click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User verify the Log out link display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 478071700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "radhikap@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 105281700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Krisha86@",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 81440000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 566522700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userVerifyTheLogOutLinkDisplay()"
});
formatter.result({
  "duration": 73425300,
  "status": "passed"
});
formatter.after({
  "duration": 21200,
  "status": "passed"
});
formatter.before({
  "duration": 3054253100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the error message with Invalid Credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User  click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enter email \"sonapate21@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter password \"rdhtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User  click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should verify the error message display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 636216600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sonapate21@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 489767300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rdhtn",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 195522200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 516043000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldVerifyTheErrorMessageDisplay(String)"
});
formatter.result({
  "duration": 389900,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.demo.steps.LoginSteps.userShouldVerifyTheErrorMessageDisplay(String) in file:/C:/Homework/nopcommerceweek14/target/test-classes/\u0027 with pattern [^User should verify the error message display$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then User should verify the error message display\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 667842500,
  "status": "passed"
});
formatter.before({
  "duration": 3254305100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify that user should logout Successfully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User  click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User enter email \"radhikap@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter password \"Krisha86@\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User  click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on Log Out Link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should verify  login link display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 531386500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "radhikap@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 123121700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Krisha86@",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 85012000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 978164500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLogOutLink()"
});
formatter.result({
  "duration": 1038953200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldVerifyLoginLinkDisplay(String)"
});
formatter.result({
  "duration": 239400,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.demo.steps.LoginSteps.userShouldVerifyLoginLinkDisplay(String) in file:/C:/Homework/nopcommerceweek14/target/test-classes/\u0027 with pattern [^User should verify  login link display$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then User should verify  login link display\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1923343900,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3978866600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify user Should Navigate to Register Page Successfully",
  "description": "",
  "id": "register;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User verify Register text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 30600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1382686100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userVerifyRegisterText()"
});
formatter.result({
  "duration": 161473300,
  "status": "passed"
});
formatter.after({
  "duration": 170700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "verify That First Name Last Name Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User Click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter first name \"\u003cFirst name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter last name \"\u003cLast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter Confirm password \"\u003cConfirm Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on REGISTER Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should verify the error message \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "First name",
        "Last name",
        "email",
        "password",
        "Confirm Password",
        "error message"
      ],
      "line": 20,
      "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "",
        "dhanani",
        "catdhanani@gmail.com",
        "123456",
        "123456",
        "First name is required."
      ],
      "line": 21,
      "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;2"
    },
    {
      "cells": [
        "cat",
        "",
        "catdhanani@gmail.com",
        "123456",
        "123456",
        "Last name is required."
      ],
      "line": 22,
      "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;3"
    },
    {
      "cells": [
        "cat",
        "dhanani",
        "",
        "123456",
        "123456",
        "Email is required."
      ],
      "line": 23,
      "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;4"
    },
    {
      "cells": [
        "cat",
        "dhanani",
        "catdhanani@gmail.com",
        "",
        "123456",
        "Password is required."
      ],
      "line": 24,
      "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;5"
    },
    {
      "cells": [
        "cat",
        "dhanani",
        "catdhanani@gmail.com",
        "123456",
        "",
        "Password is required."
      ],
      "line": 25,
      "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4190402300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify That First Name Last Name Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User Click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter first name \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter last name \"dhanani\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter email \"catdhanani@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter password \"123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter Confirm password \"123456\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on REGISTER Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should verify the error message \"First name is required.\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1201483400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 356953000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhanani",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userEnterLastName(String)"
});
formatter.result({
  "duration": 511266600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "catdhanani@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 374196500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 256305700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.userEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 232769400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnREGISTERButton()"
});
formatter.result({
  "duration": 209432700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 38
    }
  ],
  "location": "RegisterSteps.userShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 73512400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[First name is required.]\u003e but was:\u003c[*]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.nopcommerce.demo.steps.RegisterSteps.userShouldVerifyTheErrorMessage(RegisterSteps.java:45)\r\n\tat ✽.Then User should verify the error message \"First name is required.\"(register.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 778481600,
  "status": "passed"
});
formatter.before({
  "duration": 4774350900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify That First Name Last Name Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User Click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter first name \"cat\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter last name \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter email \"catdhanani@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter password \"123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter Confirm password \"123456\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on REGISTER Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should verify the error message \"Last name is required.\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 42600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 871202200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cat",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 210063300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userEnterLastName(String)"
});
formatter.result({
  "duration": 245577200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "catdhanani@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 479792200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 430736300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.userEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 306177400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnREGISTERButton()"
});
formatter.result({
  "duration": 135508900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 38
    }
  ],
  "location": "RegisterSteps.userShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 56554300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Last name is required.]\u003e but was:\u003c[*]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.nopcommerce.demo.steps.RegisterSteps.userShouldVerifyTheErrorMessage(RegisterSteps.java:45)\r\n\tat ✽.Then User should verify the error message \"Last name is required.\"(register.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 887450000,
  "status": "passed"
});
formatter.before({
  "duration": 5270871700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify That First Name Last Name Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User Click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter first name \"cat\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter last name \"dhanani\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter email \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter password \"123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter Confirm password \"123456\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on REGISTER Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should verify the error message \"Email is required.\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 66100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 784260800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cat",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 106382200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhanani",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userEnterLastName(String)"
});
formatter.result({
  "duration": 173962000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 80435500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 177627600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.userEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 565742200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnREGISTERButton()"
});
formatter.result({
  "duration": 551697000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 38
    }
  ],
  "location": "RegisterSteps.userShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 213567100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Email is required.]\u003e but was:\u003c[*]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.nopcommerce.demo.steps.RegisterSteps.userShouldVerifyTheErrorMessage(RegisterSteps.java:45)\r\n\tat ✽.Then User should verify the error message \"Email is required.\"(register.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 606786900,
  "status": "passed"
});
formatter.before({
  "duration": 3596747900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify That First Name Last Name Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User Click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter first name \"cat\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter last name \"dhanani\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter email \"catdhanani@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter password \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter Confirm password \"123456\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on REGISTER Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should verify the error message \"Password is required.\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1425427400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cat",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 438447000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhanani",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userEnterLastName(String)"
});
formatter.result({
  "duration": 347258700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "catdhanani@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 165933800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 78689300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.userEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 136981000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnREGISTERButton()"
});
formatter.result({
  "duration": 138526600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 38
    }
  ],
  "location": "RegisterSteps.userShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 77261900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Password is required.]\u003e but was:\u003c[*]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.nopcommerce.demo.steps.RegisterSteps.userShouldVerifyTheErrorMessage(RegisterSteps.java:45)\r\n\tat ✽.Then User should verify the error message \"Password is required.\"(register.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 547771200,
  "status": "passed"
});
formatter.before({
  "duration": 3667683200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify That First Name Last Name Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "register;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User Click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter first name \"cat\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter last name \"dhanani\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter email \"catdhanani@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter password \"123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter Confirm password \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on REGISTER Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should verify the error message \"Password is required.\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 1595500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1420648300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cat",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 221388100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhanani",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userEnterLastName(String)"
});
formatter.result({
  "duration": 143571600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "catdhanani@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 113907000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 80444600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.userEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 113273800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnREGISTERButton()"
});
formatter.result({
  "duration": 93771800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 38
    }
  ],
  "location": "RegisterSteps.userShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 66822600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Password is required.]\u003e but was:\u003c[*]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.nopcommerce.demo.steps.RegisterSteps.userShouldVerifyTheErrorMessage(RegisterSteps.java:45)\r\n\tat ✽.Then User should verify the error message \"Password is required.\"(register.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 607166900,
  "status": "passed"
});
formatter.before({
  "duration": 5070716300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "register;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User Click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User select gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enter first name \"rupa\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User enter last name \"dhanani\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User select Day \"8\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select Month \"april\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User select Year  \"1986\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enter email \"rupapatel@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enter password \"24567898\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enter Confirm password \"24567898\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on REGISTER Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User should verify Your registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 388700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1310257900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userSelectGenderFemale()"
});
formatter.result({
  "duration": 285427900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rupa",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 278533100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhanani",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userEnterLastName(String)"
});
formatter.result({
  "duration": 181481400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.userSelectDay(String)"
});
formatter.result({
  "duration": 215147300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "april",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.userSelectMonth(String)"
});
formatter.result({
  "duration": 323743600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1986",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.userSelectYear(String)"
});
formatter.result({
  "duration": 202800600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rupapatel@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 198978000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24567898",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 153181000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24567898",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.userEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 131489700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnREGISTERButton()"
});
formatter.result({
  "duration": 825681900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userShouldVerifyYourRegistrationCompleted(String)"
});
formatter.result({
  "duration": 202200,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.demo.steps.RegisterSteps.userShouldVerifyYourRegistrationCompleted(String) in file:/C:/Homework/nopcommerceweek14/target/test-classes/\u0027 with pattern [^User should verify Your registration completed$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then User should verify Your registration completed\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 898153700,
  "status": "passed"
});
});