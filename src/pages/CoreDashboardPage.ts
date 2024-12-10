import { Page } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class CoreDashboardPage{

    private readonly coreDashboardTitle = "Ziplines Core";
    private readonly loginWithGoogleButtonSelector = "Login with Google";

    private readonly emailInputSelector = "[name='identifier']";
    private readonly nextButtonSelector = "Next";

    private readonly headingTextSelector = "#headingText";
    private readonly passwordInputSelector = "[name='Passwd']";

    private readonly emailElement = 'tr:first-child td.col-email a[href^="mailto:"]';


    constructor(private page:Page){

    }

    async navigateToCoreDashboardPage(){
        await this.page.goto("https://admin.dev.stg.ziplines.dev/admin_users/sign_in");
        logger.info("Navigated to landing page URL.");
    }

    async clickOnLoginWithGoogleButton(){

        await this.page.getByText(this.loginWithGoogleButtonSelector).click();
    }

    async fillEmail(){
        await this.page.locator(this.emailInputSelector).fill("prakash.lale@ziplines.com");
    }

    async clickOnNextButton(){
        await this.page.getByRole('button', { name: 'Next' }).click({timeout:15000});
    }

    async textIsVisible(){
        await this.page.locator(this.headingTextSelector).isVisible();
        console.log("I am on Passsword Page.")
    }

    async fillPassword(){
        await this.page.locator(this.passwordInputSelector).fill("Avdi@1212", {timeout:15000});
    }


    async verifySyllbusRequestRecord(){
        const email = this.page.locator(this.emailElement).innerText();
        return email;
    }

}