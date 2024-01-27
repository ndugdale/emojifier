import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import TextArea from "./TextArea";

describe(TextArea.displayName as string, () => {
  it("is empty initially", () => {
    const { getByRole } = render(<TextArea />);
    const textArea = getByRole("textbox");

    expect(textArea).toHaveValue("");
  });

  it("displays typed text", async () => {
    const user = userEvent.setup();
    const testInput = "TEST";

    const { getByRole } = render(<TextArea />);
    const textArea = getByRole("textbox");

    await act(async () => {
      await user.type(textArea, testInput);
    });

    expect(textArea).toHaveValue(testInput);
  });

  it("is focused after click", async () => {
    const user = userEvent.setup();

    const { getByRole } = render(<TextArea />);
    const textArea = getByRole("textbox");

    await act(async () => {
      await user.click(textArea);
    });

    expect(textArea).toHaveFocus();
  });
});
