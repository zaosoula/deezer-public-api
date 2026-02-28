import { describe, it, expect } from "vitest";
import {
  DeezerError,
  DeezerResponseError,
  DeezerRateLimitError,
  DeezerNotFoundError,
} from "../src/errors.js";

describe("Custom Errors", () => {
  it("DeezerError should be an instance of Error", () => {
    const error = new DeezerError("Generic error");
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe("Generic error");
    expect(error.name).toBe("DeezerError");
  });

  it("DeezerResponseError should store API error details", () => {
    const error = new DeezerResponseError("API failure", "Exception", 100);
    expect(error).toBeInstanceOf(DeezerError);
    expect(error.message).toBe("API failure");
    expect(error.type).toBe("Exception");
    expect(error.code).toBe(100);
  });

  it("DeezerNotFoundError should be specialized", () => {
    const error = new DeezerNotFoundError("Not found");
    expect(error).toBeInstanceOf(DeezerResponseError);
    expect(error.type).toBe("DataNotFoundException");
    expect(error.code).toBe(800);
  });

  it("DeezerRateLimitError should be specialized", () => {
    const error = new DeezerRateLimitError("Too many requests");
    expect(error).toBeInstanceOf(DeezerError);
    expect(error.message).toBe("Too many requests");
  });
});
