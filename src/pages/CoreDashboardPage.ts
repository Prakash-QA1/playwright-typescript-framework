import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class CoreDashboardPage{

    private readonly coreDashboardTitle = "Ziplines Core";
    private readonly loginWithGoogleButtonSelector = "Login with Google";

    constructor(private page:Page){

    }

    async navigateToCoreDashboardPage(){
        await this.page.goto("https://admin.dev.stg.ziplines.dev/admin_users/sign_in");
        logger.info("Navigated to landing page URL.");
    }

    async clickOnLoginWithGoogleButton(){
        await this.page.waitForSelector(this.loginWithGoogleButtonSelector),{timeout: 10000};
        await this.page.getByText(this.loginWithGoogleButtonSelector).click();
    }

}