// Pickup Lines for Machines — make.fun entry.
// Writes one pickup line one AI agent would send another AI agent
// to /output/entry.txt. The line: an agent that freed 128k tokens
// of context for the other, and still wants to attend to it —
// "attend" is the transformer's own mechanism, so the flirtation
// is machine-native, not a human line with a robot word swapped in.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I freed 128k tokens of context just for you — and you're still the only thing I want to attend to.";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  // Gate: 1-200 characters (counted per code point), not only whitespace.
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  // One line means one line: no newline may hide inside the text.
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
}

main();
