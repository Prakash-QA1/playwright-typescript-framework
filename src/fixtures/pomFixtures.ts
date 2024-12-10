import { test as base, expect as defaultExpect } from "@playwright/test";


import LandingPage from "../pages/LandingPage";
import SyllabusPage from "../pages/SyllabusPage";

type pageObjects = {

    landingpage : LandingPage;
    syllabuspage :SyllabusPage;
}


export const expect = defaultExpect;

export const test = base.extend<pageObjects>({

    landingpage: async({page}, use) =>{
        const landingpage = new LandingPage(page);
        await use (landingpage);
    },

    syllabuspage: async({page}, use) =>{
        const syllabuspage = new SyllabusPage(page);
        await use(syllabuspage);
    }

})

