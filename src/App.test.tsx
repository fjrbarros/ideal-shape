import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);

    expect(screen.getByText("test config")).toBeInTheDocument();
  });
});
