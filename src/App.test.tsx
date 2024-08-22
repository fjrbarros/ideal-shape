import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component correctly", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
