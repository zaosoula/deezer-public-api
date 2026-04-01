export class DeezerError extends Error {
  constructor(
    public message: string,
    public type?: string,
    public code?: number,
  ) {
    super(message);
    this.name = "DeezerError";
  }
}

export class DeezerResponseError extends DeezerError {
  constructor(message: string, type: string, code: number) {
    super(message, type, code);
    this.name = "DeezerResponseError";
  }
}

export class DeezerNotFoundError extends DeezerResponseError {
  constructor(message: string) {
    super(message, "DataNotFoundException", 800);
    this.name = "DeezerNotFoundError";
  }
}

export class DeezerRateLimitError extends DeezerResponseError {
  constructor(message: string) {
    super(message, "TooManyRequestsException", 4);
    this.name = "DeezerRateLimitError";
  }
}
