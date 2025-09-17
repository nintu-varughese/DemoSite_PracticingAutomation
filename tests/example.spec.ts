import { test, expect } from '@playwright/test';
import { CommonPage } from './pages/common.page';
import { MyAccountpage } from './pages/myAccount.page';
import { Shoppage } from './pages/shop.page';
import { BasketPage } from './pages/basket.page';
import { CheckoutPage } from './pages/checkout.page';

test("open the my account page and register", async({ page })=>{
  const commonPage = new CommonPage(page);
  const myAccount = new MyAccountpage(page);
  await commonPage.navigateToHomePage();
  await expect(commonPage.headerLogo).toBeVisible();
  await myAccount.OpenMyAccountPage();
  await expect(myAccount.registerHeading).toBeVisible();
  await myAccount.registerNewUser();
  await expect(myAccount.registerHeading).toBeVisible();
});
test("open the my account page and login", async({ page })=>{
  const commonPage = new CommonPage(page);
  const myAccount = new MyAccountpage(page);
  await commonPage.navigateToHomePage();
  await expect(commonPage.headerLogo).toBeVisible();
  await myAccount.OpenMyAccountPage();
  await expect(myAccount.registerHeading).toBeVisible();
  await myAccount.login();
  await expect(myAccount.dashboardLink).toBeVisible();
});
test.only("navigate to shop page and continue shoping", async({ page })=>{
  const commonPage = new CommonPage(page);
  const myAccount = new MyAccountpage(page);
  const basketPage = new BasketPage(page);
  const checkoutPage = new CheckoutPage(page);
  await commonPage.navigateToHomePage();
  await expect(commonPage.headerLogo).toBeVisible();
  await myAccount.OpenMyAccountPage();
  await expect(myAccount.registerHeading).toBeVisible();
  await myAccount.login();
  await expect(myAccount.dashboardLink).toBeVisible();
  const shopPage = new Shoppage(page);
  await shopPage.navigateToShop();
  await expect(shopPage.filterText).toBeVisible();
  await shopPage.adjustPriceSlider(500, 300, 0, 1000);
  await shopPage.clickFilterBtn();
  await expect(shopPage.priceRange).toBeVisible();
  await shopPage.addBookToBasket("Android Quick Start Guide");
  await expect(shopPage.productAddedMsg).toBeVisible();
  await shopPage.clickViewCartLink();
  await expect(basketPage.productHeading).toBeVisible();
  await basketPage.clickCheckoutBtn();
  await expect(checkoutPage.billHeading).toBeVisible();
  await CheckoutPage.demoFill(page);
  await checkoutPage.clickPlaceordeBtn();
  await expect(checkoutPage.orderConfirmMsg).toBeVisible();
});

