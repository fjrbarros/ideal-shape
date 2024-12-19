import { screen } from "@testing-library/react";
import { OurSpaceSection } from "./OurSpaceSection";
import { OUR_SPACE_SECTION, ourSpaceItems } from "@constants";
import { customRender } from "@utils";

describe("OurSpaceSection", () => {
  it("renders the title correctly", () => {
    customRender(<OurSpaceSection />);
    const title = screen.getByText(OUR_SPACE_SECTION);
    expect(title).toBeInTheDocument();
  });

  it("renders all images with correct alt text", () => {
    customRender(<OurSpaceSection />);
    const images = [
      { alt: "space1", src: "../../../../assets/ideal-space-3.jpg" },
      { alt: "space2", src: "../../../../assets/ideal-space-2.jpg" },
      { alt: "space3", src: "../../../../assets/ideal-space-1.jpg" },
    ];

    for (const image of images) {
      const imgElement = screen.getByAltText(image.alt);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute("src", "test-file-stub");
    }
  });

  it("renders all checklist items", () => {
    customRender(<OurSpaceSection />);
    for (const item of ourSpaceItems) {
      const checklistItem = screen.getByText(item);
      expect(checklistItem).toBeInTheDocument();
    }
  });
});
