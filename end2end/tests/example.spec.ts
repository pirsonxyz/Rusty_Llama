import { test, expect } from "@playwright/test";

test("Welcome to Rusty llama!", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle("Welcome to Rusty Llama");

  await expect(page.locator("h1")).toHaveText("Welcome Rusty Llama!");
});
