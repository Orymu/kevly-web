import { expect, test } from "@playwright/test";

test.describe("marketing smoke", () => {
  test("core static routes render expected headings", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        name: /build a landing page system that can survive the product getting real/i,
      })
    ).toBeVisible();

    await page.goto("/about");
    await expect(
      page.getByRole("heading", {
        name: /a small, focused product deserves a clear, focused website/i,
      })
    ).toBeVisible();

    await page.goto("/privacy");
    await expect(
      page.getByRole("heading", {
        name: /privacy matters more when money, receipts, and shared spaces are involved/i,
      })
    ).toBeVisible();

    await page.goto("/delete-account");
    await expect(
      page.getByRole("heading", {
        name: /account deletion should be clear before it becomes permanent/i,
      })
    ).toBeVisible();
  });

  test("primary navigation works across static routes and homepage sections", async ({
    page,
  }) => {
    await page.goto("/about");

    await page.getByRole("banner").getByRole("link", { name: "Features" }).click();
    await expect(page).toHaveURL(/\/#features$/);
    await expect(page.locator("#features")).toBeInViewport();

    await page.getByRole("banner").getByRole("link", { name: "Privacy" }).click();
    await expect(page).toHaveURL(/\/privacy$/);
    await expect(
      page.getByRole("heading", {
        name: /privacy matters more when money, receipts, and shared spaces are involved/i,
      })
    ).toBeVisible();

    await page.getByRole("banner").getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(
      page.getByRole("heading", { name: /a small, focused product deserves/i })
    ).toBeVisible();
  });
});
