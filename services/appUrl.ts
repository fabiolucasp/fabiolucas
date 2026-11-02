/** Public destination only; never store a secret in a VITE_ variable. */
export function validateAppUrl(value: string | undefined, development = false): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    const localHttp = development && url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
    if ((url.protocol !== 'https:' && !localHttp) || url.username || url.password) return null;
    return url.href;
  } catch {
    return null;
  }
}
