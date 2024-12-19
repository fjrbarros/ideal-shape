import { Header, ScrollToTopButton } from "@components";
import {
  AboutUsSection,
  HomeSection,
  OurSpaceSection,
  OurTeamSection,
} from "./sub-components";
import { OurMembershipSection } from "./sub-components/ourMembershipSection/OurMembershipSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutUsSection />
      <OurSpaceSection />
      <OurMembershipSection />
      <OurTeamSection />
      <ScrollToTopButton />
    </>
  );
};
