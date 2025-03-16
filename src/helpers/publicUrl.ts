/**
 * @returns A complete public URL prefixed with the public static assets base
 * path.
 * @param path - path to prepend prefix to
 */
export function publicUrl(path: string): string {
  // Используем твой URL как базовый
  let baseUrl = import.meta.env.BASE_URL;
  if (!baseUrl.endsWith('/')) {
    baseUrl += '/';
  }

  let isBaseAbsolute = false;
  try {
    new URL(baseUrl);
    isBaseAbsolute = true;
  } catch { /* пусто */ }

  return new URL(
    path.replace(/^\/+/, ''),
    isBaseAbsolute
      ? baseUrl
      : window.location.origin + baseUrl,
  ).toString();
}