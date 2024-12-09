import { test } from "@playwright/test";
import CoreDashboardPage from "../pages/CoreDashboardPage";

test("Verify Syllabus Request on CORE.", async ({page}) =>{

    const coredashboardpage = new CoreDashboardPage(page);

    try{
        await coredashboardpage.navigateToCoreDashboardPage();

        await coredashboardpage.clickOnLoginWithGoogleButton();

    }catch (error)
    {
        throw error; // Rethrow to fail the test
    }

})