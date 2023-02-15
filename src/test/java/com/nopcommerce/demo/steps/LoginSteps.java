package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {
    @Given("^User on homepage$")
    public void userOnHomepage() {
    }

    @When("^User  click on login link$")
    public void userClickOnLoginLink() {
        new LoginPage().clickOnLoginLink();
    }

    @Then("^User should navigate to login page successfully$")
    public void userShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals("Login page not displayed", expectedMessage, actualMessage);
    }

    @And("^User verify The Welcome, Please Sign In! message display$")
    public void userVerifyTheWelcomePleaseSignInMessageDisplay() {
        new LoginPage().getWelcomeText();
    }

    @And("^User enter email \"([^\"]*)\"$")
    public void userEnterEmail(String eml)  {
        new LoginPage().enterEmailId(eml);

    }

    @And("^User enter password \"([^\"]*)\"$")
    public void userEnterPassword(String psw)  {
       new LoginPage().enterPassword(psw);
    }

    @And("^User  click on login button$")
    public void userClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^User verify the Log out link display$")
    public void userVerifyTheLogOutLinkDisplay() {
        new LoginPage().getLogoutLinkText();

    }

    @Then("^User should verify the error message display$")
    public void userShouldVerifyTheErrorMessageDisplay(String ers) {
        Assert.assertEquals("error message not displayed",ers,new LoginPage().getErrorMessage());
    }

    @And("^User click on Log Out Link$")
    public void userClickOnLogOutLink() {
        new LoginPage().clickOnLogoutLink();
    }

    @Then("^User should verify  login link display$")
    public void userShouldVerifyLoginLinkDisplay(String dis) {
       Assert.assertEquals(dis,new LoginPage().userVerifyLogInLinkDisplay(dis));
    }

}
