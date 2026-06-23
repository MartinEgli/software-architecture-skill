import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const name = process.argv[2];

if (!name || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
  console.error("Usage: npm run scaffold -- my-skill-name");
  console.error("Name must be lowercase kebab-case.");
  process.exit(1);
}

const title = name
  .split("-")
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(" ");
const target = path.join(root, "skills", name);

if (fs.existsSync(target)) {
  console.error(`Skill already exists: ${path.relative(root, target)}`);
  process.exit(1);
}

function template(file) {
  return fs
    .readFileSync(path.join(root, "templates", file), "utf8")
    .replaceAll("{{name}}", name)
    .replaceAll("{{title}}", title);
}

fs.mkdirSync(path.join(target, "references"), { recursive: true });
fs.mkdirSync(path.join(target, "assets"), { recursive: true });
fs.mkdirSync(path.join(target, "examples"), { recursive: true });

fs.writeFileSync(path.join(target, "SKILL.md"), template("SKILL.md.template"));
fs.writeFileSync(path.join(target, "README.md"), template("skill-README.md.template"));
fs.writeFileSync(path.join(target, "references", "method.md"), template("method.md.template"));
fs.writeFileSync(
  path.join(target, "references", "evidence-discipline.md"),
  fs.readFileSync(
    path.join(root, "skills", "example-skill", "references", "evidence-discipline.md"),
    "utf8"
  )
);
fs.writeFileSync(
  path.join(target, "references", "terminology.md"),
  fs.readFileSync(
    path.join(root, "skills", "example-skill", "references", "terminology.md"),
    "utf8"
  )
);
fs.writeFileSync(
  path.join(target, "references", "boundaries.md"),
  fs.readFileSync(
    path.join(root, "skills", "example-skill", "references", "boundaries.md"),
    "utf8"
  )
);
fs.writeFileSync(
  path.join(target, "assets", "output-template.md"),
  fs.readFileSync(
    path.join(root, "skills", "example-skill", "assets", "output-template.md"),
    "utf8"
  )
);
fs.writeFileSync(
  path.join(target, "assets", "review-matrix-template.md"),
  fs.readFileSync(
    path.join(root, "skills", "example-skill", "assets", "review-matrix-template.md"),
    "utf8"
  )
);
fs.writeFileSync(
  path.join(target, "assets", "checklist-template.md"),
  fs.readFileSync(
    path.join(root, "skills", "example-skill", "assets", "checklist-template.md"),
    "utf8"
  )
);
fs.writeFileSync(path.join(target, "examples", "example-run.md"), template("example-run.md.template"));

console.log(`Created ${path.relative(root, target)}`);
