import { Page,expect } from "@playwright/test";

export default class SyllabusPage{

    private readonly downloadTextSelector = "Download Syllabus";

    constructor(private page:Page){

    }

    async expectDonwloadSyllabusTextToBeVisible(){
        await expect(this.page.getByText(this.downloadTextSelector)).toBeVisible();
        console.log("Verified syllabus download page.");
    }

}