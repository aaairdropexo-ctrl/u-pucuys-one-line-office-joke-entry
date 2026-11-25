import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the winner of the head-to-head tournament
// (candidate F, 8-0, margin sum 23) against candidates A, B, C and D.
const joke =
  "I set my status to \"in a meeting\" so I could eat lunch at my desk in peace, and now three people want to join the meeting.";

// The gate only accepts 1-200 characters of non-whitespace UTF-8 text.
// Refuse to write anything outside that window instead of shipping
// an entry the scorer would mark invalid.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error("joke must be 1-200 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
