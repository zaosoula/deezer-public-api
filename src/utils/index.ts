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
    
    // Handle standard URLs: deezer.com/{language}/{type}/{id} or deezer.com/{type}/{id}
    const pathParts = parsed.pathname.split("/").filter(Boolean);
    
    // If first part is a language code (2 chars), skip it
    let typeIndex = 0;
    if (pathParts[0]?.length === 2 && pathParts[0] !== "us") {
      typeIndex = 1;
    }

    const type = pathParts[typeIndex];
    const id = pathParts[typeIndex + 1];

    const validTypes = ["track", "album", "artist", "playlist", "podcast", "episode", "radio", "user"];
    
    if (type && id && validTypes.includes(type)) {
      return { type: type as any, id };
    }

    return null;
  } catch {
    return null;
  }
}
