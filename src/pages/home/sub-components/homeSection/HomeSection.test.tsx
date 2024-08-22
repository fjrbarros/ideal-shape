import { render } from "@testing-library/react";
import { HomeSection } from "./HomeSection";

describe("Home", () => {
  it("renders Home component correctly", () => {
    const { container } = render(<HomeSection />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
