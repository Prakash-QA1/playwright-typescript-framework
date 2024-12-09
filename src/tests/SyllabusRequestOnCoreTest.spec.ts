import { test } from "@playwright/test";
import CoreDashboardPage from "../pages/CoreDashboardPage";


const authFile = "src/config/auth.json";

test("Verify Syllabus Request on CORE.", async ({page}) =>{

    const coredashboardpage = new CoreDashboardPage(page);

        await coredashboardpage.navigateToCoreDashboardPage();

        await coredashboardpage.clickOnLoginWithGoogleButton();
        
        await coredashboardpage.fillEmail();
        await coredashboardpage.clickOnNextButton();

        await coredashboardpage.fillPassword();
        await coredashboardpage.clickOnNextButton();

        await page.context().storageState({ path: authFile });
        
})