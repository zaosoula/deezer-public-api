import { SearchOptions, SearchOrder } from "./types/index.js";

/**
 * Fluent builder for complex Deezer search queries.
 */
export class SearchBuilder {
  /**
   * Static helper to create a builder.
   */
  static create(query?: string): SearchBuilder {
    return new SearchBuilder(query);
  }

  private options: SearchOptions = {};
  private query: string = "";
  private strictMode?: boolean;
  private orderValue?: SearchOrder;
  private limitValue?: number;
  private indexValue?: number;

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
   * Set the number of results to return.
   */
  limit(value: number): this {
    this.limitValue = value;
    return this;
  }
  
  /**
   * Set the index for pagination.
   */
  index(value: number): this {
    this.indexValue = value;
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
   * Get the limit value.
   */
  getLimit(): number | undefined {
    return this.limitValue;
  }

  /**
   * Get the index value.
   */
  getIndex(): number | undefined {
    return this.indexValue;
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

  /**
   * Alias for build().
   */
  toString(): string {
    return this.build();
  }
}
