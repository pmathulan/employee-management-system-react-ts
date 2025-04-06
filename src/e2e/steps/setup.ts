import { chromium, Browser, Page } from '@playwright/test';

export let browser: Browser;
export let page: Page;

beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
});

afterAll(async () => {
    await browser.close();
});
