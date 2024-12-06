import { test } from "@playwright/test";
import LandingPage from "../pages/LandingPage";

test("Submit Syllabus Request Form", async ({page}) =>{

    const landingpage = new LandingPage(page);

    await landingpage.navigateToLandingPage();
    await landingpage.fillFirstname(process.env.firstname!);
    await landingpage.fillEmail(process.env.email!);
    await landingpage.fillPhone(8956895623);
    const syllabuspage = await landingpage.clickSubmitInput();
    syllabuspage.expectDonwloadSyllabusTextToBeVisible();

})


test.skip("Sample ENV test", async ({page}) =>{
    console.log(process.env.NODE_ENV);
    console.log(process.env.firstname);
    console.log(process.env.email);
});