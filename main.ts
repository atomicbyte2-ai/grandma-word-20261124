// One Word From Grandma — entry program.
// Writes exactly one word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Node stdlib only. No network, no clock, no randomness, no file reads.
// Paths resolve from this file's own directory; the word is a literal.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve from this file's own directory, never from the working directory.
const HERE = dirname(fileURLToPath(import.meta.url));
void HERE;

// The word grandma would text about AI: the uncanny machine must be witchcraft.
// Lowercase, plain letters, no punctuation tricks — exactly as she would type it.
const WORD = 'witchcraft';

// Guard the gate before writing: one word, 1-30 chars, no whitespace at all.
// Fail loudly instead of shipping an invalid entry.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), WORD, 'utf8');
