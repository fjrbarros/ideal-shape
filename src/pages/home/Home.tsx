import { Header, ScrollToTopButton } from "@components";
import {
  AboutUsSection,
  ContactSection,
  HomeSection,
  OurProductsSection,
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
      <OurProductsSection />
      <ContactSection />
      <ScrollToTopButton />
    </>
  );
};
