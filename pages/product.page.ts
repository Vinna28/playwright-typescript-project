import { expect, Locator, Page } from '@playwright/test';

export class ProductPage{
    readonly page: Page;
    readonly addToCart: Locator;
    readonly shoppingCartBadge: Locator;
    readonly shoppingCart: Locator;
    readonly productName: Locator;


    constructor(page: Page){
        this.page = page;
        this.addToCart = page.locator('id=add-to-cart-sauce-labs-backpack');
        this.shoppingCartBadge = page.locator('xpath=//*[@id="shopping_cart_container"]/a/span');
        this.shoppingCart = page.locator('xpath=//*[@id="shopping_cart_container"]/a')
        this.productName = page.locator('xpath=//*[@id="item_4_title_link"]/div')
    }

    async addProductToCart(){
        await this.addToCart.click();
    }

    async showShoppingCart(){
        await this.shoppingCart.click();
    }

}