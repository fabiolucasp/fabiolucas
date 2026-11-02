import { test, expect } from '@playwright/test';
import { validateAppUrl } from '../services/appUrl';

test('only valid HTTPS destinations or explicit development localhost are accepted', () => {
  for (const input of [undefined, '', '   ', '/app', 'not-a-url', 'javascript:alert(1)', '//example.test', 'http://example.test', 'https://user:password@example.test']) {
    expect(validateAppUrl(input)).toBeNull();
  }
  expect(validateAppUrl('https://example.test/app')).toBe('https://example.test/app');
  expect(validateAppUrl('http://localhost:8080', false)).toBeNull();
  expect(validateAppUrl('http://localhost:8080', true)).toBe('http://localhost:8080/');
  expect(validateAppUrl('http://127.0.0.1:8080', true)).toBe('http://127.0.0.1:8080/');
  expect(validateAppUrl('http://example.test', true)).toBeNull();
});
