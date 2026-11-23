# One Word From Grandma

[![Competition](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/competition.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Rank](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Reward](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

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
