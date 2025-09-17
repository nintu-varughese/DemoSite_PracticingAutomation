import { Page, Locator } from '@playwright/test';
import { CommonPage } from './common.page';

export class CheckoutPage extends CommonPage {
  readonly billHeading: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly phone: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly postcode: Locator;
  readonly orderConfirmMsg:Locator;
  readonly placeOrderBtn:Locator;

  constructor(page: Page) {
    super(page);

    // Checkout page heading (Product table)
    this.billHeading = page.locator("//th[text()='Product']");

    // Billing form fields
    this.firstName = page.locator('#billing_first_name');
    this.lastName = page.locator('#billing_last_name');
    this.phone = page.locator('#billing_phone');
    this.address = page.locator('#billing_address_1');
    this.city = page.locator('#billing_city');
    this.postcode = page.locator('#billing_postcode');
    this.orderConfirmMsg = page.locator("//p[text()='Thank you. Your order has been received.']")
    this.placeOrderBtn = page.locator("#place_order");
  }

  /**
   * Fill the billing details form
   */
  async fillBillingDetails(
    firstName: string,
    lastName: string,
    phone: string,
    address: string,
    city: string,
    postcode: string
  ) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.phone.fill(phone);
    await this.address.fill(address);
    await this.city.fill(city);
    await this.postcode.fill(postcode);
  }

  /**
   * Demo method: create instance & fill billing details
   * (not usually part of POM, but added if you want self-contained execution here)
   */
  static async demoFill(page: Page) {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillBillingDetails(
      "John",
      "Doe",
      "9876543210",
      "123 Main Street",
      "Bangalore",
      "560001"
    );
  }
   /**
   * Click placeorder Button
   */
  async clickPlaceordeBtn(){
    await this.placeOrderBtn.click();
  }
}
