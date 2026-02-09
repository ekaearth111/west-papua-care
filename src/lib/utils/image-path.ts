const basePath = process.env.NODE_ENV === "production" ? "/west-papua-care" : "";

export function getImagePath(path: string): string {
  return `${basePath}${path}`;
}
