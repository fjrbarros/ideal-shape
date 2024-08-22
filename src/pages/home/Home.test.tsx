import { render, screen } from "@testing-library/react";
import { HomePage } from "./Home";

describe("HomePage", () => {
  it("renders HomePage component correctly", () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders Header component within HomePage", () => {
    render(<HomePage />);
    expect(screen.getByText(/ideal/i)).toBeInTheDocument();
    expect(screen.getByText(/shape/i)).toBeInTheDocument();
  });
});
