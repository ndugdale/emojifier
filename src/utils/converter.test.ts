import { charToEmojiMap, convertToEmojis } from "./converter";

describe(convertToEmojis, () => {
  it("converts empty string to empty string", () => {
    const testInput = "";
    const testSeed = 0;

    const output = convertToEmojis(testInput, testSeed);

    expect(output).toBe("");
  });

  it("converts chars with corresponding emojis", () => {
    const testInput = "ABC";
    const testSeed = 0;

    const stringContainsCharFromArray = (
      str: string,
      arr: string[],
    ): boolean => {
      for (let char of arr) {
        if (str.includes(char)) return true;
      }
      return false;
    };

    const output = convertToEmojis(testInput, testSeed);

    for (let char of testInput.toLowerCase()) {
      expect(stringContainsCharFromArray(output, charToEmojiMap[char]));
    }
  });

  it("does not convert chars without corresponding emojis", () => {
    const testInput = "',\"";
    const testSeed = 0;

    const output = convertToEmojis(testInput, testSeed);

    expect(output).toBe(testInput);
  });
});
