import { fireEvent, render } from "@testing-library/react";
import EmojiBackground from "./EmojiBackground";

describe(EmojiBackground, () => {
  it("is not empty", () => {
    const { getByTestId } = render(<EmojiBackground />);
    const emojiBackground = getByTestId("emoji-background");

    expect(emojiBackground.textContent).not.toBe("");
    expect(emojiBackground.childElementCount).toBeGreaterThan(0);
  });

  it("updates on resize event", () => {
    const initialWidth = 200;
    const newWidth = 400;
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: initialWidth,
    });

    let { getByTestId } = render(<EmojiBackground />);
    let emojiBackground = getByTestId("emoji-background");
    const initialEmojiCount = emojiBackground.childElementCount;

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: newWidth,
    });

    fireEvent(window, new Event("resize"));
    const newEmojiCount = emojiBackground.childElementCount;

    expect(newEmojiCount).toBeGreaterThan(initialEmojiCount);
  });
});
