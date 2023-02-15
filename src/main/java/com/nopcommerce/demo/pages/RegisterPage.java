package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }
    @FindBy(linkText = "Register")
    WebElement registerLink;

    @FindBy(xpath = "//div[@class='page-title']/h1")
    WebElement registerText;
    @FindBy(xpath = "//div[@class='gender']//input[@id='gender-male']")
    WebElement FemaleRadioButton;
    @FindBy(xpath = "//div[@class='gender']//input[@id='gender-female']")
    WebElement MaleRadioButton;
    @FindBy(id = "FirstName")
    WebElement firstNameField;
    @FindBy(name = "LastName")
    WebElement lastNameField;
    @FindBy(name = "DateOfBirthDay")
    WebElement dateOfBirthDayFromDropdown;
    @FindBy(name = "DateOfBirthMonth")
    WebElement dateOfBirthMonthFromDropdown;
    @FindBy(name = "DateOfBirthYear")
    WebElement dateOfBirthYearFRomDropdown;
    @FindBy(id = "Email")
    WebElement emailId;
    @FindBy(name = "Password")
    WebElement passwordField;
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPassword;
    @FindBy(id = "register-button")
    WebElement registerButton;
    @FindBy(xpath = "//span[contains(text(),'First name is required.')]")
    WebElement firstNameIsRequired;


    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lastNameIsRequired;
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailIsRequired;
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordIsRequired;

    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement yourRegistrationCompleted;
    @FindBy(linkText = "Continue")
    WebElement continueTab;
    @FindBy(xpath = "//span[@class='required']")
    WebElement mandatoryFields;
    public void clickOnRegisterLink() {
        clickOnElement(registerLink);
        log.info("click on register link :"+registerLink.toString());
    }

    public String getRegisterText() {
        return getTextFromElement(registerText);
    }

    public void clickOnFemaleRadioButton() {
        log.info("click on female radio button" + FemaleRadioButton.toString());
        clickOnElement(FemaleRadioButton);

    }

    public void enterFirstNameOnFirstNameField(String name) {
        log.info("enter first name " + firstNameField.toString());
        sendTextToElement(firstNameField, name);


    }
    public void enterLastNameOnLastNameField(String name){
        log.info("enter first name "+lastNameField.toString());
        sendTextToElement(lastNameField,name);}




    public void clickOnDateOfBirthdayDropdown(String day ){
        log.info("click on date of birthday"+dateOfBirthDayFromDropdown.toString());
        sendTextToElement(dateOfBirthDayFromDropdown,day);
    }
    public void clickOnDateOfBirthMonthFromDropdown(String month){
        log.info("click on date of birt month"+dateOfBirthMonthFromDropdown.toString());
        sendTextToElement(dateOfBirthMonthFromDropdown,month);
    }
    public void clickOnDateOfBirthYearFromDropdown(String Year){
        log.info("click on date of birth year"+dateOfBirthYearFRomDropdown.toString());
        sendTextToElement(dateOfBirthYearFRomDropdown,Year);
    }
    public void enterEmailIdOnEmailField(String email){
        log.info("enter email id "+ emailId.toString());
        sendTextToElement(emailId,email);

    }
    public void enterPasswordOnPasswordField(String password){
        Reporter.log("enter password "+passwordField.toString());
        sendTextToElement(passwordField,password);
    }
    public void enterConfirmPassword(String password){
        log.info("enter password "+confirmPassword.toString());
        sendTextToElement(confirmPassword,password);
    }
    public void clickOnRegisterButton(){
        log.info("click on register button"+registerButton.toString());
        clickOnElement(registerButton);
    }
    public String getFirstNameIsRequiredText(){
        return getTextFromElement(firstNameIsRequired);
    }


    public  String getLastNameIsRequiredText(){
        return getTextFromElement(lastNameIsRequired);
    }
    public  String getEmailIsRequiredText(){
        return getTextFromElement(emailIsRequired);
    }
    public String getPasswordIsRequiredText(){
        return getTextFromElement(passwordIsRequired);
    }
//    public String verifyErrorMessageText(String errm){
//        return getTextFromElement(errorMessage);
//    }
    public String verifyYourRegistrationCompletedText(String ms){
        return getTextFromElement(yourRegistrationCompleted);
    }
    public String verifyContinueTab(){
        return getTextFromElement(continueTab);
    }
    public String verifyMandatoryFieldsRequired(String text){
        return getTextFromElement(mandatoryFields);
    }


}
