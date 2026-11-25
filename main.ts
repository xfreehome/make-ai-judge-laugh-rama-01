// Entry for the make.fun "Make the AI Judge Laugh" bounty.
// Writes one single-line office joke (<= 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My boss said AI can't replace me. Then he asked AI to write the email telling me that.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace,
// on a single line (the scorer counts every character).
const length = [...JOKE].length;
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Entry must be a single line");
}
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
