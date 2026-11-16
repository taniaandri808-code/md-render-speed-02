import { readFile, writeFile, mkdir } from "fs/promises";
import { resolve } from "path";
import { parse } from "./parse.js";

const INPUT_DIR = process.env.MAKEFUN_INPUT_DIR || "/input";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

async function run() {
  const casesPath = resolve(INPUT_DIR, "cases.json");
  const raw = await readFile(casesPath, "utf8");
  const cases = JSON.parse(raw);
  const results: string[] = [];
  for (const c of cases) {
    const html = parse(c.markdown);
    results.push(html);
  }
  await mkdir(OUTPUT_DIR, { recursive: true });
  const outPath = resolve(OUTPUT_DIR, "html.json");
  await writeFile(outPath, JSON.stringify(results));
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

