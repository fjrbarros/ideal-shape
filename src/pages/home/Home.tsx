import { Header, ScrollToTopButton } from "@components";
import { HomeSection, OurSpaceSection, OurTeamSection } from "./sub-components";
import { OurMembershipSection } from "./sub-components/ourMembershipSection/OurMembershipSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <OurSpaceSection />
      <OurMembershipSection />
      <OurTeamSection />
      <ScrollToTopButton />
    </>
  );
};
