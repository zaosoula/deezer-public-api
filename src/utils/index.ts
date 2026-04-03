/**
 * Changes the size of a Deezer image URL.
 * Deezer image URLs follow the pattern: .../{type}/{id}/{width}x{height}-{hash}-{quality}-{etc}.jpg
 * 
 * @param url The original Deezer image URL.
 * @param size The desired size (e.g., 500 for 500x500).
 * @returns The formatted image URL with the new size.
 */
export function changeImageSize(url: string, size: number): string {
  if (!url) return url;
  
  // Replace {width}x{height} with {size}x{size}
  // Example: .../250x250-... -> .../500x500-...
  return url.replace(/\/\d+x\d+-/, `/${size}x${size}-`);
}

/**
 * Parsed Deezer URL components.
 */
export interface ParsedDeezerUrl {
  type: "track" | "album" | "artist" | "playlist" | "podcast" | "episode" | "radio" | "user";
  id: string;
}

/**
 * Parses a Deezer URL to extract the entity type and ID.
 * Supports sharing URLs and standard browser URLs.
 * 
 * @param url The Deezer URL to parse.
 * @returns The parsed type and ID, or null if the URL is invalid.
 */
export function parseDeezerUrl(url: string): ParsedDeezerUrl | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "deezer.com" && !parsed.hostname.endsWith(".deezer.com")) return null;
    
    // Handle standard URLs: deezer.com/{language}/{type}/{id} or deezer.com/{type}/{id}
    const pathParts = parsed.pathname.split("/").filter(Boolean);
    const validTypes = ["track", "album", "artist", "playlist", "podcast", "episode", "radio", "user"];

    // If first part is not a valid type, it's likely a language code, skip it
    let typeIndex = 0;
    if (pathParts[0] && !validTypes.includes(pathParts[0])) {
      typeIndex = 1;
    }

    const type = pathParts[typeIndex];
    const id = pathParts[typeIndex + 1];
    
    if (type && id && validTypes.includes(type)) {
      return { type: type as any, id };
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Checks if a URL is a known Deezer short/share link.
 * 
 * @param url The URL to check.
 * @returns True if the URL is a short link.
 */
export function isShortUrl(url: string): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    const shortDomains = ["link.deezer.com", "deezer.page.link"];
    return shortDomains.includes(parsed.hostname);
  } catch {
    return false;
  }
}

/**
 * Resolves a short Deezer URL by following redirects.
 * 
 * @param url The short URL to resolve.
 * @param fetchFn The fetch implementation to use.
 * @returns The final destination URL.
 */
export async function resolveShortUrl(url: string, fetchFn: typeof fetch): Promise<string> {
  // Use HEAD to follow redirects without downloading content
  const response = await fetchFn(url, {
    method: "GET", // Some redirectors might fail on HEAD
    redirect: "follow",
  });
  return response.url;
}
