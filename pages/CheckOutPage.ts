import { Page , Locator } from '@playwright/test';

export class CheckOutPage {
    readonly page : Page;
    readonly placeOrderBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.placeOrderBtn = page.locator("//a[@href='/payment']");
    }

    async clickPlaceOrderBtn(){
        await this.placeOrderBtn.click();
    }

}