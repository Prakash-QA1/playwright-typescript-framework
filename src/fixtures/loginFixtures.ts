import { test as base, BrowserContext } from "@playwright/test";
import { loginAndSaveAuthFile } from "../utils/CommonUtils";

const authFile = "src/config/auth.json";  // Make sure this path is correct relative to the root
const coreLoginURL = "https://admin.dev.stg.ziplines.dev/admin_users/sign_in";

export const test = base.extend<{
    loggedInContext: BrowserContext;
}>({
    loggedInContext: async ({ browser }, use) => {
        let context = await browser.newContext({ storageState: authFile });

        const page = await context.newPage();

        // Check if user is logged in
        try {
            await page.goto("https://admin.dev.stg.ziplines.dev/");
            await page.waitForSelector("#page_title", { timeout: 5000 });  // Wait for an element that confirms login
        } catch {
            console.log("User is logged out. Re-logging in.");
            await context.close();  // Close the context if logged out
            await loginAndSaveAuthFile(browser, authFile, coreLoginURL);  // Re-login and save the auth file

            // Create a new context with the updated auth file
            context = await browser.newContext({ storageState: authFile });
        }

        await use(context);  // Pass the context to the test
        await context.close();  // Close the context after the test is done
    },
});
