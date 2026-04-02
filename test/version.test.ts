import { describe, it, expect } from "vitest";
import { getVersion, version } from "../src/version.js";

describe("Version", () => {
  it("should have a valid version from environment", () => {
    expect(version).toBeDefined();
    // In Vitest environment, it should match the pkg.version
    expect(version).not.toBe("0.0.0-dev");
  });

  describe("getVersion helper", () => {
    it("should return the provided version", () => {
      expect(getVersion("1.2.3")).toBe("1.2.3");
    });

    it("should return fallback if no version provided", () => {
      expect(getVersion(undefined)).toBe("0.0.0-dev");
      expect(getVersion("")).toBe("0.0.0-dev");
    });
  });
});
