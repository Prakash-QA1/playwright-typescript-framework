import { test } from "@playwright/test";
import LandingPage from "../pages/LandingPage";

test("Submit Syllabus Request Form", async ({page}) =>{

    const landingpage = new LandingPage(page);

    await landingpage.navigateToLandingPage();
    await landingpage.fillFirstname("Prakash");
    await landingpage.fillEmail("prakash+667@ziplines.com");
    await landingpage.fillPhone(8956895623);
    const syllabuspage = await landingpage.clickSubmitInput();
    syllabuspage.expectDonwloadSyllabusTextToBeVisible();

})