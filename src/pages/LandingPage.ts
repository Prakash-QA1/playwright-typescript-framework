
import { Page } from "@playwright/test";

import SyllabusPage from "./SyllabusPage";
import logger from "../utils/LoggerUtil";

export default class LandingPage {

    private readonly firstnameInputSelector = "First Name*";
    private readonly emailInpitSelector = "#email_address";
    private readonly phoneinputSelector = "#syllabus_request_phone";
    private readonly concentCheckboxSelector = "#syllabus_request_contact_opt_in";
    private readonly submitInputSelector = "Submit";

    constructor(private page:Page){

    }

    async navigateToLandingPage(){
        await this.page.goto("");
        logger.info("Navigated to landing page URL.");
    }

    async fillFirstname(firstname: string){
        await this.page.getByPlaceholder(this.firstnameInputSelector).first().fill(firstname);
        logger.info("Filled FirstName.");
    }

    async fillEmail(email: string){
        await this.page.locator(this.emailInpitSelector).first().fill(email);
        logger.info("Filled Email.");
    }

    async fillPhone(phone: number){
        await this.page.locator(this.phoneinputSelector).first().fill(phone.toString());
        logger.info("Filled Phone Number.");
    }

    // async selectConcentCheckbox(){
    //     await this.page.locator(this.concentCheckboxSelector).first().click();
    // }

    // async clickSubmitInput(){
    //     await this.page.getByText(this.submitInputSelector).first().click().catch((error) =>{
    //         logger.error(`Error clicking on Submit button. ${error}`);
    //         throw error; //rethrow the error if needed.
    //     }).then(()=>logger.info("Clicked on Submit button."));

    //     const syllabuspage = await new SyllabusPage(this.page);
    //     return syllabuspage;
    // }

    async clickSubmitInput(): Promise<SyllabusPage>{
        await this.page.getByText(this.submitInputSelector).first().click().catch((error) =>{
            logger.error(`Error clicking on Submit button. ${error}`);
            throw error; //rethrow the error if needed.
        }).then(()=>logger.info("Clicked on Submit button."));

        return new SyllabusPage(this.page);
    }

    
}