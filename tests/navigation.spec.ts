import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
});

test('login never collects credentials and stays unavailable without configuration', async ({ page }) => {
  await page.goto('/#/login');
  await expect(page.getByRole('heading', { name: 'FounderOS' })).toBeVisible();
  await expect(page.getByRole('status')).toContainText('Acesso ainda indisponível');
  await expect(page.locator('input')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Abrir FounderOS' })).toHaveCount(0);
  await page.getByRole('link', { name: 'Voltar', exact: true }).click();
  await expect(page).toHaveURL(/#\/$/);
});

test('all public routes render without runtime errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const route of ['/', '/servicos', '/servicos/web', '/ebooks', '/cursos', '/comunidade', '/cliente', '/login', '/bicho-mimado-app', '/pineapple-pay']) {
    await page.goto(`/#${route}`);
    await expect(page.locator('main')).not.toBeEmpty();
    await expect(page.locator('h1, h2').first()).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test('section links preserve route and support repeat and back navigation', async ({ page }) => {
  await page.goto('/#/servicos/web');
  await page.locator('a[href="#/servicos/web#pricing"]').click();
  await expect(page).toHaveURL(/#\/servicos\/web#pricing$/);
  await expect(page.locator('#pricing')).toBeInViewport();
  await page.goBack();
  await expect(page).toHaveURL(/#\/servicos\/web$/);
  await page.getByRole('link', { name: 'Contato', exact: true }).first().click();
  await expect(page).toHaveURL(/#\/#contact$/);
  await expect(page.locator('#contact')).toBeInViewport();
  await page.getByRole('link', { name: 'Contato', exact: true }).first().click();
  await expect(page.locator('#contact')).toBeInViewport();
});

test('mobile menu closes and course detail can be dismissed', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/#/');
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await page.getByRole('link', { name: 'Cursos', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeVisible();
  await page.getByRole('heading', { name: 'Curso de Flutter', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Curso de Flutter para Iniciantes' })).toBeVisible();
  await page.getByRole('button', { name: 'Voltar aos cursos' }).click();
  await expect(page.getByRole('heading', { name: 'Curso de Flutter', exact: true })).toBeVisible();
});

test('reviewed case supports keyboard open, focus trap, close and restoration', async ({ page }) => {
  await page.goto('/#/');
  const card = page.getByRole('button', { name: 'Ver case Bicho Mimado', exact: true });
  await card.focus();
  await page.keyboard.press('Enter');
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('heading', { name: 'Solicitar a busca do pet' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Fechar case Bicho Mimado' })).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('button', { name: 'Voltar aos projetos', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(card).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(dialog).toBeVisible();
  await page.getByRole('button', { name: 'Fechar case Bicho Mimado' }).click();
  await expect(dialog).toHaveCount(0);
});
