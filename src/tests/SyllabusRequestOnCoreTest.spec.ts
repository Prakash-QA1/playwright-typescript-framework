import { test } from "../fixtures/loginFixtures"; // Importing loginFixtures for loggedInContext
import { test as pomTest } from "../fixtures/pomFixtures"; // Importing the custom pomTest

import CoreDashboardPage from "../pages/CoreDashboardPage";



test.describe('Syllabus Request Form Flow', () => {

    pomTest("Submit Syllabus Request Form", async ({landingpage, syllabuspage}) =>{

        // const landingpage = new LandingPage(page);
    
        await landingpage.navigateToLandingPage();
        await landingpage.fillFirstname(process.env.firstname!);
        await landingpage.fillEmail(process.env.email!);
        await landingpage.fillPhone(8956895623);
        await landingpage.clickSubmitInput();
        syllabuspage.expectDonwloadSyllabusTextToBeVisible();
    
    });
    
 

    test("Testing login with fixtures.", async ({loggedInContext}) =>{
        const page = await loggedInContext.newPage();
        await page.goto("https://admin.dev.stg.ziplines.dev/admin/syllabus_requests");

        console.log("Title: ", await page.title());
        const coreDashboardPage = new CoreDashboardPage(page);
        const myEmail = await coreDashboardPage.verifySyllbusRequestRecord();
        console.log(`The email is: ${myEmail}`);
    });

});