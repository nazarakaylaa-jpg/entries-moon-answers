// The Moon Finally Answers Back
// u-mang-the-moon-finally-answers-back-781a7ec1
//
// One line, 1 to 240 characters, in the voice of the Moon replying at last
// to the wishes, howls and late-night promises of everyone staring up at it.
// The judge brief rewards, in order: speaking as the Moon answering all
// three (wishes, howls, late-night promises); a real laugh on one read;
// a wry, old, slightly tired Moon voice; a comeback whose turn lands
// before the line ends; and no wasted characters.
//
// The line: the Moon lists everything it has endured — wishes, howls,
// 3 a.m. promises — then undercuts four billion years of it with a single
// admission: it stopped believing any of us somewhere around the Bronze
// Age. Setup names all three prompt elements; the turn is the punchline,
// and it arrives last. 126 characters, inside the 1-240 cap, nothing
// wasted: "four billion years" sets the Moon's age, "Bronze Age" sets the
// joke's clock — the Moon gave up on humanity's promises before recorded
// history even started.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Four billion years of wishes, howls, and 3 a.m. promises — and I stopped believing any of you somewhere around the Bronze Age.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate only accepts UTF-8 text of 1 to 240 characters, so refuse to
// write anything outside that range instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`Entry is ${LINE.length} characters; the gate needs 1-240.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry is only whitespace; the gate rejects it.");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${OUT_FILE}`);
console.log(LINE);
