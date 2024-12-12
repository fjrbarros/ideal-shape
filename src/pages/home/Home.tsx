import { Header, ScrollToTopButton } from "@components";
import {
  HomeSection,
  OurSpaceSection,
  OurTrainersSection,
} from "./sub-components";
import { OurMembershipSection } from "./sub-components/ourMembershipSection/OurMembershipSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <OurSpaceSection />
      <OurMembershipSection />
      <OurTrainersSection />
      <ScrollToTopButton />
    </>
  );
};
