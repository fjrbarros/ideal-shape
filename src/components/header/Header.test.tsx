import { fireEvent, screen } from "@testing-library/react";
import { Header } from "./Header";
import { useState } from "react";
import { customRender } from "@utils";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Header", () => {
  const setStateMock = jest.fn();
  beforeEach(() => {
    (useState as jest.Mock).mockImplementation((init) => [init, setStateMock]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Header component correctly", () => {
    customRender(<Header />);

    expect(screen.getByText(/ideal/i)).toBeInTheDocument();
    expect(screen.getByText(/shape/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Nossos serviços/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Planos/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Instrutores/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contato/i })).toBeInTheDocument();
  });

  it("toggles menu state when MenuButton is clicked", () => {
    const { container } = customRender(<Header />);
    const menuButton = container.querySelector(
      ".menu-button"
    ) as HTMLLabelElement;

    fireEvent.click(menuButton);

    expect(setStateMock).toHaveBeenCalledWith(true);
  });

  it("resets menu state on window resize", () => {
    (useState as jest.Mock).mockImplementation(() => [true, setStateMock]);

    customRender(<Header />);

    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));

    expect(setStateMock).toHaveBeenCalledWith(false);
  });

  it("does not reset menu state on window resize if isMenuActive is false", () => {
    (useState as jest.Mock).mockImplementation(() => [false, setStateMock]);

    customRender(<Header />);

    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));

    expect(setStateMock).not.toHaveBeenCalledWith(false);
  });
});
