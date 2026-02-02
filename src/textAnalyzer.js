const fs = require("fs");

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

function findLongestWord(text) {
  if (!text) return "";
  const words = text.match(/\b\w+\b/g) || [];
  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest,
    ""
  );
}

function countLines(text) {
  if (!text) return 0;
  return text.split("\n").length;
}

// ----- Manual verification -----
if (require.main === module) {
  const quotes = fs.readFileSync("data/quotes.txt", "utf8");
  const sample = fs.readFileSync("data/sample-text.txt", "utf8");

  console.log("Quotes word count:", countWords(quotes));
  console.log("Quotes longest word:", findLongestWord(quotes));
  console.log("Quotes line count:", countLines(quotes));

  console.log("Sample word count:", countWords(sample));
  console.log("Sample longest word:", findLongestWord(sample));
  console.log("Sample line count:", countLines(sample));
}

module.exports = {
  countWords,
  findLongestWord,
  countLines,
};
