import { render, screen, fireEvent } from "@testing-library/react";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { useScrollPosition } from "@utils";

jest.mock("@utils");

describe("ScrollToTopButton", () => {
  it("should not render the button if hasScrollMoved is false", () => {
    (useScrollPosition as jest.Mock).mockReturnValue({ hasScrollMoved: false });

    render(<ScrollToTopButton />);

    expect(screen.queryByRole("button")).toBeNull();
  });

  it("should render the button if hasScrollMoved is true", () => {
    (useScrollPosition as jest.Mock).mockReturnValue({ hasScrollMoved: true });

    render(<ScrollToTopButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should scroll to top when the button is clicked", () => {
    (useScrollPosition as jest.Mock).mockReturnValue({ hasScrollMoved: true });
    window.scrollTo = jest.fn();

    render(<ScrollToTopButton />);

    fireEvent.click(screen.getByRole("button"));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
