import { Page, Locator } from '@playwright/test';
import { CommonPage } from './common.page';
export class BasketPage extends CommonPage{
   readonly productHeading:Locator;
   readonly checkoutBtn:Locator;
    
    constructor(page:Page){
        super(page);
        this.productHeading = page.locator("//th[text()='Product']");
        this.checkoutBtn = page.locator("//a[@class='checkout-button button alt wc-forward']");
  
    }
   /**
   * Click the proceedtocheckout Button
   */
    async clickCheckoutBtn(){
        await this.checkoutBtn.click();
    }
}