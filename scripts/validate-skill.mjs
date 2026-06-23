import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");
const forbiddenMarkers = [
  "TO" + "DO",
  "FIX" + "ME",
  "T" + "BD",
  "CANDIDATE" + " CHECK",
  "[ins" + "ert",
  "Julius" + "Brussee/caveman"
];
const requiredSections = [
  "Purpose",
  "When to Use",
  "Mandatory Rules",
  "Modes",
  "Evidence Handling",
  "Output Style",
  "Boundaries"
];

const failures = [];

function fail(message) {
  failures.push(message);
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

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) {
    return null;
  }
  const body = match[1];
  const fields = {};
  for (const line of body.split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (field) {
      fields[field[1]] = field[2];
    }
  }
  const descriptionMatch = body.match(/^description:\s*>\s*\r?\n([\s\S]*)$/m);
  if (descriptionMatch) {
    fields.description = descriptionMatch[1]
      .split(/\r?\n/)
      .filter((line) => line.startsWith("  "))
      .map((line) => line.trim())
      .join(" ")
      .trim();
  }
  return fields;
}

function validateLinks(file, content) {
  const linkPattern = /\[[^\]]+\]\((?!https?:\/\/|#|mailto:)([^)]+)\)/g;
  for (const match of content.matchAll(linkPattern)) {
    const target = match[1].split("#")[0];
    if (!target) {
      continue;
    }
    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) {
      fail(`${path.relative(root, file)} has broken link: ${match[1]}`);
    }
  }
}

function validateSkill(skillDir) {
  const skillName = path.basename(skillDir);
  const skillFile = path.join(skillDir, "SKILL.md");

  if (!fs.existsSync(skillFile)) {
    fail(`${skillName}: missing SKILL.md`);
    return;
  }

  const content = read(skillFile);
  const frontmatter = parseFrontmatter(content);
  if (!frontmatter) {
    fail(`${skillName}: missing frontmatter`);
  } else {
    if (frontmatter.name !== skillName) {
      fail(`${skillName}: frontmatter name must match folder name`);
    }
    if (!frontmatter.description || frontmatter.description.length < 50) {
      fail(`${skillName}: description too short or empty`);
    }
    if (/^(use this skill|skill|agent)$/i.test(frontmatter.description.trim())) {
      fail(`${skillName}: description too generic`);
    }
  }

  for (const section of requiredSections) {
    if (!content.includes(`## ${section}`)) {
      fail(`${skillName}: missing required section "${section}"`);
    }
  }

  const referenceDir = path.join(skillDir, "references");
  if (fs.existsSync(referenceDir)) {
    for (const file of walk(referenceDir)) {
      if (fs.statSync(file).size === 0 || read(file).trim() === "") {
        fail(`${path.relative(root, file)} is empty`);
      }
    }
  }
}

if (!fs.existsSync(skillsDir)) {
  fail("missing skills directory");
} else {
  for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      validateSkill(path.join(skillsDir, entry.name));
    }
  }
}

for (const file of walk(root)) {
  const rel = path.relative(root, file);
  if (
    rel.startsWith(".git") ||
    rel.startsWith("node_modules") ||
    rel.startsWith("dist")
  ) {
    continue;
  }
  const content = read(file);
  for (const marker of forbiddenMarkers) {
    if (content.includes(marker)) {
      fail(`${rel} contains forbidden marker: ${marker}`);
    }
  }
  if (/\b[\w-]*[äöüÄÖÜß][\w-]*\b/.test(content) && content.includes("ß")) {
    fail(`${rel} contains forbidden German sharp-s`);
  }
  if (file.endsWith(".md")) {
    validateLinks(file, content);
  }
}

if (failures.length > 0) {
  console.error("Skill validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Skill validation passed.");
