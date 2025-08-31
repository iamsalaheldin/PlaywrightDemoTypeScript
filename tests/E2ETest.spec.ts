import { test } from "../fixtures/TestSetup";
import signUpPageTestData from "../testData/signUpPageTestData.json";
import accountCreationPageTestData from "../testData/AccountCreationPageTestData.json";
import paymentTestData from "../testData/PaymentTestData.json";

test("E2ETest", async ({ pageObjectManager }) => {
    await pageObjectManager.getHomePage().navigateToSignUpAndLoginPage();
    await pageObjectManager.getSignUpAndLoginPage().signUp(signUpPageTestData.name, signUpPageTestData.email + Date.now() +"@gmail.com");

    await pageObjectManager.accountCreationPage.createAccount(
        accountCreationPageTestData.password,
        accountCreationPageTestData.dayOfBirth,
        accountCreationPageTestData.monthOfBirth,
        accountCreationPageTestData.yearOfBirth,
        accountCreationPageTestData.firstName,
        accountCreationPageTestData.lastName,
        accountCreationPageTestData.company,
        accountCreationPageTestData.address1,
        accountCreationPageTestData.address2,
        accountCreationPageTestData.country,
        accountCreationPageTestData.state,
        accountCreationPageTestData.city,
        accountCreationPageTestData.zipcode,
        accountCreationPageTestData.mobile
    );
     await pageObjectManager.accountCreatedPage.verifyAccountCreatedMessage();
     await pageObjectManager.accountCreatedPage.navigateToProductsPAge();

     await pageObjectManager.productsPage.navigateToNeededProduct();
     await pageObjectManager.productViewPage.clickAddToCartBtn();
     await pageObjectManager.productViewPage.navigateToViewCart();
     await pageObjectManager.cartPage.clickCheckOutBtn();
     await pageObjectManager.checkOutPage.clickPlaceOrderBtn();
     await pageObjectManager.paymentPage.fillPaymentDetails(
        paymentTestData.nameOfCard,
        paymentTestData.cardNumber,
        paymentTestData.cvcNumber,
        paymentTestData.monthExpire,
        paymentTestData.yaerExpire
     );
     await pageObjectManager.paymentPage.clickConfirmOrderBtn();
     await pageObjectManager.orderCompletedPage.verifyOrderCompletedMessage();
     await pageObjectManager.orderCompletedPage.navigateToHomePage();

});