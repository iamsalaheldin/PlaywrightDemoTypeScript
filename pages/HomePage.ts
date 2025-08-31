import { Page , Locator } from '@playwright/test';

export class HomePage {

    readonly page : Page;
    readonly signUPAndLoginLink : Locator;
    readonly url : string = "https://automationexercise.com/"

    
    constructor(page : Page){
        this.page = page;
        this.signUPAndLoginLink = page.locator("a[href='/login']");
    }

    async navigateToHomePage(){
        await this.page.goto(this.url);
    }

    async navigateToSignUpAndLoginPage(){
        await this.signUPAndLoginLink.click();
    }
} 