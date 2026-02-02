const {
  countWords,
  findLongestWord,
  countLines,
} = require("../src/textAnalyzer");

describe("Text Analyzer", () => {
  const text = "Hello world\nThis is a test";

  test("counts total words", () => {
    expect(countWords(text)).toBe(6);
  });

  test("finds the longest word", () => {
    expect(findLongestWord(text)).toBe("Hello");
  });

  test("counts number of lines", () => {
    expect(countLines(text)).toBe(2);
  });

  test("handles empty text", () => {
    expect(countWords("")).toBe(0);
    expect(findLongestWord("")).toBe("");
    expect(countLines("")).toBe(0);
  });
});
