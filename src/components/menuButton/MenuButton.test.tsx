import { render, fireEvent, screen } from "@testing-library/react";
import { MenuButton } from "./MenuButton";

describe("MenuButton Component", () => {
  it("renders MenuButton component", () => {
    render(<MenuButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("onClick callback is called when button is clicked", () => {
    const handleClick = jest.fn();
    render(<MenuButton onClick={handleClick} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
