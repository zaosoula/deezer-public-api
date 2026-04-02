import {
  DeezerError,
  DeezerResponseError,
  DeezerRateLimitError,
} from "./errors.js";
import { version } from "./version.js";

import { PaginationResult } from "./types/index.js";

/**
 * Options for initializing the Deezer client.
 */
export interface DeezerClientOptions {
  /**
   * The base URL for the Deezer API.
   * @default "https://api.deezer.com/"
   */
  apiUrl?: string;
  /**
   * Enable debug mode to log all requests to stdout.
   * @default false
   */
  debug?: boolean;
  /**
   * Custom User-Agent header to identify your application.
   * If provided, it will be prefixed to the default library identifier.
   */
  userAgent?: string;
  /**
   * Custom fetch implementation.
   * @default globalThis.fetch
   */
  fetch?: typeof fetch;
}

/**
 * Internal client for handling Deezer API requests, rate limiting, and response parsing.
 */
export class DeezerClient {
  private lastRequests: number[] = [];
  private readonly MAX_REQUESTS = 50;
  private readonly WINDOW_MS = 5000;
  private readonly apiUrl: string;
  private readonly debug: boolean;
  private readonly userAgent: string;
  private readonly customFetch: typeof fetch;

  constructor(options: DeezerClientOptions = {}) {
    this.apiUrl = options.apiUrl || "https://api.deezer.com/";
    this.debug = options.debug || false;
    this.customFetch = options.fetch || globalThis.fetch;

    const libId = `deezer-public-api/${version} (https://github.com/zaosoula/deezer-public-api)`;
    this.userAgent = options.userAgent
      ? `${options.userAgent} via ${libId}`
      : libId;
  }

  private async throttle(): Promise<void> {
    const now = Date.now();
    this.lastRequests = this.lastRequests.filter(
      (time) => now - time < this.WINDOW_MS,
    );

    if (this.lastRequests.length >= this.MAX_REQUESTS) {
      const waitTime = this.WINDOW_MS - (now - this.lastRequests[0]);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      return this.throttle();
    }

    this.lastRequests.push(now);
  }

  async request<T>(path: string, params: Record<string, any> = {}): Promise<T> {
    await this.throttle();

    const url = new URL(
      path.startsWith("http") ? path : `${this.apiUrl}${path}`,
    );

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null && key !== "q") {
        if (key === "strict" && value === true) {
          url.searchParams.append("strict", "on");
        } else {
          url.searchParams.append(key, String(value));
        }
      } else if (key === "q") {
        url.searchParams.append("q", String(value));
      }
    }

    if (this.debug) {
      console.log(`[DeezerPublicApi] Request: ${url.toString()}`);
    }

    const response = await this.customFetch(url.toString(), {
      headers: {
        "User-Agent": this.userAgent,
      },
    });

    if (!response.ok) {
      throw new DeezerError(
        `Deezer API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    if (data.error) {
      const { message, type, code } = data.error;
      if (code === 4 || type === "TooManyRequestsException") {
        throw new DeezerRateLimitError(message);
      }
      throw new DeezerResponseError(message, type, code);
    }

    // Wrap for pagination if it looks like a list
    if (data.data && Array.isArray(data.data) && (data.next || data.prev)) {
      return this.wrapPagination<any>(data) as T;
    }

    return data as T;
  }

  private wrapPagination<T>(data: any): PaginationResult<T> {
    const result: PaginationResult<T> = {
      data: data.data,
      total: data.total,
    };

    if (data.next) {
      result.next = () => this.request<PaginationResult<T>>(data.next);
    }

    if (data.prev) {
      result.prev = () => this.request<PaginationResult<T>>(data.prev);
    }

    return result;
  }
}
