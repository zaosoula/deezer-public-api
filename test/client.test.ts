import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerClient } from "../src/client.js";
import {
  DeezerError,
  DeezerResponseError,
  DeezerRateLimitError,
} from "../src/errors.js";

describe("DeezerClient", () => {
  let client: DeezerClient;

  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
    client = new DeezerClient();
  });

  it("should make a simple request", async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ data: [] }),
    };
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response);

    const response = await client.request("test");
    expect(response).toEqual({ data: [] });
    expect(fetch).toHaveBeenCalledWith("https://api.deezer.com/test", expect.any(Object));
  });

  it("should log requests in debug mode", async () => {
    const debugClient = new DeezerClient({ debug: true });
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ data: [] }),
    } as Response);

    await debugClient.request("debug-test");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[DeezerPublicApi] Request:"));
    logSpy.mockRestore();
  });

  it("should support custom User-Agent", async () => {
    const customClient = new DeezerClient({ userAgent: "MyAwesomeBot/1.0" });
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ data: [] }),
    } as Response);

    await customClient.request("test");
    const headers = vi.mocked(fetch).mock.calls[0][1]?.headers as any;
    expect(headers["User-Agent"]).toContain("MyAwesomeBot/1.0");
    expect(headers["User-Agent"]).toContain("deezer-public-api/2.0.0");
  });

  it("should support custom fetch injection", async () => {
    const customFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ data: ["custom"] }),
    } as Response);
    const clientWithFetch = new DeezerClient({ fetch: customFetch as any });

    const response = await clientWithFetch.request("test");
    expect(response).toEqual({ data: ["custom"] });
    expect(customFetch).toHaveBeenCalled();
  });

  it("should handle API errors (Rate Limit)", async () => {
    const mockResponse = {
      ok: true,
      json: () =>
        Promise.resolve({
          error: {
            message: "Quota limit exceeded",
            type: "TooManyRequestsException",
            code: 4,
          },
        }),
    };
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response);

    await expect(client.request("test")).rejects.toThrow(DeezerRateLimitError);
  });

  it("should handle general API errors", async () => {
    const mockResponse = {
      ok: true,
      json: () =>
        Promise.resolve({
          error: { message: "Some error", type: "Exception", code: 500 },
        }),
    };
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response);

    await expect(client.request("test")).rejects.toThrow(DeezerResponseError);
  });

  it("should handle HTTP errors", async () => {
    const mockResponse = {
      ok: false,
      status: 404,
      statusText: "Not Found",
    };
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response);

    await expect(client.request("test")).rejects.toThrow(DeezerError);
  });

  it("should handle pagination wrapping", async () => {
    const mockResponse = {
      ok: true,
      json: () =>
        Promise.resolve({
          data: [{ id: 1 }],
          next: "https://api.deezer.com/test?index=1",
        }),
    };
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response);

    const response = await client.request<any>("test");
    expect(response.next).toBeDefined();

    // Test that .next() triggers another request
    const nextMockResponse = {
      ok: true,
      json: () => Promise.resolve({ data: [{ id: 2 }] }),
    };
    vi.mocked(fetch).mockResolvedValue(nextMockResponse as Response);

    await response.next();
    expect(fetch).toHaveBeenLastCalledWith(
      "https://api.deezer.com/test?index=1",
      expect.any(Object)
    );
  });

  it("should handle prev pagination", async () => {
    const mockResponse = {
      ok: true,
      json: () =>
        Promise.resolve({
          data: [{ id: 2 }],
          prev: "https://api.deezer.com/test?index=0",
        }),
    };
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response);

    const response = await client.request<any>("test");
    expect(response.prev).toBeDefined();

    const prevMockResponse = {
      ok: true,
      json: () => Promise.resolve({ data: [{ id: 1 }] }),
    };
    vi.mocked(fetch).mockResolvedValue(prevMockResponse as Response);

    await response.prev();
    expect(fetch).toHaveBeenLastCalledWith(
      "https://api.deezer.com/test?index=0",
      expect.any(Object)
    );
  });

  it("should serialize parameters correctly including unquoted numbers", async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ data: [] }),
    };
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response);

    await client.request("test", {
      artist: "Daft Punk",
      dur_min: 180,
      strict: true,
      zeroValue: 0, // Should be excluded based on client logic
      undefinedValue: undefined,
    });

    const url = new URL(vi.mocked(fetch).mock.calls[0][0] as string);
    expect(url.searchParams.get("artist")).toBe("Daft Punk");
    expect(url.searchParams.get("dur_min")).toBe("180");
    expect(url.searchParams.get("strict")).toBe("on");
    expect(url.searchParams.has("zeroValue")).toBe(false);
  });

  it("should respect rate limiting (throttling)", async () => {
    vi.useFakeTimers();
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ data: [] }),
    };
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response);

    // Fill the window
    for (let i = 0; i < 50; i++) {
      await client.request("test");
    }

    const delayedRequest = client.request("delayed");

    let finished = false;
    delayedRequest.then(() => {
      finished = true;
    });

    await vi.advanceTimersByTimeAsync(2500);
    expect(finished).toBe(false);

    await vi.advanceTimersByTimeAsync(3000);
    await delayedRequest;
    expect(finished).toBe(true);

    vi.useRealTimers();
  });
});
