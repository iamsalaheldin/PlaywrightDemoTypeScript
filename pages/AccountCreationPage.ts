import { Page , Locator } from '@playwright/test';

export class AccountCreationPage {


    readonly page : Page;
    readonly genderMale : Locator;
    readonly nameInput : Locator;
    readonly emailInput: Locator;
    readonly passwordInput : Locator;
    readonly dayOfBirthList : Locator;
    readonly monthOfBirthList : Locator;
    readonly yearOfBirthList : Locator;
    readonly firstNameInput : Locator;
    readonly lastNameInput : Locator;
    readonly companyInput : Locator;
    readonly address1Input : Locator;
    readonly address2Input : Locator;
    readonly countryInput : Locator;
    readonly stateInput : Locator;
    readonly cityInput : Locator;
    readonly zipCodeInput : Locator;
    readonly mobileInput : Locator;
    readonly createAccountBtn  : Locator;

    constructor(page : Page){
        this.page = page;
        this.genderMale = page.locator("#id_gender1");
        this.nameInput = page.locator("#name");
        this.emailInput = page.locator("#email");
        this.passwordInput = page.locator("#password");
        this.dayOfBirthList = page.locator("#days");
        this.monthOfBirthList = page.locator("#months");
        this.yearOfBirthList = page.locator("#years");
        this.firstNameInput = page.locator("#first_name");
        this.lastNameInput = page.locator("#last_name");
        this.companyInput = page.locator("#company");
        this.address1Input = page.locator("#address1");
        this.address2Input = page.locator("#address2");
        this.countryInput = page.locator("#country");
        this.stateInput = page.locator("#state");
        this.cityInput = page.locator("#city");
        this.zipCodeInput = page.locator("#zipcode");
        this.mobileInput = page.locator("#mobile_number");
        this.createAccountBtn = page.locator("button[data-qa='create-account']");
    }

    async createAccount(password : string, day : string, month : string, year : string, firstName : string, lastName : string, company : string, address1 : string, address2 : string, country : string, state : string, city : string, zipCode : string, mobile : string){
        await this.genderMale.click();
        await this.passwordInput.fill(password);
        await this.dayOfBirthList.selectOption(day);
        await this.monthOfBirthList.selectOption(month);
        await this.yearOfBirthList.selectOption(year);
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.companyInput.fill(company);
        await this.address1Input.fill(address1);
        await this.address2Input.fill(address2);
        await this.countryInput.selectOption(country);
        await this.stateInput.fill(state);
        await this.cityInput.fill(city);
        await this.zipCodeInput.fill(zipCode);
        await this.mobileInput.fill(mobile);
        await this.createAccountBtn.click();
    }
}