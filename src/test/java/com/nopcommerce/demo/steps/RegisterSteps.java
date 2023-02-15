package com.nopcommerce.demo.steps;

//import com.nopcommerce.demo.pages.LoginPage;
import com.nopcommerce.demo.pages.LoginPage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {
    @When("^User Click on Register link$")
    public void userClickOnRegisterLink() {
       new RegisterPage().clickOnRegisterLink();

    }

    @And("^User verify Register text$")
    public void userVerifyRegisterText() {
      new RegisterPage().getRegisterText();

    }


    @And("^User enter first name \"([^\"]*)\"$")
    public void userEnterFirstName(String name)  {
        new RegisterPage().enterFirstNameOnFirstNameField(name);

    }

    @And("^User enter last name \"([^\"]*)\"$")
    public void userEnterLastName(String lname)  {
        new RegisterPage().enterLastNameOnLastNameField(lname);

    }

    @And("^User enter Confirm password \"([^\"]*)\"$")
    public void userEnterConfirmPassword(String cpass) {
        new RegisterPage().enterConfirmPassword(cpass);

    }
    @Then("^User should verify the error message \"([^\"]*)\"$")
    public void userShouldVerifyTheErrorMessage(String text) {
        Assert.assertEquals(text,new RegisterPage().verifyMandatoryFieldsRequired(text));

    }

//    @Then("^User should see the error message \"([^\"]*)\"$")
//    public void userShouldSeeTheErrorMessage(String errorm)  {
//        Assert.assertEquals(errorm,new RegisterPage().getErrorMessageText(errorm));
//
//    }

    @And("^User click on REGISTER Button$")
    public void userClickOnREGISTERButton() {
        new RegisterPage().clickOnRegisterButton();

    }



    @And("^User select gender Female$")
    public void userSelectGenderFemale() {
        new RegisterPage().clickOnFemaleRadioButton();

    }

    @And("^User select Day \"([^\"]*)\"$")
    public void userSelectDay(String day)  {
        new RegisterPage().clickOnDateOfBirthdayDropdown(day);

    }

    @And("^User select Month \"([^\"]*)\"$")
    public void userSelectMonth(String mont) {
        new RegisterPage().clickOnDateOfBirthMonthFromDropdown(mont);

    }

    @And("^User select Year  \"([^\"]*)\"$")
    public void userSelectYear(String yr)  {
        new RegisterPage().clickOnDateOfBirthYearFromDropdown(yr);

    }

    @Then("^User should verify Your registration completed$")
    public void userShouldVerifyYourRegistrationCompleted(String registration) {
        Assert.assertEquals(registration,new RegisterPage().verifyYourRegistrationCompletedText(registration));
    }




//    @Then("^User should see the error message \"([^\"]*)\"$")
//    public void userShouldSeeTheErrorMessage(String arg0) throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
}
