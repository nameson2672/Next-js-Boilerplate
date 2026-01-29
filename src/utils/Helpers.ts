export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

export const isServer = () => {
  return typeof window === 'undefined';
};

export function nameToAvatar(name?: string | null): string {
  if (!name) {
    return '?';
  }

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2) // first + last name
    .map(word => word[0]?.toUpperCase())
    .join('');
}
