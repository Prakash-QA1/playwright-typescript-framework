import { Browser } from "@playwright/test";




export async function loginAndSaveAuthFile(browser: Browser, authFile: string, coreLoginURL:string) {
    
    const page = await browser.newPage();
    await page.goto(coreLoginURL);

    //Perform Login Actions
    await page.getByText("Login with Google").click();
    await page.locator("[name='identifier']").fill("prakash.lale@ziplines.com");
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator("[name='Passwd']").fill("Avdi@1212");
    await page.getByRole('button', { name: 'Next' }).click();

    //waiting to verify loggedin element
    await page.waitForSelector("#page_title");
    await page.waitForURL("https://admin.dev.stg.ziplines.dev/");
            
    await page.context().storageState({ path: authFile });

    console.log("Updated storage state saved.");
    await page.close();
}