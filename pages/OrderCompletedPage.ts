import { Page , Locator , expect } from '@playwright/test';

export class OrderCompletedPage {

    readonly page : Page;
    readonly orderCompletedMessage : Locator;
    readonly continueBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.orderCompletedMessage = page.locator("//p[normalize-space()='Congratulations! Your order has been confirmed!']");
        this.continueBtn = page.locator(".btn.btn-primary");
    }

    async verifyOrderCompletedMessage(){
        await expect(this.orderCompletedMessage).toBeVisible();
    }

    async navigateToHomePage(){
        await this.continueBtn.click();
    }
}