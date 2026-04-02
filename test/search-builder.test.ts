import { describe, it, expect } from "vitest";
import { SearchBuilder } from "../src/search-builder.js";

describe("SearchBuilder", () => {
  it("should generate a simple query", () => {
    const builder = new SearchBuilder("Daft Punk");
    expect(builder.build()).toBe("Daft Punk");
  });

  it("should support static create method", () => {
    const builder = SearchBuilder.create("Daft Punk");
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

  it("should set the limit", () => {
    const builder = new SearchBuilder().limit(50);
    expect(builder.getLimit()).toBe(50);
  });

  it("should set the index", () => {
    const builder = new SearchBuilder().index(100);
    expect(builder.getIndex()).toBe(100);
  });

  it("should not include limit/index in the built query string", () => {
    const builder = new SearchBuilder("daft punk").limit(10).index(20);
    expect(builder.build()).toBe("daft punk");
  });

  it("should have toString() alias for build()", () => {
    const builder = new SearchBuilder("test").album("Discovery");
    expect(String(builder)).toBe('test album:"Discovery"');
  });

  it("should skip undefined values in options loop", () => {
    const builder = new SearchBuilder("test");
    (builder as any).options = { artist: "Daft Punk", album: undefined };
    expect(builder.build()).toBe('test artist:"Daft Punk"');
  });
});
