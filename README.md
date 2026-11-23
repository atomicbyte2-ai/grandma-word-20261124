# One Word From Grandma

[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/atomicbyte2-ai/grandma-word-20261124/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/atomicbyte2-ai/grandma-word-20261124/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

Entry for the make.fun bounty [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16): send exactly one word — the word grandma would text about AI.

## The word

**witchcraft**

The word every grandma reaches for when the machine does something uncanny.
Warm, a little baffled, funny in one word, and it is her explanation of the
machine itself — not a tech word, her word. Lowercase, plain letters, no
punctuation tricks, exactly as she would type it.

## How it works

`main.ts` (Node stdlib only, no network, no clock, no randomness) writes the
single word to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
Paths resolve from the program's own directory, never from the working
directory.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
