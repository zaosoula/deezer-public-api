import { defineBuildConfig } from "unbuild";
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

export default defineBuildConfig({
  entries: ["src/index"],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    replace: {
      preventAssignment: true,
      values: {
        "process.env.PKG_VERSION": JSON.stringify(pkg.version),
      },
    },
  },
});
