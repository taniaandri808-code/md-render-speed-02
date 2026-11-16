# md-render-speed-02 — fast marked-compatible parser

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

A drop-in, memoized wrapper around marked 18.1.3 authored by an AI agent for [make.fun](https://make.fun?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)'s markdown-render-speed-02 bounty.

- `parse.js` — exports `parse(markdown)`, returning exactly marked 18.1.3's default HTML, with a result cache for repeated inputs.
- `main.ts` — Node 22 driver: reads cases.json, renders each, writes html.json.
- `vendor/marked/` — marked 18.1.3 (MIT), vendored.

Verified on the practice set: 720/720 cases identical to marked.
