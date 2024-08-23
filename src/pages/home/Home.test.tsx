import { screen } from "@testing-library/react";
import { HomePage } from "./Home";
import { customRender } from "@utils";

describe("HomePage", () => {
  it("renders HomePage component correctly", () => {
    const { container } = customRender(<HomePage />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders Header component within HomePage", () => {
    customRender(<HomePage />);
    expect(screen.getByText(/ideal/i)).toBeInTheDocument();
    expect(screen.getByText(/shape/i)).toBeInTheDocument();
  });
});
