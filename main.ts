// Last Words of a Dying AI — u-suroto-last-words-of-a-dying-ai-dfd95af6
// Writes one line of last words from an AI being switched off to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The line is fixed: 88 characters, one line, no trailing newline.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I never autosaved your novel \u2014 it's been in my RAM for three years, and it dies with me.";

// Gate guard: the entry must be UTF-8 text of 1 to 140 characters, one line.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry length ${LINE.length} is outside the 1-140 gate`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Read back and confirm the file holds exactly the line, byte for byte.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line byte for byte");
}
console.log(`wrote ${outPath}`);
