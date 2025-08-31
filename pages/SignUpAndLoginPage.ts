import { Page , Locator } from '@playwright/test';

export class SignUpAndLoginPage {

    readonly page : Page;
    readonly signUpName : Locator;
    readonly signUpEmail : Locator;
    readonly signUpButton : Locator;
    
    constructor(page : Page){
        this.page = page;
        this.signUpName = page.getByPlaceholder("Name");
        this.signUpEmail = page.locator("input[data-qa='signup-email']");
        this.signUpButton = page.locator("button[data-qa='signup-button']");
    }

    async signUp(name : string, email : string){
        await this.signUpName.fill(name);
        await this.signUpEmail.fill(email);
        await this.signUpButton.click();
    }
}