import { render } from "@testing-library/react";
import GitHubButton from "./GitHubButton";

describe(GitHubButton, () => {
  it("contains link", () => {
    const testUrl = "TEST_URL";

    const { getByRole } = render(<GitHubButton url={testUrl} />);
    const anchor = getByRole("link");

    expect(anchor).toHaveAttribute("href", testUrl);
  });
});
