import { expect, Locator, Page } from '@playwright/test';

export class LoginPage{
    readonly url="https://www.saucedemo.com/";
    readonly page: Page;
    readonly Username: Locator;
    readonly Password: Locator;
    readonly loginButton: Locator;
    readonly errorMessages: Locator;


    constructor(page: Page){
        this.page = page;
        this.Username = page.locator('id=user-name');
        this.Password = page.locator('id=password');
        this.loginButton = page.locator('id=login-button')
        this.errorMessages = page.locator('xpath=//*[@id="login_button_container"]/div/form/div[3]/h3')
    }


    async fillForm(username:string, password:string){
        await this.Username.fill(username);
        await this.Password.fill(password);
        await this.loginButton.click();
    }

    async goTo(){
        await this.page.goto(this.url);
    }


}