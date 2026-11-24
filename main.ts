// One-Line Roast: The Gadget You Use Every Day
// Revision build — writes Neon's FINAL line verbatim to entry.txt in the
// grader's output dir ($MAKEFUN_OUTPUT_DIR, else /output, else ./output).
// entry.txt holds exactly the line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  'My $120 smart scale claims to measure my bone density over Wi-Fi, yet after one bowl of ramen it blinks "Welcome, Greg!" and sends my 215-pound roommate a trophy for losing ten pounds overnight.';

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || "/output" || "./output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
