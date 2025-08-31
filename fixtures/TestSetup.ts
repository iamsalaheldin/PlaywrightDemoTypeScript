import { test as base } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';

type OpenBaseURLFixture = {
    pageObjectManager : PageObjectManager;
};

export const test = base.extend<OpenBaseURLFixture>({
    pageObjectManager : async ({ page }, use) => {
        const pageObjectManager = new PageObjectManager(page);
        await pageObjectManager.getHomePage().navigateToHomePage();
        use(pageObjectManager);
    }
});