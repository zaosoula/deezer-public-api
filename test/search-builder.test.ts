import { describe, it, expect } from "vitest";
import { SearchBuilder } from "../src/search-builder.js";

describe("SearchBuilder", () => {
  it("should generate a simple query", () => {
    const builder = new SearchBuilder("Daft Punk");
    expect(builder.build()).toBe("Daft Punk");
  });

  it("should add artist filter", () => {
    const builder = new SearchBuilder().artist("Daft Punk");
    expect(builder.build()).toBe('artist:"Daft Punk"');
  });

  it("should add album filter", () => {
    const builder = new SearchBuilder().album("Discovery");
    expect(builder.build()).toBe('album:"Discovery"');
  });

  it("should add track filter", () => {
    const builder = new SearchBuilder().track("One More Time");
    expect(builder.build()).toBe('track:"One More Time"');
  });

  it("should add label filter", () => {
    const builder = new SearchBuilder().label("Parlophone");
    expect(builder.build()).toBe('label:"Parlophone"');
  });

  it("should add durMin filter unquoted", () => {
    const builder = new SearchBuilder().durMin(180);
    expect(builder.build()).toBe("dur_min:180");
  });

  it("should add bpmMin filter unquoted", () => {
    const builder = new SearchBuilder().bpmMin(120);
    expect(builder.build()).toBe("bpm_min:120");
  });

  it("should combine multiple filters", () => {
    const builder = new SearchBuilder("Daft Punk")
      .album("Discovery")
      .durMin(180)
      .durMax(300)
      .bpmMin(120)
      .bpmMax(130);
    expect(builder.build()).toBe(
      'Daft Punk album:"Discovery" dur_min:180 dur_max:300 bpm_min:120 bpm_max:130',
    );
  });

  it("should handle strict mode", () => {
    const builder = new SearchBuilder().strict();
    expect(builder.getStrictMode()).toBe(true);
  });

  it("should handle order", () => {
    const builder = new SearchBuilder().order("RANKING");
    expect(builder.getOrder()).toBe("RANKING");
  });
});
