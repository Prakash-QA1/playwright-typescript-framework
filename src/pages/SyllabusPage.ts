import { Page,expect } from "@playwright/test";

import logger from "../utils/LoggerUtil";

export default class SyllabusPage{

    private readonly downloadTextSelector = "Download Syllabus";

    constructor(private page:Page){

    }

    async expectDonwloadSyllabusTextToBeVisible(){
        await expect(this.page.getByText(this.downloadTextSelector)).toBeVisible().catch((error) => {
            logger.error(`Download Syllabus text is not visible: ${error}`);
            throw error; //rethrow the error if needed.
        }).then(() => logger.info("Download syllabus text is visible."));
    }

}