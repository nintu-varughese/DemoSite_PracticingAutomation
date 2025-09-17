import { Page, Locator } from "@playwright/test";
import { CommonPage } from "./common.page";

export class Shoppage extends CommonPage {
  readonly shopLink: Locator;
  readonly filterText: Locator;
  readonly sliderHandle: Locator;
  readonly slider: Locator;
  readonly priceRange:Locator
  readonly filterBtn:Locator;
  readonly productAddedMsg:Locator;
  readonly viewcart:Locator;

  constructor(page: Page) {
    super(page);
    this.shopLink = page.locator("//a[text()='Shop']");
    this.filterText = page.locator('//h4[text()="Filter by price"]');
    this.slider = page.locator('.price_slider_wrapper .ui-slider'); 
    this.sliderHandle = page.locator('.ui-slider-handle').first(); 
    this.priceRange = page.locator("//span[text()='₹254']")
    this.filterBtn = page.locator("//button[text()='Filter']")
    this.productAddedMsg = page.locator("//a[@class='button product_type_simple add_to_cart_button ajax_add_to_cart added']");
    this.viewcart = page.locator("//a[@title='View Basket']");
    
  }


  /**
   * Opens the shop page by clicking on the "shop" link
   */
  async navigateToShop() {
    await this.shopLink.click();
  }


  /**
   * Adjusts the slider from one value to another
   * @param from number (starting value, e.g. 500)
   * @param to number (target value, e.g. 300)
   * @param min number (slider min, default 0)
   * @param max number (slider max, default 1000)
   */

  async adjustPriceSlider(from: number, to: number, min = 0, max = 1000) {
    const sliderBox = await this.slider.boundingBox();
    if (!sliderBox) throw new Error("Slider not found");

    const pixelsPerUnit = sliderBox.width / (max - min);

    const startX = sliderBox.x + (from - min) * pixelsPerUnit;
    const targetX = sliderBox.x + (to - min) * pixelsPerUnit;
    const y = sliderBox.y + sliderBox.height / 2;

    // Drag handle
    await this.page.mouse.move(startX, y);
    await this.page.mouse.down();
    await this.page.mouse.move(targetX, y, { steps: 20 });
    await this.page.mouse.up();
  }
  


  /**
   * click the filter button
   */
  async clickFilterBtn(){
    await this.filterBtn.click();
  }


   /**
   * Add product to basket dynamically by book title
   * @param bookTitle - the <h3> title of the product
   */
  async addBookToBasket(bookTitle: string) {
    const addToCartBtn = this.page.locator(
      `//ul[@class="products masonry-done"]//h3[text()="${bookTitle}"]/ancestor::li//a[text()="Add to basket"]`
    );
    await addToCartBtn.click();
  }
   /**
   * Navigate to Basket Page
   */
  async clickViewCartLink(){
    await this.viewcart.click();
     
  }
}
