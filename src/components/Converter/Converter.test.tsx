import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Converter from "./Converter";
import { charToEmojiMap } from "../../utils/converter";

describe(Converter, () => {
  it("output is empty when input is empty", () => {
    const { getByRole, getByTestId } = render(<Converter />);
    const input = getByRole("textbox");
    const output = getByTestId("output");

    expect(input).toHaveValue("");
    expect(output.textContent).toBe("");
  });

  it("output translates input if emoji exists", async () => {
    const user = userEvent.setup();
    const testInputChar = "A";

    const { getByRole, getByTestId } = render(<Converter />);
    const input = getByRole("textbox");
    const output = getByTestId("output");

    await act(async () => {
      await user.type(input, testInputChar);
    });

    expect(input).toHaveValue(testInputChar);
    expect(charToEmojiMap[testInputChar.toLowerCase()]).toContain(
      output.textContent,
    );
  });

  it("output does not translate input if no emoji exists", async () => {
    const user = userEvent.setup();
    const testInputChar = "'";

    const { getByRole, getByTestId } = render(<Converter />);
    const input = getByRole("textbox");
    const output = getByTestId("output");

    await act(async () => {
      await user.type(input, testInputChar);
    });

    expect(input).toHaveValue(testInputChar);
    expect(output.textContent).toBe(testInputChar);
  });
});
