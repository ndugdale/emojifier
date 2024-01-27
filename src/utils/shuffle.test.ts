import { shuffle } from "./shuffle";

describe(shuffle, () => {
  it("returns an empty array when provided with an empty array", () => {
    const testInput: any[] = [];
    const testInputClone = JSON.parse(JSON.stringify(testInput));

    const output = shuffle(testInput);

    expect(output).toEqual(testInputClone);
  });

  it("returns an array containing all elements in the input array", () => {
    const testInput = ["A", "B", "C"];
    const testInputClone = JSON.parse(JSON.stringify(testInput));

    const output = shuffle(testInput);

    for (let char of output) {
      expect(testInputClone.includes(char)).toBe(true);
    }
  });

  it("rearranges the order of elements in the input array", () => {
    const testInput = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K"];
    const testInputClone = JSON.parse(JSON.stringify(testInput));

    const output = shuffle(testInput);

    expect(output).not.toEqual(testInputClone);
  });
});
