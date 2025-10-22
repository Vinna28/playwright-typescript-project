import{test,expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import * as data from '../data/login.json'

test('Valid Login Sauce Demo Website',async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.fillForm(data.validData.userName, data.validData.password);
        await expect(page).toHaveTitle('Swag Labs')
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }
)

test('Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.fillForm(data.invalidData.userName, data.invalidData.password)
    await expect(loginPage.errorMessages).toHaveText(data.errorMessage)
})