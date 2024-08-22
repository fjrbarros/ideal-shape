import { screen } from "@testing-library/react";
import { AppContainer } from "./AppContainer";
import { customRender } from "@utils";

describe("AppContainer", () => {
  it("renders children correctly", () => {
    customRender(
      <AppContainer>
        <div>Test Child</div>
      </AppContainer>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("passes additional props correctly", () => {
    const { container } = customRender(
      <AppContainer data-testid="app-container">
        <div>Test Child</div>
      </AppContainer>
    );
    expect(container.firstChild).toHaveAttribute(
      "data-testid",
      "app-container"
    );
  });
});
