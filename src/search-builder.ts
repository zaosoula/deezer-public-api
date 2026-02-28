import { SearchOptions, SearchOrder } from "./types/index.js";

/**
 * Fluent builder for complex Deezer search queries.
 */
export class SearchBuilder {
  private options: SearchOptions = {};
  private query: string = "";
  private strictMode?: boolean;
  private orderValue?: SearchOrder;

  /**
   * Create a new SearchBuilder.
   * @param query Initial query string.
   */
  constructor(query?: string) {
    if (query) this.query = query;
  }

  /**
   * Search by artist name.
   */
  artist(name: string): this {
    this.options.artist = name;
    return this;
  }

  /**
   * Search by album title.
   */
  album(title: string): this {
    this.options.album = title;
    return this;
  }

  /**
   * Search by track title.
   */
  track(title: string): this {
    this.options.track = title;
    return this;
  }

  /**
   * Search by music label.
   */
  label(name: string): this {
    this.options.label = name;
    return this;
  }

  /**
   * Search by minimum duration (seconds).
   */
  durMin(seconds: number): this {
    this.options.dur_min = seconds;
    return this;
  }

  /**
   * Search by maximum duration (seconds).
   */
  durMax(seconds: number): this {
    this.options.dur_max = seconds;
    return this;
  }

  /**
   * Search by minimum BPM.
   */
  bpmMin(value: number): this {
    this.options.bpm_min = value;
    return this;
  }

  /**
   * Search by maximum BPM.
   */
  bpmMax(value: number): this {
    this.options.bpm_max = value;
    return this;
  }

  /**
   * Enable strict mode for the search.
   */
  strict(): this {
    this.strictMode = true;
    return this;
  }

  /**
   * Set the sorting order for the search.
   */
  order(value: SearchOrder): this {
    this.orderValue = value;
    return this;
  }

  /**
   * Get the strict mode status.
   */
  getStrictMode(): boolean | undefined {
    return this.strictMode;
  }

  /**
   * Get the order value.
   */
  getOrder(): SearchOrder | undefined {
    return this.orderValue;
  }

  /**
   * Build the final query string.
   */
  build(): string {
    let q = this.query;
    if (q) q += " ";

    for (const [key, value] of Object.entries(this.options)) {
      if (value !== undefined) {
        if (typeof value === "number") {
          q += `${key}:${value} `;
        } else {
          q += `${key}:"${value}" `;
        }
      }
    }
    return q.trim();
  }
}
