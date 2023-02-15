package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage(){
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;
    // By welcomeText = By.xpath("//h1[contains(text(),'Welcome, Please Sign In!')]");
    @FindBy(xpath = "//a[contains(text(),'Log in')]")
    WebElement LogInLink;

    @FindBy(id = "Email")
    WebElement emailField;
    //By emailField = By.id("Email");

    @FindBy(name = "Password")
    WebElement passwordField;
    //By passwordField = By.name("Password");

    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginButton;
    // By loginButton = By.xpath("//button[contains(text(),'Log in')]");
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement LogOutLink;
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;
    //By errorMessage = By.xpath("//div[@class='message-error validation-summary-errors']");
//    @FindBy(className = "ico-logout")
//    WebElement logoutLink;


    public String getWelcomeText() {
        String message = getTextFromElement(welcomeText);
        log.info("getting text from : " + welcomeText.toString());
        return message;
    }

    public void enterEmailId(String email) {
        sendTextToElement(emailField, email);
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
    }

    public void clickOnLoginButton() {
        clickOnElement(loginButton);
    }

    public String getErrorMessage() {
        return getTextFromElement(errorMessage);
    }
    public void clickOnLogoutLink(){
        clickOnElement(LogOutLink);
    }
    public void clickOnLoginLink() {
        clickOnElement(LogInLink);
        log.info("clicking on login link : "+ LogInLink.toString());
    }
    public String userVerifyLogInLinkDisplay(String dis){
        return getTextFromElement(LogInLink);
    }
    public void loginToApplication(String email, String password) {
        enterEmailId(email);
        enterPassword(password);
        clickOnLoginButton();
    }
    public  String  getLogoutLinkText(){
        return getTextFromElement(LogOutLink);
    }





}


