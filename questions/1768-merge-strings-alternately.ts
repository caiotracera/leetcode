import assert from "node:assert";
import { describe, it } from "bun:test";

function mergeAlternately(word1: string, word2: string): string {
  let output = "";

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) {
      output += word1[i];
    }

    if (i < word2.length) {
      output += word2[i];
    }
  }

  return output;
}

describe("1768. Merge Strings Alternately", () => {
  it("should return 'apbqcr' for word1 = 'abc' and word2 = 'pqr'", () => {
    assert.strictEqual(mergeAlternately("abc", "pqr"), "apbqcr");
  });

  it("should reutnr 'apbqrs' for word1 = 'ab', word2 = 'pqrs'", () => {
    assert.strictEqual(mergeAlternately("ab", "pqrs"), "apbqrs");
  });

  it("should reutnr 'apbqcd' for word1 = 'abcd', word2 = 'pq'", () => {
    assert.strictEqual(mergeAlternately("abcd", "pq"), "apbqcd");
  });
});
