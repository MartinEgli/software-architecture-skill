import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("validate script passes repository fixtures", () => {
  const result = spawnSync(process.execPath, ["scripts/validate-skill.mjs"], {
    cwd: process.cwd(),
    encoding: "utf8"
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /Skill validation passed/);
});
