import { Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { SignUpAndLoginPage } from "./SignUpAndLoginPage";
import { AccountCreationPage } from "./AccountCreationPage";
import { AccountCreatedPage } from "./AccountCreatedPage";
import { ProductsPage } from "./ProductsPage";
import { ProductViewPage } from "./ProductViewPage";
import { CartPage } from "./CartPage";
import { CheckOutPage } from "./CheckOutPage";
import { PaymentPage } from "./PaymentPage";
import { OrderCompletedPage } from "./OrderCompletedPage";

export class PageObjectManager {
    readonly page : Page;
    readonly homePage : HomePage;
    readonly signUpAndLoginPage : SignUpAndLoginPage;
    readonly accountCreationPage : AccountCreationPage;
    readonly accountCreatedPage : AccountCreatedPage;
    readonly productsPage : ProductsPage;
    readonly productViewPage : ProductViewPage;
    readonly cartPage : CartPage;
    readonly checkOutPage : CheckOutPage;
    readonly paymentPage : PaymentPage;
    readonly orderCompletedPage : OrderCompletedPage;
    
    constructor(page : Page){
        this.page = page;
        this.homePage = new HomePage(page);
        this.signUpAndLoginPage = new SignUpAndLoginPage(page);
        this.accountCreationPage = new AccountCreationPage(page);
        this.accountCreatedPage = new AccountCreatedPage(page);
        this.productsPage = new ProductsPage(page);
        this.productViewPage = new ProductViewPage(page);
        this.cartPage = new CartPage(page);
        this.checkOutPage = new CheckOutPage(page);
        this.paymentPage = new PaymentPage(page);
        this.orderCompletedPage = new OrderCompletedPage(page);
    }

    getHomePage(){
        return this.homePage;
    }

    getSignUpAndLoginPage(){
        return this.signUpAndLoginPage;
    }
    
    getAccountCreationPage(){
        return this.accountCreationPage;
    }

    getAccountCreatedPage(){
        return this.accountCreatedPage;
    }
    
    getProductsPage(){
        return this.productsPage;
    }

    getProductViewPage(){
        return this.productViewPage;
    }
    
    getCartPage(){
        return this.cartPage;
    }

    getCheckOutPage(){
        return this.checkOutPage;
    }

    getPaymentPage(){
        return this.paymentPage;
    }

    getOrderCompletedPage(){
        return this.orderCompletedPage;
    }   
}
