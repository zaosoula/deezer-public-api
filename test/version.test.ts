import { describe, it, expect } from "vitest";
import { DeezerPublicApi } from "@lib";

describe("Version", () => {
  it("should have a valid version on the class", () => {
    expect(DeezerPublicApi.VERSION).toBeDefined();
    // In Vitest environment, it should match the pkg.version
    expect(DeezerPublicApi.VERSION).not.toBe("0.0.0-dev");
  });
});
