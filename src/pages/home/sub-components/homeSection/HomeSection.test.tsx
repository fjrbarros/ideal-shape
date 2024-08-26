import { screen } from "@testing-library/react";
import { HomeSection } from "./HomeSection";
import { customRender } from "@utils";

describe("Home", () => {
  it("renders Home section correctly", () => {
    customRender(<HomeSection />);
    expect(screen.getByText(/pronto para treinar/i)).toBeInTheDocument();
    expect(screen.getByText(/seu corpo/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /o treinamento na academia é uma abordagem estrutural e disciplinada ao exercício físico que se concentra na força, na resistência e na melhoria geral do condicionamento físico\./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/20\+/i)).toBeInTheDocument();
    expect(screen.getByText(/anos de experiência/i)).toBeInTheDocument();

    expect(screen.getByText(/15k\+/i)).toBeInTheDocument();
    expect(screen.getByText(/alunos/i)).toBeInTheDocument();

    expect(screen.getByText(/14k\+/i)).toBeInTheDocument();
    expect(screen.getByText(/clientes satisfeitos/i)).toBeInTheDocument();
  });
});
