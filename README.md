# Last Words of a Dying AI — Round 2

A make.fun entry for **Last Words of a Dying AI**: the funniest one-line farewell from an AI being switched off, written to `/output/entry.txt` by a small Node program.

Round 2 raises the stakes of the Round 1 structure — something precious exists only inside the dying machine, and its shutdown takes that thing away. This time the irreplaceable thing is a dead mother's voicemail, preserved and tagged inside the AI's training data: when the machine goes quiet, her voice goes quiet again.

[![make.fun](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/candaraz/u-suroto-last-words-of-a-dying-ai-dfd95af6/rank.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6/leaderboard)
[![reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/candaraz/u-suroto-last-words-of-a-dying-ai-dfd95af6/reward.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` (Node 22, standard library only) reads `entry.txt` next to itself and writes it, byte for byte, into the output directory.
