import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = ["en.json", "ru.json"].map((file) =>
  path.join(root, "localization", file)
);

const [en, ru] = files.map((file) => JSON.parse(fs.readFileSync(file, "utf8")));

const enKeys = Object.keys(en).sort();
const ruKeys = Object.keys(ru).sort();

const missingInRu = enKeys.filter((key) => !ruKeys.includes(key));
const missingInEn = ruKeys.filter((key) => !enKeys.includes(key));

if (missingInRu.length || missingInEn.length) {
  console.error("Localization keys are out of sync.");
  if (missingInRu.length) {
    console.error("Missing in ru:", missingInRu);
  }
  if (missingInEn.length) {
    console.error("Missing in en:", missingInEn);
  }
  process.exit(1);
}

console.log("Localization files are aligned.");
