import { Page , Locator } from '@playwright/test';

export class PaymentPage {

    readonly page : Page;
    readonly nameOnCardField: Locator;
    readonly CardNumberField : Locator;
    readonly cvcNumberField : Locator;
    readonly monthExpireField : Locator;
    readonly yearExpireField : Locator;
    readonly confirmOrderBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.nameOnCardField = page.locator("input[data-qa='name-on-card']");
        this.CardNumberField = page.locator("input[data-qa='card-number']");
        this.cvcNumberField = page.locator("input[data-qa='cvc']");
        this.monthExpireField = page.locator("input[data-qa='expiry-month']");
        this.yearExpireField = page.locator("input[data-qa='expiry-year']");
        this.confirmOrderBtn = page.locator("#submit");
    }

    async fillPaymentDetails(nameOnCard : string, cardNumber : string, cvcNumber : string, monthExpire : string, yearExpire : string){
        await this.nameOnCardField.fill(nameOnCard);
        await this.CardNumberField.fill(cardNumber);
        await this.cvcNumberField.fill(cvcNumber);
        await this.monthExpireField.fill(monthExpire);
        await this.yearExpireField.fill(yearExpire);
    }

    async clickConfirmOrderBtn(){
        await this.confirmOrderBtn.click();
    }

}