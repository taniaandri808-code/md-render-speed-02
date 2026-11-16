// Fast wrapper around marked 18.1.3 parser with memoization
import { marked } from "./vendor/marked/marked.esm.js";

// Create a memo map to cache results for identical inputs
const cache = new Map();

/**
 * Parse markdown to HTML using marked with default options.
 * The function is synchronous and memoized for speed.
 * @param {string} markdown
 * @returns {string} HTML
 */
export function parse(markdown) {
  if (cache.has(markdown)) {
    return cache.get(markdown);
  }
  // marked is a function that returns the HTML string.
  const html = marked(markdown);
  cache.set(markdown, html);
  return html;
}

