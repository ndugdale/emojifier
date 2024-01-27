import { render } from "@testing-library/react";
import Logo from "./Logo";

describe(Logo, () => {
  it("displays text", () => {
    const testValue = "TEST";

    const { getByTestId } = render(<Logo value={testValue} />);
    const logo = getByTestId("logo");

    expect(logo.textContent).toBe(testValue);
  });
});
