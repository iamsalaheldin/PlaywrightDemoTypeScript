import { Page , Locator } from '@playwright/test';

export class ProductViewPage {
    readonly page : Page;
    readonly addToCartBtn : Locator;
    readonly viewCartBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.addToCartBtn = page.locator("button[type='button']");
        this.viewCartBtn = page.locator("a[href='/view_cart'] u");
    }

    async clickAddToCartBtn(){
        await this.addToCartBtn.click();
    }

    async navigateToViewCart(){
        await this.viewCartBtn.click();
    }
}