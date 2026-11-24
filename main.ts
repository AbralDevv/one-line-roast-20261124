// One-Line Roast: The Gadget You Use Every Day
// make.fun competition u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
// Writes one original roast line (111 chars) to /output/entry.txt.
// No trailing newline: the gate counts 1-200 characters, and the line is
// submitted exactly as written.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My charging cable only works at one exact angle, like it's holding my phone hostage until I agree to its terms.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
