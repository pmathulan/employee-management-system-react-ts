import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from './setup';

Given('I am on the employee list page', async () => {
    await page.goto('http://localhost:5173/');
});

When('I click the delete button for {string}', async (employeeName: string) => {
    const row = await page.locator(`text=${employeeName}`).first();
    const deleteButton = row.locator('button', { hasText: 'Delete' });
    await deleteButton.click();
});

When('I confirm the deletion', async () => {
    await page.getByRole('button', { name: 'Delete' }).click();
});

Then('{string} should no longer appear in the employee list', async (employeeName: string) => {
    await expect(page.locator(`text=${employeeName}`)).not.toBeVisible();
});
