package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.ComputerPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {
    @When("^User click on Computer Link$")
    public void userClickOnComputerLink() {
        new ComputerPage().clickOnComputers();
    }

    @Then("^User should navigate to Computer Page successfully$")
    public void userShouldNavigateToComputerPageSuccessfully() {
        new ComputerPage().getComputersText();
    }

    @And("^User click on Desktops link$")
    public void userClickOnDesktopsLink() {
        new ComputerPage().clickOnDesktopsLink();
    }

    @Then("^User verify Desktops text$")
    public void userVerifyDesktopsText() {
        new ComputerPage().getDesktopsText();
    }

//    @And("^User click on Desktops Link$")
//    public void userClickOnDesktopsLink() {
//    }

    @And("^User click on Build your own computer$")
    public void userClickOnBuildYourOwnComputer() {
        new ComputerPage().clickOnBuildYourOwnComputer();
    }

    @And("^User select processor \"([^\"]*)\"$")
    public void userSelectProcessor(String pro)  {
        new ComputerPage().selectFirstOptionFromProcessor(pro);

    }

    @And("^User select ram \"([^\"]*)\"$")
    public void userSelectRam(String ra)  {
        new ComputerPage().setSelectThirdOptionFromRam(ra);

    }

    @And("^User select hdd\"([^\"]*)\"$")
    public void userSelectHdd(String hd) {
        new ComputerPage().clickOnRadioButtonHdd(hd);

    }

    @And("^User select Os  \"([^\"]*)\"$")
    public void userSelectOs(String os)  {
        new ComputerPage().clickOnRadioButtonFromOs(os);

    }

    @And("^User select software \"([^\"]*)\"$")
    public void userSelectSoftware(String sft)  {
        new ComputerPage().clickOnSoftwareCheckBoxes(sft);
    }

    @And("^User click on ADD TO CART Button$")
    public void userClickOnADDTOCARTButton() {
        new ComputerPage().clickOnAddToCartButton();
    }

    @Then("^User verify The product has been aadded to your shopping cart$")
    public void userVerifyTheProductHasBeenAaddedToYourShoppingCart() {
        String actualMessage2 =new ComputerPage().verifyTheProductHasBeenAddedToYourShoppingCart();
        String expectedMessage2= "The product has been added to your shopping cart";
        Assert.assertEquals("product has been added", expectedMessage2, actualMessage2);
    }
}
