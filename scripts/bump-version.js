import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.resolve(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

const currentVersion = packageJson.version;
const versionParts = currentVersion.split(".").map(Number);

// Usage: npm run bump [major|minor|patch]
// Default is patch
// process.argv for `npm run bump` usually looks like: [node, script, ...args]
// But with npm run, args are passed after --
// If just running `node scripts/bump-version.js arg`, it's index 2.

const type = process.argv[2] || "patch";

if (type === "major") {
  versionParts[0]++;
  versionParts[1] = 0;
  versionParts[2] = 0;
} else if (type === "minor") {
  versionParts[1]++;
  versionParts[2] = 0;
} else if (type === "patch") {
  versionParts[2]++;
} else {
  console.error("Invalid version type. Use major, minor, or patch.");
  process.exit(1);
}

const newVersion = versionParts.join(".");
packageJson.version = newVersion;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

console.log(`Version bumped from ${currentVersion} to ${newVersion}`);
