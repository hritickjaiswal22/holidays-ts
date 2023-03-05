export function extract(str: string) {
  return str.substring(str.lastIndexOf("-") + 1).trim();
}
