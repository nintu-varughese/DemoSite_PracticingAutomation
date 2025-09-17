import { Page, Locator } from '@playwright/test';
import { CommonPage } from './common.page';
export class MyAccountpage extends CommonPage{
    //readonly Means this property cannot be reassigned after it’s initialized
    readonly myAccountLink: Locator;
    readonly registerHeading:Locator;
    readonly emailInput:Locator;
    readonly passwordInput:Locator;
    readonly registerButton:Locator;
    readonly dashboardLink:Locator;
    readonly loginUsername:Locator;
    readonly loginPassword:Locator;
    readonly loginBtn:Locator;
    
    constructor(page:Page){
        super(page);
        this.myAccountLink=page.locator("//a[text()='My Account']");
        this.registerHeading = page.locator("//h2[text()='Register']");
        this.emailInput = page.locator("#reg_email");
        this.passwordInput  = page.locator("#reg_password");
        this.registerButton = page.locator("//input[@value='Register']");
        this.dashboardLink = page.locator("//a[text()='Dashboard']");
        this.loginUsername = page.locator('#username');
        this.loginPassword = page.locator('#password');
        this.loginBtn = page.locator("//input[@value='Login']");
    }
       /**
     * Opens the My Account page by clicking on the "My Account" link
     */
    async OpenMyAccountPage():Promise<void>{
        await this.myAccountLink.click();
    }
      /**
     * Register a new user
     */
    async registerNewUser(){
        await this.emailInput.fill("mnl@gmail.com");
        await this.passwordInput.fill("MnlMnl@123Mnl");
        await this.registerButton.click();
    }
      /**
     * login the user who is already registered
     */
    async login(){
        await this.loginUsername.fill("mnl@gmail.com");
        await this.loginPassword.fill("MnlMnl@123Mnl");
        await this.loginBtn.click();
    }
}