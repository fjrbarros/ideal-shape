import App from "./App";
import { customRender } from "@utils";

describe("App", () => {
  it("renders App component correctly", () => {
    const { container } = customRender(<App />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
