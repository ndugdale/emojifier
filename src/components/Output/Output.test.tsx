import { render } from "@testing-library/react";
import Output from "./Output";

describe(Output, () => {
  it("displays provided value", () => {
    const testValue = "TEST";

    const { getByTestId } = render(<Output value={testValue} />);
    const output = getByTestId("output");

    expect(output.textContent).toBe(testValue);
  });
});
