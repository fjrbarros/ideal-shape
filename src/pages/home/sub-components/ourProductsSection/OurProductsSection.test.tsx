import { screen } from "@testing-library/react";
import { OurProductsSection } from "./OurProductsSection";
import { products, PRODUCTS_TITLE, PRODUCTS_SUBTITLE } from "@constants";
import { customRender } from "@utils";

describe("OurProductsSection", () => {
  it("should render the section title and subtitle", () => {
    customRender(<OurProductsSection />);
    expect(screen.getByText(PRODUCTS_TITLE)).toBeInTheDocument();
    expect(screen.getByText(PRODUCTS_SUBTITLE)).toBeInTheDocument();
  });

  it("should render the correct number of product cards", () => {
    customRender(<OurProductsSection />);
    const cardGrid = screen.getByTestId("product-cards");
    expect(cardGrid.children.length).toBe(products.length);
  });

  it("should render product details correctly", () => {
    customRender(<OurProductsSection />);
    products.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByText(product.price)).toBeInTheDocument();
      expect(screen.getByText(product.discountPrice)).toBeInTheDocument();
    });
  });
});
