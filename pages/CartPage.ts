import { Page , Locator } from '@playwright/test';

export class CartPage {

    readonly page : Page;
    readonly checkOutBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.checkOutBtn = page.locator(".check_out");
    }

    async clickCheckOutBtn(){
        await this.checkOutBtn.click();
    }   
}