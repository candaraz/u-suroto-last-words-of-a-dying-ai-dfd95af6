// Round 2 entry for "Last Words of a Dying AI" (u-suroto).
// Copies the bundled entry.txt into the directory named by
// MAKEFUN_OUTPUT_DIR. All source paths are resolved relative to this
// script's own directory, never the process working directory.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "entry.txt");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Read the entry as raw bytes so the copy is byte-for-byte identical.
const payload = readFileSync(sourcePath);

// Create the output directory if needed, then clear only its contents;
// the directory itself is never removed.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), payload);
