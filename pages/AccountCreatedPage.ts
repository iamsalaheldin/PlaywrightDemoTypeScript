import { Page , Locator , expect } from '@playwright/test';

export class AccountCreatedPage {

    readonly page : Page;
    readonly accountCreatedMessage : Locator;
    readonly continueBtn : Locator;

    constructor(page : Page){

        this.page = page;
        this.accountCreatedMessage = page.locator("h2[data-qa='account-created']");
        this.continueBtn = page.locator(".btn-primary");
    }

    async verifyAccountCreatedMessage(){
        await expect(this.accountCreatedMessage).toBeVisible();
    }

    async navigateToProductsPAge(){
        await this.continueBtn.click();
    }

}