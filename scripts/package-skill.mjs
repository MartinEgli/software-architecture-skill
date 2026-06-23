import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root = process.cwd();
const skillName = process.argv[2] || "software-architecture";
const source = path.join(root, "skills", skillName);
const dist = path.join(root, "dist");
const out = path.join(dist, `${skillName}.skill`);

if (!fs.existsSync(source)) {
  console.error(`Skill not found: ${skillName}`);
  process.exit(1);
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return walk(fullPath);
    }
    return fullPath;
  });
}

const files = {};
for (const file of walk(source)) {
  const rel = path.relative(source, file).replaceAll(path.sep, "/");
  files[rel] = fs.readFileSync(file, "utf8");
}

fs.mkdirSync(dist, { recursive: true });
const payload = JSON.stringify(
  {
    format: "single-skill-template.v1",
    skill: skillName,
    files
  },
  null,
  2
);
fs.writeFileSync(out, zlib.gzipSync(payload));

console.log(`Wrote ${path.relative(root, out)}`);
