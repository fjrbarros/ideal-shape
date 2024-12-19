import { screen } from "@testing-library/react";
import { HomePage } from "./Home";
import { customRender } from "@utils";

describe("HomePage", () => {
  it("renders Header component within HomePage", () => {
    customRender(<HomePage />);
    expect(
      screen.getByRole("link", {
        name: /ideal shape/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /sobre nós/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /nosso espaço/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /nossos planos/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /nossa equipe/i,
      })
    ).toBeInTheDocument();
  });
});
