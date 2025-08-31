import { Page , Locator } from '@playwright/test';

export class ProductsPage {

    readonly page : Page;
    readonly neededProduct : Locator;
    readonly viewProductBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.neededProduct = page.locator(".col-sm-4").nth(3);
        this.viewProductBtn = page.locator("a[href='/product_details/2']");
    }

    async navigateToNeededProduct(){
        await this.neededProduct.hover();
        await this.viewProductBtn.click();
    }
    
    
}