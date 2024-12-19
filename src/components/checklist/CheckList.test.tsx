import { render, screen } from "@testing-library/react";
import { CheckList } from "./CheckList";

describe("CheckList component", () => {
  it("renders the text passed as a prop", () => {
    render(<CheckList text="Test item" />);
    expect(screen.getByText("Test item")).toBeInTheDocument();
  });

  it("renders the FontAwesomeIcon", () => {
    const { container } = render(<CheckList text="Test item" />);
    const icon = container.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
