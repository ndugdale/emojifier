import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import CopyButton from "./CopyButton";

describe(CopyButton, () => {
  it("copies to clipboard on click", async () => {
    const testValue = "TEST";
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    const { getByRole } = render(<CopyButton copyText={testValue} />);
    const button = getByRole("button");

    await act(async () => {
      await userEvent.click(button);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(testValue);
  });
});
