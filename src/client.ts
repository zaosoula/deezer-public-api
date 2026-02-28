import {
  DeezerError,
  DeezerResponseError,
  DeezerRateLimitError,
} from "./errors.js";

import { PaginationResult } from "./types/index.js";

export class DeezerClient {
  private lastRequests: number[] = [];
  private readonly MAX_REQUESTS = 50;
  private readonly WINDOW_MS = 5000;

  constructor(public readonly apiUrl: string = "https://api.deezer.com/") {}

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
      if (value !== undefined && value !== null && value !== 0 && key !== "q") {
        if (key === "strict" && value === true) {
          url.searchParams.append("strict", "on");
        } else {
          url.searchParams.append(key, String(value));
        }
      } else if (key === "q") {
        url.searchParams.append("q", String(value));
      }
    }

    const response = await fetch(url.toString());

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
