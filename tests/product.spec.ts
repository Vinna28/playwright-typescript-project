import{test,expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/product.page';
import * as data from '../data/login.json';

test.beforeEach('Login first', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.fillForm(data.validData.userName, data.validData.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});

test.describe('Shopping Product', () => {
    test('Add to Cart', async ({ page }) => {
        const productPage = new ProductPage(page);
        await productPage.addProductToCart();
        await expect(productPage.shoppingCartBadge).toHaveText('1')
    });

    test('Show Shopping Cart', async ({ page }) => {
        const productPage = new ProductPage(page);
        await productPage.addProductToCart();
        await productPage.showShoppingCart();
        await expect(productPage.productName).toHaveText('Sauce Labs Backpack')
    })
    
});


