export function getIdFromUrl(url: string): string {
  return url.split("/").slice(-2)[0];
}
