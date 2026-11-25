/**
 * Prefix an asset path with Astro's configured BASE_URL so links resolve
 * both at root domains (username.github.io) and project subpaths (username.github.io/repo).
 */
export function withBase(path: string): string {
  if (/^https?:\/\//.test(path) || path.startsWith('mailto:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
