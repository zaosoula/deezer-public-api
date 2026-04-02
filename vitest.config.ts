import { defineConfig } from "vitest/config";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    // Ensure both regular tests and type tests are included in discovery
    include: ["**/*.{test,test-d}.{ts,js}"],
    alias: {
      "@lib": process.env.TEST_DIST
        ? resolve(__dirname, "./dist/index.mjs")
        : resolve(__dirname, "./src/index.ts"),
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "json-summary"],
      exclude: ["node_modules/**", "dist/**", "test/**"],
    },
    typecheck: {
      include: ["**/*.test-d.ts"],
    },
    env: {
      PKG_VERSION: pkg.version,
    },
  },
});
