import { Page, expect } from "@playwright/test";
import { error } from "console";
import SyllabusPage from "./SyllabusPage";

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
    }

    async fillFirstname(firstname: string){
        await this.page.getByPlaceholder(this.firstnameInputSelector).first().fill(firstname);
    }

    async fillEmail(email: string){
        await this.page.locator(this.emailInpitSelector).first().fill(email);
    }

    async fillPhone(phone: number){
        await this.page.locator(this.phoneinputSelector).first().fill(phone.toString());
    }

    async selectConcentCheckbox(){
        await this.page.locator(this.concentCheckboxSelector).first().click();
    }

    async clickSubmitInput(){
        await this.page.getByText(this.submitInputSelector).first().click();

        const syllabuspage = await new SyllabusPage(this.page);
        return syllabuspage;
    }

    
}