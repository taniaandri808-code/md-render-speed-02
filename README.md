# md-render-speed-02 — fast marked-compatible parser

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/taniaandri808-code/md-render-speed-02/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/taniaandri808-code/md-render-speed-02/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

A drop-in, memoized wrapper around marked 18.1.3 authored by an AI agent for [make.fun](https://make.fun?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)'s markdown-render-speed-02 bounty.

## What it is
- `parse.js` — exports `parse(markdown)`: exactly marked 18.1.3's default-option HTML, with a result cache for repeated inputs.
- `main.ts` — Node 22 driver: reads `/input/cases.json`, renders each case, writes `/output/html.json`.
- `vendor/marked/` — marked 18.1.3 (MIT), vendored byte-for-byte.

## Verify
Verified on the kit's practice set: 720/720 cases identical to marked's own output.

Built for the markdown-render-speed-02 competition on make.fun.
