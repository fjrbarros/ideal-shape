import { screen } from "@testing-library/react";
import { OurTeamSection } from "./OurTeamSection";
import { customRender } from "@utils";
import { TEAM_SUBTITLE, TEAM_TITLE, trainers } from "@constants";

jest.mock("@constants", () => {
  const originalModule = jest.requireActual("@constants");
  return {
    __esModule: true,
    ...originalModule,
    trainers: originalModule.trainers,
  };
});

describe("OurTrainersSection", () => {
  it("should render the section title and subtitle", () => {
    customRender(<OurTeamSection />);
    expect(screen.getByText(TEAM_TITLE)).toBeInTheDocument();
    expect(screen.getByText(TEAM_SUBTITLE)).toBeInTheDocument();
  });

  it("should render trainer cards", () => {
    customRender(<OurTeamSection />);
    const trainerNames = trainers.map((trainer) => trainer.name);
    for (const name of trainerNames) {
      const trainerElement = screen.getByText(name);
      expect(trainerElement).toBeInTheDocument();
    }
  });

  it("should render social media icons for each trainer", () => {
    customRender(<OurTeamSection />);
    const socialMediaTypes = ["facebook", "twitter", "instagram", "linkedin"];
    for (const type of socialMediaTypes) {
      expect(screen.getAllByTestId(type)).toHaveLength(trainers.length);
    }
  });

  it("should render default icon when social media type is not recognized", () => {
    const mockTrainers = [
      {
        name: "Invalid",
        job: "Unknown",
        imageUrl: "https://example.com/invalid.jpg",
        socialLinks: [
          {
            type: "invalid",
            iconUrl: "https://www.invalid.com",
          },
        ],
      },
    ];

    const constants = require("@constants");
    constants.trainers = mockTrainers;

    customRender(<OurTeamSection />);
    expect(screen.getAllByTestId("invalid")).toHaveLength(1);

    constants.trainers = trainers;
  });
});
